import { expect } from '@playwright/test';

// Открытие Кошелька
export function walletPage (page) {
    return {

        async walletVisible () {
            await expect(page.locator('._contentRight_1p3x4_7449')).toBeVisible();
            await expect(page.getByRole('button', { name: 'Депозит' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Вывод' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'История' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Деньги' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Криптовалюта+30%' })).toBeVisible();
            await expect(page.getByText('Валюта пополнения')).toBeVisible();
            await expect(page.getByText('Выберите оператора')).toBeVisible();
            await expect(page.getByText('Сумма пополнения')).toBeVisible();
            await expect(page.locator('#inputDeposit')).toBeVisible();
            await expect(page.getByRole('button', { name: 'Перейти к оплате' })).toBeVisible();

        }
    }
}

// Обработчики
export function cardChecker (page) {
    return {
        async cardValueCheckerVisible () {
            await expect(page.getByRole('button', { name: '100 ₽' })).toBeVisible();
            await expect(page.getByRole('button', { name: '500 ₽', exact: true })).toBeVisible();
            await expect(page.getByRole('button', { name: '1000 ₽' })).toBeVisible();
            await expect(page.getByRole('button', { name: '2500 ₽' })).toBeVisible();
            await expect(page.getByRole('button', { name: '5000 ₽' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Перейти к оплате' })).toBeVisible();
        },

        async cardValueCheckerInput () {
            await page.getByRole('button', { name: '100 ₽' }).click();
            await page.locator('#inputDeposit').fill('100');
            await page.getByRole('button', { name: '500 ₽', exact: true }).click();
            await page.locator('#inputDeposit').fill('500');
            await page.getByRole('button', { name: '1000 ₽' }).click();
            await page.locator('#inputDeposit').fill('1000');
            await page.getByRole('button', { name: '2500 ₽' }).click();
            await page.locator('#inputDeposit').fill('2500');
            await page.getByRole('button', { name: '5000 ₽' }).click();
            await page.locator('#inputDeposit').fill('5000');
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
        }
    }
}

// Карта Online Bank
export function onlineBank (page) {
    return {
        async gotoOnlineBank () {
            await page.getByRole('button', { name: 'Онлайн банк' }).click();
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
        }
    }
}

// FK Wallet
export function FkWallet (page) {
    return {
        async gotoFkWallet () {
            await page.getByRole('button', { name: 'FK Wallet' }).click();
        }
    }
}

// Steam
export function steam (page) {
    return {
        async gotoSteam () {
            await page.getByRole('button', { name: 'Steam' }).click();
        }
    }
}


