import { test, expect, describe } from '@playwright/test';
import { baseURL } from '../framework/config/config';
import { walletPage, cardP2P, cardChecker,ecorPay, onlineBank, yuMoney, piastrix, FkWallet, steam, sberPay , cryptoCurrency, bitcoin, ton , USDC, Litecoin, Ethereum, checkToken, Tron, BitcoinCash, BNB,Dash,Matic,TrueUsd,Dogecoin,DAI,Avalanche,Cardano,BTCB, WETH,WEVER,ZEFU,MDAO,AXS,DESU,withdrawCardSBP,withdrawCardP2P,withdrawEcorpay, withdrawal, withdrawFkWallet,withdrawPiastrix,withdrawYuMoney, withdrawMobilePayments,withdrawPayeer,withdrawAdvCash  } from '../framework/pages/wallet_mobile_pages_objects';
import {exec} from 'child_process'

describe('Тест Кошелька', () => {
  let page;
  
   
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      locale: 'ru-RU', 
      extraHTTPHeaders: {
        'Accept-Language': 'ru-RU'
      }
    });
    page = await context.newPage();

    await page.goto(baseURL.baseURL);

    await page.evaluate(() => {
      localStorage.setItem('user.key', '3e8nFD456R5a843P921GQ1axGP7pnM72');
    });

    await page.reload();

   
    const viewportSize = page.viewportSize();
    if (viewportSize.width < 900 || viewportSize.height < 856) {
      await page.getByRole('button', { name: 'Установить' }).click();
      await page.getByRole('button', { name: 'Назад' }).click();
    }
    await page.locator('#header').getByRole('button').nth(1).click();
    
   
  });
 
  

  // Тесты

  test ('Открытие Кошелька', async () => {
    await walletPage(page).walletVisible()
  });

  // СБП
  test ('Метод СБП', async () => {
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput()
  })

  // Карта P2P
  test ('Метод Карта P2P', async () => {
    await cardP2P(page).gotoCardP2P();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput()
  }) 

  // EcorPay
  test ('EcorPay', async () => {
    await ecorPay(page).gotoEcorPay();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

// SberPay
  test ('SberPay', async () => {
    await sberPay(page).gotoSberPay();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

// Online Bank
  test ('Online Bank', async () => {
    await onlineBank(page).gotoOnlineBank();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  // Юmoney
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

  // Piastrix
  test ('Piastrix', async () => {
    await piastrix(page).gotoPiastrix();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  // FK Wallet
  test ('FK Wallet', async () => {
    await FkWallet(page).gotoFkWallet();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  // Steam
  test ('Steam', async () => {
    await steam(page).gotoSteam();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })


  // Крипотовалюта (пополнение)

  // USDT
  test ('USDT', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
    await cryptoCurrency(page).USDTvisible();

    await cryptoCurrency(page).USDTtokenTRC20();
    await checkToken(page).checkTokenVisible();

    await cryptoCurrency(page).USDTtokenERC20();
    await checkToken(page).checkTokenVisible();

    await cryptoCurrency(page).USDTtokenBEP20();
    await checkToken(page).checkTokenVisible();

    await cryptoCurrency(page).USDTtokenAVAXC();
    await checkToken(page).checkTokenVisible();

    await cryptoCurrency(page).USDTtokenPolygon();
    await checkToken(page).checkTokenVisible();

    await cryptoCurrency(page).USDTtokenARB1();
    await checkToken(page).checkTokenVisible();

    await cryptoCurrency(page).USDTtokenTon()
    
  })

  // Bitcoin
  test ('Bitcoin', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
    await bitcoin(page).gotoBitcoin();
    await checkToken(page).checkTokenVisible();
  })

  // Ton
  test ('Ton', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
    await ton(page).gotoTon()
    await ton(page).tonVisible()
  })

   // USDC
  test ('USDC', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
    await USDC(page).gotoUSDC();
    await USDC(page).USDCvisible();
    await USDC(page).USDCtokenERC20();
    await checkToken(page).checkTokenVisible();
    await USDC(page).USDCtokenBEP20();
    await checkToken(page).checkTokenVisible();
    await USDC(page).USDCtokenPolygon();
    await checkToken(page).checkTokenVisible();
    await USDC(page).USDCtokenAVAXC();
    await checkToken(page).checkTokenVisible();
    await USDC(page).USDCtokenARB1();
    await checkToken(page).checkTokenVisible();
  })

   // Litecoin
  test ('Litecoin', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
  await Litecoin(page).gotoLitecoin();
  await checkToken(page).checkTokenVisible();
})

 // Ethereum
  test ('Ethereum', async() => {
    await cryptoCurrency(page).gotoCryptoCurrency();
  await Ethereum(page).gotoEthereum();
  await Ethereum(page).EthereumToken();
  await checkToken(page).checkTokenVisible();
  await Ethereum(page).EthereumTokenTRC20();
  await checkToken(page).checkTokenVisible();
  await Ethereum(page).EthereumTokenARB1();
  await checkToken(page).checkTokenVisible();  
})

 // Tron
  test ('Tron', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await Tron(page).gotoTron();
  await checkToken(page).checkTokenVisible();
 })

 // Bitcoin Cash
  test ('Bitcoin Cash', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
    await BitcoinCash(page).gotoBitcoinCash();
    await checkToken(page).checkTokenVisible();
   })

// BNB 
  test ('BNB ', async () => {
    await cryptoCurrency(page).gotoCryptoCurrency();
    await BNB(page).gotoBNB();
    await checkToken(page).checkTokenVisible();
   })

// Dash
test ('Dash', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await Dash(page).gotoDash();
  await checkToken(page).checkTokenVisible();
 })

// Matic 
test ('Matic', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await Matic(page).gotoMatic();
  await checkToken(page).checkTokenVisible();
 })

// True USD
test ('True USD', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await TrueUsd(page).gotoTrueUsd();
  await checkToken(page).checkTokenVisible();
  await TrueUsd(page).TrueUsdTokenBEP20();
  await checkToken(page).checkTokenVisible();
  await TrueUsd(page).TrueUsdTokenAVAXC();
  await checkToken(page).checkTokenVisible();
 })

// Dogecoin
 test ('Dogecoin', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await Dogecoin(page).gotoDogecoin();
  await checkToken(page).checkTokenVisible();
 })

 // DAI
 test ('DAI', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await DAI(page).gotoDAI();
  await checkToken(page).checkTokenVisible();
  await DAI(page).DAItokenERC20();
  await checkToken(page).checkTokenVisible();
  await DAI(page).DAItokenBEP20();
  await checkToken(page).checkTokenVisible();
  await DAI(page).DAItokenARB1();
  await checkToken(page).checkTokenVisible();
 })

// Avalanche
test ('Avalanche', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await Avalanche(page).gotoAvalanche();
  await checkToken(page).checkTokenVisible();
})

// Cardano
test ('Cardano', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await Cardano(page).gotoCardano();
  await checkToken(page).checkTokenVisible();
})

// BTCB
test ('BTCB', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await BTCB(page).gotoBTCB();
  await checkToken(page).checkTokenVisible();
})

// WETH 
test ('WETH', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await WETH(page).gotoWETH();
  await checkToken(page).checkTokenVisible();
})

// WEVER
test ('WEVER', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await WEVER(page).gotoWEVER();
  await checkToken(page).checkTokenVisible();
})

// ZEFU
test ('ZEFU', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await ZEFU(page).gotoZEFU();
  await checkToken(page).checkTokenVisible();
})

// MDAO
test ('MDAO', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await MDAO(page).gotoMDAO();
  await checkToken(page).checkTokenVisible();
})

// AXS
test ('AXS', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await AXS(page).gotoAXS();
  await AXS(page).AXStokenERC20()
  await checkToken(page).checkTokenVisible();
  await AXS(page).AXStokenTRC20()
  await checkToken(page).checkTokenVisible();
})

// DESU
test ('DESU', async () => {
  await cryptoCurrency(page).gotoCryptoCurrency();
  await DESU(page).gotoDESU();
  await checkToken(page).checkTokenVisible();
})

// Выводы

// Вывод СБП
test ('Вывод СБП', async () => {
  test.setTimeout(90000);
  await withdrawal(page).gotoWithdrawal();
  await withdrawCardSBP(page).gotoWithdrawCardSBP();
  await withdrawCardSBP(page).withdrawCardSBPVisible();
  await withdrawal(page).withdrawalCheck();
})
// Вывод P2P
test ('Вывод P2P', async () => {
  test.setTimeout(90000);
  await withdrawCardP2P(page).gotoWithdrawCardP2P();
  await withdrawal(page).withdrawalCheck();

})
// Вывод Ecorpay
test ('Вывод Ecorpay', async () => {
  test.setTimeout(90000);
  await withdrawEcorpay(page).gotoWithdrawEcorpay()
  await withdrawal(page).withdrawalCheck();

})

// Вывод ЮMoney
test ('Вывод ЮMoney', async () => {
  test.setTimeout(90000);
  await withdrawYuMoney(page).gotoWithdrawYuMoney()
  await withdrawal(page).withdrawalCheck();
})

// Вывод Piastrix
test ('Вывод Piastrix', async () => {
  test.setTimeout(90000);
  await withdrawPiastrix(page).gotoWithdrawPiastrix();
  await withdrawal(page).withdrawalCheck();
})

// Вывод FK Wallet
test ('Вывод FK Wallet', async () => {
  test.setTimeout(90000);
  await withdrawFkWallet(page).gotoWithdrawFkWallet()
  await withdrawal(page).withdrawalCheck();
})

// Вывод Моб платежи
test('Вывод Моб платежи', async () => {
  const mobileOperators = ['Yota', 'Rostelecom', 'Sber Mobile', 'Tinkoff', 'Теле', 'Билайн', 'Мегафон', 'МТС'];

  // Вызов методов напрямую
  await withdrawMobilePayments(page).gotoWithdrawMobilePayments();
  await withdrawMobilePayments(page).withdrawMobilePaymentsVisible();

  for (const operator of mobileOperators) {
      await withdrawMobilePayments(page).gotoOperator(operator);
      await withdrawMobilePayments(page).withdrawMobilePaymentsVisible();
  }

  await withdrawal(page).withdrawalCheck();
});
// Вывод Payeer
test ('Вывод Payeer', async () => {
  test.setTimeout(90000);
  await withdrawPayeer(page).gotoPayeer();
  await withdrawal(page).withdrawalCheck();
})

// Вывод AdvCash
test ('Вывод AdvCash', async () => {
  
  await withdrawAdvCash(page).gotoWithdrawAdvCash();
  await withdrawal(page).withdrawalCheck();
})



 test.afterAll(async () => {
    // Закрыть страницу
    await page.close();
    
  });
});

