
import { expect } from '@playwright/test';
import { assert } from 'console';
// Лобби
export function lobbyPage(page) {
    return {
        // Метод для перехода на страницу Лобби
        async goto() {
            await page.getByRole('button', { name: 'Лобби' }).click();
        },

        // Методы для проверок на странице Лобби
        async assertLobbyPage () {
            await expect(page).toHaveURL(/.*lobby/);
        },

        async assertLobbyVisible () {
            await expect(page.locator('#scrollArea').getByText('лобби')).toBeVisible();
        }
    };
}

// Гонка
export function racePage (page) {
    return {
        async goto() {
            await page.getByRole('button', { name: 'Гонка' }).click();
        },

        async assertRacePage () {
            await expect(page).toHaveURL(/.*race/);
        },

        async assertRaceVisible () {
            await expect(page.getByRole('cell', { name: 'Игрок' })).toBeVisible();
            await expect(page.getByRole('cell', { name: 'Сумма ставок' })).toBeVisible();
            await expect(page.getByRole('cell', { name: 'Приз' })).toBeVisible();
        }
    }
}
// Акции
export function promotionsPage (page) {
    return {
        async goto () {
            await page.getByRole('button', { name: 'Акции' }).click();
        },

        async assertPromotionsPage () {
            await expect(page).toHaveURL(/.*promotions/);
        },

        async assertPromotionsVisible () {
            await expect(page.getByText('Акции и предложенияНе пропустите возможность получить бонус в наших текущих акци')).toBeVisible();
        }
    }
}
// Турниры
export function tournamentsPage (page) {
    return {
        async goto () {
            await page.getByRole('button', { name: 'Турниры' }).click();
        },

        async assertTournamentPage () {
            await expect(page).toHaveURL(/.*tournaments/);
        },

        async assertTournamentVisible () {
            await expect(page.getByText('ТурнирыПоучаствуй в наших турнирах и забери свой приз')).toBeVisible();
        }
    }
}
// Вип клуб
export function VipClubPage (page) {
    return {
        async goto () {
            await page.getByRole('button', { name: 'VIP-клуб' }).click();
        },

        async assertVipClubPage () {
            await expect(page).toHaveURL(/.*club/);
        },

        async assertVipClubVisible () {
            await expect(page.getByText('Selector VIP CLUB', { exact: true })).toBeVisible();
            await page.locator('#scrollArea div').filter({ hasText: 'Непревзойденный VIP' }).nth(3).click();
            await expect(page.getByText('Уровни VIP')).toBeVisible();
            await expect(page.getByText('Высочайшая доходность для игрокаНаши бонусы абсолютно прозрачные. Все полученные бонусы вы сможете сразу выводить или снова пускать в игру. Только чистый профит без дополнительных условий для игроков и других подводных камней.Эксклюзивные и гибкие бонусыМы ценим каждого игрока. Ваш VIP-менеджер может поздравить вас с днем рождения и подарить вам новенький MacBook или подарить крупный бонус-код к новому году. Все это и многое другое возможно в нашем VIP-клубе')).toBeVisible();
            await expect(page.getByText('БронзаСумма ставок от 2 332.')).toBeVisible();
            await page.getByRole('button', { name: 'Серебро' }).click();
            await expect(page.getByText('СереброСумма ставок от 11 662')).toBeVisible();
            await page.getByRole('button', { name: 'Золото' }).click();
            await expect(page.getByText('ЗолотоСумма ставок от 69 972.')).toBeVisible();
            await page.getByRole('button', { name: 'Платина' }).click();
            await expect(page.getByText('ПлатинаСумма ставок от 174')).toBeVisible();
            await page.getByRole('button', { name: 'Алмаз' }).click();
            await expect(page.getByText('АлмазСумма ставок от 349 862.')).toBeVisible();
            await page.getByRole('button', { name: 'Элит' }).click();
            await expect(page.getByText('ЭлитСумма ставок от 699 724.')).toBeVisible();
        }
    }
}
// Промо
export function promoPage (page) {
    return {
        async goto () {
            await page.getByRole('button', { name: 'Промо' }).click();
        },

        async assertPromoPage () {
            await expect(page).toHaveURL(/.*promo/);
        },

        async assertPromoVisible () {
            await expect(page.getByText('Привяжи аккаунт Telegram')).toBeVisible();
            await expect(page.getByRole('main').locator('div').filter({ hasText: 'КрутитьКрути рулетку и получай бонусы!Раз в 15' }).nth(3)).toBeVisible();
            await expect(page.getByText('РефералыПриглашай друзей и зарабатывай 60')).toBeVisible();
            await expect(page.getByText('Selector VIP ClubВступай в лучшую программу лояльностиVIP-клуб')).toBeVisible();
        }
    }
}
// Партнеры
export function partnerPage (page) {
    return {
        async goto () {
            await page.getByRole('button', { name: 'Партнерам' }).click();
        },

        async assertPartnerPage () {
            await expect(page).toHaveURL(/.*partner/);
        },

        async assertPartnerVisible () {
            await expect(page.locator('div').filter({ hasText: /^Общее$/ })).toBeVisible();
            await expect(page.getByRole('button', { name: 'ID партнера: #' })).toBeVisible();
            await expect(page.getByText('Кабинет партнера')).toBeVisible();
        },

        async campaignCection () {
            await page.getByText('Кампании').click();
        },

        async campaignCectionVisible () {
            await expect(page.locator('div').filter({ hasText: /^Кампании$/ })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Обновить' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Экспорт' })).toBeVisible();
        },

        async staticsCection () {
            await page.getByText('Статистика').click();
        },

        async staticsCectionVisible () {
            await expect(page.locator('div').filter({ hasText: /^Статистика$/ })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Таблицей' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Графиком' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Экспорт' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Общая статистика' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Основная ссылка' })).toBeVisible();
        },

        async playersCection () {
            await page.getByText('Игроки').click();
        },

        async playersCectionVisible () {
            await expect(page.locator('div').filter({ hasText: /^Игроки$/ })).toBeVisible();
        },

        async accrualLogCection () {
            await page.getByText('Лог начислений').click();
        },

        async accrualLogCectionVisible () {
            await expect(page.locator('div').filter({ hasText: /^Лог начислений$/ })).toBeVisible();
        }
    }
}



    
    

  
