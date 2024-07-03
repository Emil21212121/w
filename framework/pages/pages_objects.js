
import { expect } from '@playwright/test';

// Главная
export function mainPage (page) {
    return {
        async assertMainVisible () {
            await expect(page.getByRole('main')).toBeVisible();
            await expect(page.getByRole('link', { name: 'Новинки' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Слоты' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Live', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Джекпот', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Instant Win' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Рулетка' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Новые игры' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Популярные игры' })).toBeVisible();
        }
    }
}

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
// Лобби Выпадающий список Категории
export function lobbyCategoryList (page) {
    return {

        async categoryList () {
            await page.getByRole('button', { name: 'Категории' }).click();
        },

        async categoryListVisible () {
            await expect(page.getByRole('button', { name: 'Slots' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Live Games' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Jackpot' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Instant Win' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Roulette' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Blackjack' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Bonus Buy' })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Virtual Sports' })).toBeVisible();
        }
    }
}  

// Лобби Выпадающий список Провайдеры

export function lobbyProviderList (page) {
    return {

        async providerList () {
            await page.getByRole('button', { name: 'Провайдеры' }).click();
        },

        async providerListVisible () {
            await expect(page.getByPlaceholder('Например: Novomatic')).toBeVisible();
        }
    }
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
            await expect(page.getByText(/БронзаСумма ставок от.*/)).toBeVisible();
            await page.getByRole('button', { name: 'Серебро' }).click();
            await expect(page.getByText(/СереброСумма ставок от.*/)).toBeVisible();
            await page.getByRole('button', { name: 'Золото' }).click();
            await expect(page.getByText(/ЗолотоСумма ставок от.*/)).toBeVisible();
            await page.getByRole('button', { name: 'Платина' }).click();
            await expect(page.getByText(/ПлатинаСумма ставок от.*/)).toBeVisible();
            await page.getByRole('button', { name: 'Алмаз' }).click();
            await expect(page.getByText(/АлмазСумма ставок от.*/)).toBeVisible();
            await page.getByRole('button', { name: 'Элит' }).click();
            await expect(page.getByText(/ЭлитСумма ставок от.*/)).toBeVisible();
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

// Категории Игр

export function gameCategory (page) {
    return {
        async slotsCategory () {
            await page.getByRole('button', { name: 'Слоты' }).click();
        },

        async slotsCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/1/);
            await expect(page.getByRole('button', { name: 'Slots' })).toBeVisible();
        },

        async liveGameCategory () {
            await page.getByRole('button', { name: 'Live игры' }).click(); 
        },

        async liveGameCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/2/);
            await expect(page.getByRole('button', { name: 'Live Games' })).toBeVisible();
        },

        async jackpotCategory () {
            await page.getByRole('button', { name: 'Джекпоты' }).click();
        },

        async jackpotCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/7/);
            await expect(page.getByRole('button', { name: 'Jackpot' })).toBeVisible();
        },

        async instantWinCategory () {
            await page.getByRole('button', { name: 'Быстрые игры' }).click();
        },

        async instantWinCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/8/);
            await expect(page.getByRole('button', { name: 'Instant Win' })).toBeVisible();
        },

        async rouleteteCategory () {
            await page.getByRole('button', { name: 'Рулетка' }).click();
        },

        async rouleteteCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/3/);
            await expect(page.getByRole('button', { name: 'Roulette' })).toBeVisible();
        },

        async blackJackCategory () {
            await page.getByRole('button', { name: 'Блекджек' }).click();
        },

        async blackJackCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/4/);
            await expect(page.getByRole('button', { name: 'Blackjack' })).toBeVisible();
        },

        async bonusBuyCategory () {
            await page.getByRole('button', { name: 'Покупка бонуса' }).click();
        },

        async bonusBuyCategoryVisible () {
            await expect(page).toHaveURL(/.*0\/6/);
            await expect(page.getByRole('button', { name: 'Bonus Buy' })).toBeVisible();
        }
    }
}
    




  
  

  
  
  
  
  