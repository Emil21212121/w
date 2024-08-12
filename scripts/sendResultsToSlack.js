const fs = require('fs');
const axios = require('axios');
const path = require('path');

const allureResultsPath = 'allure-results';
const webhookURL = '';

function getAllureSummary(testType) {
  if (!fs.existsSync(allureResultsPath)) {
    console.error(`Директория ${allureResultsPath} не найдена.`);
    return 'Отчет не может быть собран: директория с результатами отсутствует.';
  }

  const files = fs.readdirSync(allureResultsPath);
  let totalTests = 0, passedTests = 0, failedTests = 0, skippedTests = 0, brokenTests = 0;

  files.forEach(file => {
    if (file.endsWith('.json')) {
      try {
        const content = JSON.parse(fs.readFileSync(path.join(allureResultsPath, file), 'utf8'));
        if (content.status) {
          totalTests++;
          if (content.status === 'passed') passedTests++;
          if (content.status === 'failed') failedTests++;
          if (content.status === 'skipped') skippedTests++;
          if (content.status === 'broken') brokenTests++;
        }
      } catch (error) {
        console.error(`Ошибка при обработке файла ${file}:`, error.message);
      }
    }
  });

  return `${testType}:\nОбщее количество тестов: ${totalTests}\nУспешно: ${passedTests}\nПровалено: ${failedTests}\nПропущено: ${skippedTests}\nСломано: ${brokenTests}`;
}

const sendMessageToSlack = async (message) => {
  try {
    const response = await axios.post(webhookURL, { text: message });
    console.log('Сообщение успешно отправлено в Slack:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке сообщения в Slack:', error);
  }
};

(async () => {
  const testType = process.argv[2];

  let summary;

  switch (testType) {
    case 'wallet-desktop':
      summary = getAllureSummary('Кошелек тесты десктоп');
      break;
    case 'wallet-mobile':
      summary = getAllureSummary('Кошелек тесты мобайл');
      break;
    case 'ui-desktop':
      summary = getAllureSummary('Ui тесты десктоп');
      break;
    case 'ui-mobile':
      summary = getAllureSummary('Ui тесты мобайл');
      break;
    default:
      console.warn('Неизвестный тип тестов:', testType);
      summary = 'Не удалось собрать отчет: неизвестный тип тестов.';
      break;
  }

  await sendMessageToSlack(summary);
})();

