const fs = require('fs');
const axios = require('axios');
const path = require('path');

const allureResultsPath = 'allure-results';
const webhookURL = ''; //https://hooks.slack.com/services/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
const allureReportURL = 'http://65.109.97.229:8080/job/Selector_wallet_test/allure/';

function getAllureSummary(testType) {
  if (!fs.existsSync(allureResultsPath)) {
    console.error(`Директория ${allureResultsPath} не найдена.`);
    return {
      message: 'Отчет не может быть собран: директория с результатами отсутствует.',
      failedOrBroken: false,
    };
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

  const summaryMessage = `${testType}:\nОбщее количество тестов: ${totalTests}\nУспешно: ${passedTests}\nПровалено: ${failedTests}\nПропущено: ${skippedTests}\nСломано: ${brokenTests}`;
  
  return {
    message: summaryMessage,
    failedOrBroken: failedTests > 0 || brokenTests > 0,
  };
}

const sendMessageToSlack = async (message) => {
  const fullMessage = `${message}\n[Посмотреть полный Allure отчет](${allureReportURL})`;
  try {
    const response = await axios.post(webhookURL, { text: fullMessage });
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
      summary = getAllureSummary('Кошелек Пополнение тесты десктоп');
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
      summary = {
        message: 'Не удалось собрать отчет: неизвестный тип тестов.',
        failedOrBroken: false,
      };
      break;
  }

 
  if (summary.failedOrBroken) {
    await sendMessageToSlack(summary.message);
  } else {
    console.log('Все тесты прошли успешно, сообщение в Slack не отправлено.');
  }
})();
