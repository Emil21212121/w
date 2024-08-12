import { expect } from '@playwright/test';
import exp from 'constants';
import { futimes } from 'fs';

// Открытие Кошелька
export function walletPage (page) {
    return {

        async walletVisible () {
            await expect(page.getByRole('button', { name: 'Депозит' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Вывод' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'История' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Деньги' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Криптовалюта' })).toBeVisible();
            await expect(page.getByText('Валюта пополнения')).toBeVisible();
            await expect(page.getByText('Выберите оператора')).toBeVisible();
            await expect(page.getByText('Сумма пополнения')).toBeVisible();
            await expect(page.locator('#inputDeposit')).toBeVisible();
            await expect(page.getByRole('button', { name: 'Перейти к оплате' })).toBeVisible();

        }
    }
}

// Обработчики
export function cardChecker(page) {
    return {
        async cardValueCheckerVisible() {
            const buttonNames = [
                { name: '100 ₽' },
                { name: '500 ₽', exact: true },
                { name: '1000 ₽' },
                { name: '2500 ₽' },
                { name: '5000 ₽' },
                { name: 'Перейти к оплате' }
            ];

            for (const options of buttonNames) {
                await expect(page.getByRole('button', options)).toBeVisible();
            }
        },

        async cardValueCheckerInput() {
            const buttonActions = [
                { name: '100 ₽', value: '100' },
                { name: '500 ₽', exact: true, value: '500' },
                { name: '1000 ₽', value: '1000' },
                { name: '2500 ₽', value: '2500' },
                { name: '5000 ₽', value: '5000' }
            ];

            for (const action of buttonActions) {
                await page.getByRole('button', { name: action.name, exact: action.exact }).click();
                await page.locator('#inputDeposit').fill(action.value);
            }
        }
    }
}

// Карта P2P 
export function cardP2P (page) {
    return {
        async gotoCardP2P() {
            await page.getByRole('button', { name: 'Карта P2P' }).click();
        }
    };
}

// Карта EcorPay
export function ecorPay (page) {
    return {
        async gotoEcorPay () {
            await page.getByRole('button', { name: 'Ecorpay fire' }).click();
            await expect(page.locator('div').filter({ hasText: /^Выберите оператораEcorpay$/ }).getByRole('button')).toBeVisible();
        }
    }
}

export function sberPay (page) {
    return {
        async gotoSberPay () {
            await page.getByRole('button', { name: 'SberPay' }).click();
            await expect(page.locator('div').filter({ hasText: /^Выберите оператораSberPay$/ }).getByRole('button')).toBeVisible();
        }
    }
}

// Карта Online Bank
export function onlineBank (page) {
    return {
        async gotoOnlineBank () {
            await page.getByRole('button', { name: 'Онлайн банк' }).click();
            await expect(page.locator('div').filter({ hasText: /^Выберите оператораОнлайн банк$/ }).getByRole('button')).toBeVisible();
        }
    }
}

// Юmoney
export function yuMoney (page) {
    return {
        async gotoYuMoney1 () {
            await page.getByRole('button', { name: 'ЮMoney' }).click();
        },
        async gotoYuMoney2 () {
            await page.getByRole('button', { name: 'ЮMoney' }).nth(2).click();
        },
        async gotoYuMoney3 () {
            await page.getByRole('button', { name: 'ЮMoney' }).nth(3).click();
        }
    }
}

// Piastrix
export function piastrix (page) {
    return {
        async gotoPiastrix () {
            await page.getByRole('button', { name: 'Piastrix' }).click();
            await expect(page.locator('div').filter({ hasText: /^Выберите оператораPiastrix$/ }).getByRole('button')).toBeVisible();
        }
    }
}

// FK Wallet
export function FkWallet (page) {
    return {
        async gotoFkWallet () {
            await page.getByRole('button', { name: 'FK Wallet' }).click();
            await expect(page.locator('div').filter({ hasText: /^Выберите оператораFK Wallet$/ }).getByRole('button')).toBeVisible();
        }
    }
}

// Steam
export function steam (page) {
    return {
        async gotoSteam () {
            await page.getByRole('button', { name: 'Steam' }).click();
            await expect(page.locator('div').filter({ hasText: /^Выберите оператораSteam$/ }).getByRole('button')).toBeVisible();
        }
    }
}

// Криптовалюта
export function checkToken (page) {
    return {
        async checkTokenVisible () {
            await expect(page.getByText('Выберите сеть')).toBeVisible();
            await expect(page.getByText('Кошелек для пополнения')).toBeVisible();
            await expect(page.locator('input[name="address"]')).toBeVisible();
            await expect(page.locator('path').first()).toBeVisible();
        }
    }
}
// USDT
export function cryptoCurrency (page) {
    return {
        async gotoCryptoCurrency () {
            await page.getByRole('button', { name: 'Криптовалюта' }).click();
        },

        async USDTvisible () {
            await expect(page.getByRole('button', { name: 'TRC20' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'ERC20' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'BEP20' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Polygon' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'AVAXC' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'ARB1' })).toBeVisible();
        },

        async USDTtokenTRC20 () {
            await page.getByRole('button', { name: 'TRC20' }).click();
        },

        async USDTtokenERC20 () {
            await page.getByRole('button', { name: 'ERC20' }).click();
        },
        
        async USDTtokenBEP20 () {
            await page.getByRole('button', { name: 'BEP20' }).click();
        },

        async USDTtokenPolygon () {
            await page.getByRole('button', { name: 'Polygon' }).click();
        },

        async USDTtokenAVAXC () {
            await page.getByRole('button', { name: 'AVAXC' }).click();
        },

        async USDTtokenARB1 () {
            await page.getByRole('button', { name: 'ARB1' }).click();
        }
    }
}

// Bitcoin
export function bitcoin (page) {
    return {
        async gotoBitcoin () {
            await page.getByRole('button', { name: 'Bitcoin', exact: true }).click();
        },

        async bitcoinVisible () {
        } 
    }
}

// USDC
export function USDC (page) {
    return {
        async gotoUSDC () {
            await page.getByRole('button', { name: 'USDC' }).click();
        },

        async USDCvisible () {
            await expect(page.getByRole('button', { name: 'ERC20' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'BEP20' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Polygon' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'AVAXC' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'ARB1' })).toBeVisible();
        },

        async USDCtokenERC20 () {
            await page.getByRole('button', { name: 'ERC20' }).click();
        },

        async USDCtokenBEP20 () {
            await page.getByRole('button', { name: 'BEP20' }).click();
        },

        async USDCtokenPolygon () {
            await page.getByRole('button', { name: 'Polygon' }).click();
        },

        async USDCtokenAVAXC () {
            await page.getByRole('button', { name: 'AVAXC' }).click();
        },

        async USDCtokenARB1 () {
            await page.getByRole('button', { name: 'ARB1' }).click();
        }
    }
}

// Litecoin
export function Litecoin (page) {
    return {
        async gotoLitecoin () {
            await page.getByRole('button', { name: 'Litecoin' }).click();
        }
    }
}

// Ethereum
export function Ethereum (page) {
    return {
        async gotoEthereum () {
            await page.getByRole('button', { name: 'Ethereum' }).click();
        },

        async EthereumToken () {
            await page.getByRole('button', { name: 'Ethereum' }).nth(1).click();
           
        },

        async EthereumTokenTRC20 () {
            await page.getByRole('button', { name: 'TRC20' }).click();
        },

        async EthereumTokenARB1 () {
            await page.getByRole('button', { name: 'ARB1' }).click();
        }
    }
}

// Tron
export function Tron (page) {
    return {
        async gotoTron () {
            await page.getByRole('button', { name: 'Tron' }).click();
        }
    }
}
// Bitcoin Cash
export function BitcoinCash (page) {
    return {
        async gotoBitcoinCash () {
            await page.getByRole('button', { name: 'Bitcoin Cash' }).click();
        }
    } 
}

// BNB 
export function BNB (page) {
    return {
        async gotoBNB () {
            await page.getByRole('button', { name: 'BNB' }).click();
        }
    }
}

// Dash
export function Dash (page) {
    return {
        async gotoDash () {
            await page.getByRole('button', { name: 'Dash' }).click();
        }
    }
}

// Matic
export function Matic (page) {
    return {
        async gotoMatic () {
            await page.getByRole('button', { name: 'Matic' }).click();
        }
    }
} 

// True USD
export function TrueUsd (page) {
    return {
        async gotoTrueUsd () {
            await page.getByRole('button', { name: 'TrueUSD' }).click();
        },

        async TrueUsdTokenBEP20 () {
            await page.getByRole('button', { name: 'BEP20' }).click();
        },

        async TrueUsdTokenAVAXC () {
            await page.getByRole('button', { name: 'AVAXC' }).click();
        }
    }
}

// Dogecoin
export function Dogecoin (page) {
    return {
        async gotoDogecoin () {
            await page.getByRole('button', { name: 'Dogecoin' }).click();
        }    
        
    }
}

// DAI
export function DAI (page) {
    return {
        async gotoDAI () {
            await page.getByRole('button', { name: 'DAI' }).click();
        },

        async DAItokenERC20 () {
            await page.getByRole('button', { name: 'ERC20' }).click();
        },

        async DAItokenBEP20 () {
            await page.getByRole('button', { name: 'BEP20' }).click();
        },

        async DAItokenARB1 () {
            await page.getByRole('button', { name: 'ARB1' }).click();
        }
    }
}

// Avalanche
export function Avalanche (page) {
    return {
        async gotoAvalanche () {
            await page.getByRole('button', { name: 'Avalanche' }).click();
        }
    }
}

// Cardano
export function Cardano (page) {
    return {
        async gotoCardano () {
            await page.getByRole('button', { name: 'Cardano' }).click();
        }

    }
}

// BTCB
export function BTCB (page) {
    return {
        async gotoBTCB () {
            await page.getByRole('button', { name: 'BTCB' }).click();
        }

    }
}

// WETH 
export function WETH (page) {
    return {
        async gotoWETH () {
            await page.getByRole('button', { name: 'WETH' }).click();
        }
    }
}

// WEVER
export function WEVER (page) {
    return {
        async gotoWEVER() {
            await page.getByRole('button', { name: 'WEVER' }).click();
        }
    }
}

// ZEFU
export function ZEFU (page) {
    return {
        async gotoZEFU () {
            await page.getByRole('button', { name: 'ZEFU' }).click();
        }
    }
}

// MDAO
export function MDAO (page) {
    return {
        async gotoMDAO () {
            await page.getByRole('button', { name: 'MDAO' }).click();
        }
    }
}

// AXS
export function AXS (page) {
    return {
        async gotoAXS () {
            await page.getByRole('button', { name: 'AXS' }).click();
        },

        async AXStokenERC20 () {
            await page.getByRole('button', { name: 'ERC20' }).click();
        },

        async AXStokenTRC20 () {
            await page.getByRole('button', { name: 'TRC20' }).click();
        }
    }
}

// DESU
export function DESU (page) {
    return {
        async gotoDESU () {
            await page.getByRole('button', { name: 'DESU' }).click();
        }
    }
}

// Вывод 

export function withdrawal (page) {
    return {
        async gotoWithdrawal () {
            await page.getByRole('button', { name: 'Вывод' }).click();
        },

        async withdrawalCheck () {
            await expect(page.getByText('Выберите оператора')).toBeVisible();
            await expect(page.getByText('Номер счета')).toBeVisible();
            await expect(page.getByText('Сумма вывода')).toBeVisible();
            await expect(page.getByText('К получению')).toBeVisible();
            await expect(page.getByRole('button', { name: 'Создать заявку' })).toBeVisible();
            await expect (page.locator('xpath=//*[@id="inputWallet"]')).toBeVisible();
        }
    }
}

// СБП
export function withdrawCardSBP (page) {
    return {
        async gotoWithdrawCardSBP () {
            await page.getByRole('button', { name: 'Карта СБП' }).click();
        },

        async withdrawCardSBPVisible () {
            await expect(page.getByPlaceholder('Выберите банк')).toBeVisible();
        }
    }
}

// Карта P2P
export function withdrawCardP2P (page) {
    return {
        async gotoWithdrawCardP2P () {
            await page.getByRole('button', { name: 'Карта P2P' }).click();
        }
    }
}

// Ecorpay
export function withdrawEcorpay (page) {
    return {
        async gotoWithdrawEcorpay () {
            await page.getByRole('button', { name: 'Ecorpay' }).click();
        },
    }
}

// ЮMoney
export function withdrawYuMoney (page) {
    return {
        async gotoWithdrawYuMoney () {
            await page.getByRole('button', { name: 'ЮMoney' }).click();
        }
    }
}

// Piastrix
export function withdrawPiastrix (page) {
    return {
        async gotoWithdrawPiastrix () {
            await page.getByRole('button', { name: 'Piastrix' }).click();
        }
    }
}

// FK Wallet
export function withdrawFkWallet (page) {
    return {
        async gotoWithdrawFkWallet () {
            await page.getByRole('button', { name: 'FK Wallet' }).click();
        }
    }
}

// Моб Платежи
export function withdrawMobilePayments(page) {
    return {
        async gotoWithdrawMobilePayments() {
            await page.getByRole('button', { name: 'Моб. платежи' }).click();
        },

        async withdrawMobilePaymentsVisible() {
            const buttons = [
                'Skylink',
                'Yota',
                'Rostelecom',
                'Sber Mobile',
                'Tinkoff',
                'Теле',
                'Билайн',
                'Мегафон',
                'МТС'
            ];

            for (const button of buttons) {
                await expect(page.getByRole('button', { name: button })).toBeVisible();
            }
        },

        async gotoYota () {
            await page.getByRole('button', { name: 'Yota' }).click();
            
        },

        async gotoRostelecom () {
            await page.getByRole('button', { name: 'Rostelecom' }).click();
        },

        async gotoSberMobile () {
            await page.getByRole('button', { name: 'Sber Mobile' }).click();
        },

        async gotoTinkoff () {
            await page.getByRole('button', { name: 'Tinkoff' }).click();
        },

        async gotoTele () {
            await page.getByRole('button', { name: 'Теле' }).click();
        },

        async gotoBilayn () {
            await page.getByRole('button', { name: 'Билайн' }).click();
        },

        async gotoMegafon () {
            await page.getByRole('button', { name: 'Мегафон' }).click();
        },

        async gotoMTC () {
            await page.getByRole('button', { name: 'МТС' }).click();
        }
    };
}
// Payeer
export function withdrawPayeer (page) {
    return {
        async gotoPayeer () {
            await page.getByRole('button', { name: 'Payeer' }).click();
        }
    }
}

// AdvCash
export function withdrawAdvCash (page) {
    return {
        async gotoWithdrawAdvCash () {
            await page.getByRole('button', { name: 'AdvCash' }).click();
        }
    }
}