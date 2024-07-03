import { test, expect, describe } from '@playwright/test';
import { baseURL } from '../framework/config/config';
import { walletPage, cardP2P, cardChecker,ecorPay, onlineBank, yuMoney, piastrix, FkWallet, steam } from '../framework/pages/wallet.pages_objects';


describe('Тест Кошелька', () => {
  let page;
  
   
  test.beforeAll(async ({ browser }) => {
    // Устанавливаем предпочитаемый язык на русском, Устанавливаем размеры окна 1920x1080, Переходим на базовый URL, Устанавливаем значение в localStorage
    const context = await browser.newContext({
      locale: 'ru-RU',  // 
      extraHTTPHeaders: {
        'Accept-Language': 'ru-RU'
      },
      viewport: { width: 1920, height: 1080 }  // 
    });
    page = await context.newPage();

    await page.goto(baseURL.baseURL);

    await page.evaluate(() => {
      localStorage.setItem('user.key', '3e8nFD456R5a843P921GQ1axGP7pnM72');
    });

    await page.reload();
    await page.getByRole('button', { name: 'Кошелек' }).click();
 
  });

  // Тесты

  test ('Открытие Кошелька', async () => {
    await walletPage(page).walletVisible()
  });

  test ('Метод СБП', async () => {
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput()
  })

  test ('Метод Карта P2P', async () => {
    await cardP2P(page).gotoCardP2P();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput()
  }) 

  test ('EcorPay', async () => {
    await ecorPay(page).gotoEcorPay();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  test ('Online Bank', async () => {
    await onlineBank(page).gotoOnlineBank();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  test ('Юmoney', async () => {
    test.setTimeout(90000);
    await yuMoney(page).gotoYuMoney1();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
    await yuMoney(page).gotoYuMoney2();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
    await yuMoney(page).gotoYuMoney3();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  test ('Piastrix', async () => {
    await piastrix(page).gotoPiastrix();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  test ('FK Wallet', async () => {
    await FkWallet(page).gotoFkWallet();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  test ('Steam', async () => {
    await steam(page).gotoSteam();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })




  
 test.afterAll(async () => {
    // Закрыть страницу
    await page.close();
  });
});
