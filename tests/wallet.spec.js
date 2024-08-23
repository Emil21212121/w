import { test, expect, describe } from '@playwright/test';
import { baseURL } from '../framework/config/config';
import { walletPage, cardP2P, cardChecker,ecorPay, onlineBank, yuMoney, piastrix, FkWallet, steam, sberPay, cryptoCurrency, bitcoin, ton, USDC, Litecoin, Ethereum, checkToken, Tron, BitcoinCash, BNB,Dash,Matic,TrueUsd,Dogecoin,DAI,Avalanche,Cardano,BTCB, WETH,WEVER,ZEFU,MDAO,AXS,DESU, withdrawal, withdrawCardSBP, withdrawCardP2P, withdrawEcorpay, withdrawYuMoney, withdrawPiastrix, withdrawFkWallet, withdrawMobilePayments, withdrawAdvCash, withdrawPayeer } from '../framework/pages/wallet.pages_objects';



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
    await page.getByRole('button', { name: 'Кошелек' }).click();
   
  });
 
  

  // Тесты

  test ('Открытие Кошелька', async () => {
    await walletPage(page).walletVisible()
  });

  // СБП
  test ('Метод СБП', async () => {
    test.setTimeout(90000);
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput()
  })

  // Карта P2P
  test ('Метод Карта P2P', async () => {
    test.setTimeout(90000);
    await cardP2P(page).gotoCardP2P();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput()
  }) 

  // EcorPay
  test ('EcorPay', async () => {
    test.setTimeout(90000);
    await ecorPay(page).gotoEcorPay();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

// SberPay
  test ('SberPay', async () => {
    test.setTimeout(90000);
    await sberPay(page).gotoSberPay();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

// Online Bank
  test ('Online Bank', async () => {
    test.setTimeout(90000);
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
    test.setTimeout(90000);
    await piastrix(page).gotoPiastrix();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  // FK Wallet
  test ('FK Wallet', async () => {
    test.setTimeout(90000);
    await FkWallet(page).gotoFkWallet();
    await cardChecker(page).cardValueCheckerVisible();
    await cardChecker(page).cardValueCheckerInput();
  })

  // Steam
  test ('Steam', async () => {
    test.setTimeout(90000);
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

    await cryptoCurrency(page).USDTtokenTon();
    
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
    await ton(page).gotoTon();
    await ton(page).tonVisible();
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

// Вывод

// СБП
test ('Вывод СБП', async () => {
  await withdrawal(page).gotoWithdrawal();
  await withdrawCardSBP(page).withdrawCardSBPVisible();
  await withdrawal(page).withdrawalCheck();
  await withdrawCardSBP(page).withdrawCardSBPVisible();
  
})

// P2P
test ('Вывод P2P', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawCardP2P(page).gotoWithdrawCardP2P();
  await withdrawal(page).withdrawalCheck();
})

// Ecorpay
test ('Вывод Ecorpay', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawEcorpay(page).gotoWithdrawEcorpay();
  await withdrawal(page).withdrawalCheck()
}) 

// ЮMoney
test ('Вывод ЮMoney', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawYuMoney(page).gotoWithdrawYuMoney()
  await withdrawal(page).withdrawalCheck()
})

// Piastrix
test ('Вывод Piastrix', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawPiastrix(page).gotoWithdrawPiastrix();
  await withdrawal(page).withdrawalCheck()
})

// Fk Wallet
test ('Вывод Fk Wallet', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawFkWallet(page).gotoWithdrawFkWallet();
  await withdrawal(page).withdrawalCheck()
})

// Моб Платежи
test ('Вывод Моб платежи', async () => {
  const mobileOperators = ['Yota', 'Rostelecom', 'SberMobile', 'Tinkoff', 'Tele', 'Bilayn', 'Megafon', 'MTC'];
  
  //await withdrawal(page).gotoWithdrawal();
  await withdrawMobilePayments(page).gotoWithdrawMobilePayments();
  await withdrawMobilePayments(page).withdrawMobilePaymentsVisible();

  for (const operator of mobileOperators) {
    await withdrawMobilePayments(page)[`goto${operator}`]();
    await withdrawMobilePayments(page).withdrawMobilePaymentsVisible();
  }

  await withdrawal(page).withdrawalCheck();
});


// Payeer
test ('Вывод Payeer', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawPayeer(page).gotoPayeer();
  await withdrawal(page).withdrawalCheck()
})

// Adv Cash
test ('Вывод Adv Cash', async () => {
  //await withdrawal(page).gotoWithdrawal();
  await withdrawAdvCash(page).gotoWithdrawAdvCash()
  await withdrawal(page).withdrawalCheck()
})
  
test.afterAll(async () => {
  await page.close();

});
})

