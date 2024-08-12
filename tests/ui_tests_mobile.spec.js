import { test, expect, describe , devices} from '@playwright/test';
import { baseURL } from '../framework/config/config';
import {lobbyPage, racePage, promotionsPage, tournamentsPage, VipClubPage, partnerPage, promoPage, mainPage, gameCategory, lobbyCategoryList, lobbyProviderList, dropList} from '../framework/pages/ui_mobile_pages_objects';
// разобраться с рангами в ВИП клубе , Страница партнеры дроп лист , кошелек локатор кнопки кошелька 
describe('Тесты навигации', () => {
  let page;

   
  test.beforeAll(async ({ browser }) => {
    // Устанавливаем предпочитаемый язык на русском, Переходим на базовый URL, Устанавливаем значение в localStorage
    const context = await browser.newContext({
      locale: 'ru-RU',  // 
      extraHTTPHeaders: {
        'Accept-Language': 'ru-RU'
      },
      ...devices['iPhone 11']
  
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
   
 
  });

  // Тесты
  test ('Переход на главную', async () => {
    await mainPage(page).assertMainVisible();
  }) 
  test('Переход на страницу Лобби', async () => {
    await dropList(page).burgerMenu();
    // Переходим на страницу Лобби
    await lobbyPage(page).goto();

    // Обработчики
    await lobbyPage(page).assertLobbyPage();
    
  });
  
  test ('Выпадающий список Категорий игр', async () => {

    await lobbyCategoryList(page).categoryList();
    await lobbyCategoryList(page).categoryListVisible();
  });

  test ('Выпадающий список Провайдеров', async () => {
    await lobbyProviderList(page).providerList();
    await lobbyProviderList(page).providerListVisible();
  }) 

  test('Переход на страницу Гонка', async () => {
   
    // Переход на страницу Гонка
    await racePage(page).goto();

    // Обработчики
    await racePage(page).assertRacePage();
    await racePage(page).assertRaceVisible();

  });

  test('Переход на страницу Промоакций', async () => {
    await dropList(page).burgerMenu();

    // Переходим на страницу Промоакций
    await promotionsPage(page).goto();

    // Обработчики
    await promotionsPage(page).assertPromotionsPage();
    await promotionsPage(page).assertPromotionsVisible();
    
    
    
  });

  test('Переход на страницу Турниры', async () => {
    await dropList(page).burgerMenu();
    // Переход на страницу Турниры
    await tournamentsPage(page).goto();
    
    // Обработчики
    await tournamentsPage(page).assertTournamentPage();
    await tournamentsPage(page).assertTournamentVisible();
  });
  
 // Переходим на страницу VIP
  test('Переход на страницу ВИП клуба', async () => {
    await dropList(page).burgerMenu();
    // Переход на страницу ВИП клуба
    await VipClubPage(page).goto()

    // Обработчики
    await VipClubPage(page).assertVipClubPage()
    await VipClubPage(page).assertVipClubVisible()
  });

 // Переходим на страницу Промо
  test ('Переходим на страницу Промо', async () => {
    await dropList(page).burgerMenu();

// Обработчики
    await promoPage(page).goto();
    await promoPage(page).assertPromoPage();
    await promoPage(page).assertPromoVisible();
  })

  test('Переход на страницу Партнерам', async () => {

    // Переходим на страницу Партнерам
    await dropList(page).burgerMenu();

// Обработчики
    await partnerPage(page).goto();
    await partnerPage(page).assertPartnerPage();
    await partnerPage(page).assertPartnerVisible();
   
    // Обработчики
    await partnerPage(page).assertPartnerPage();
    await partnerPage(page).assertPartnerVisible();

    // Переходим в раздел Кампании
    await partnerPage(page).campaignCection();
    await partnerPage(page).campaignCectionVisible();

    // Переходим в раздел Статистика
    await partnerPage(page).staticsCection();
    await partnerPage(page).staticsCectionVisible();

    // Переходим в раздел Игроки
    await partnerPage(page).playersCection();
    await partnerPage(page).playersCectionVisible();

   // Переходим в раздел Лог начислений 
   await partnerPage(page).accrualLogCection();
   await partnerPage(page).accrualLogCectionVisible();

  });

  // Переход по категориям игр
  
  test ('Категории игр', async () => {
    test.setTimeout(90000);
    await dropList(page).burgerMenu();
    // Категория Slots
    await gameCategory(page).slotsCategory();
    await gameCategory(page).slotsCategoryVisible();

    // Категория Live игры
    await dropList(page).burgerMenu();
    await gameCategory(page).liveGameCategory();
    await gameCategory(page).liveGameCategoryVisible();

    // Категория Jackpots
    await dropList(page).burgerMenu();
    await gameCategory(page).jackpotCategory();
    await gameCategory(page).jackpotCategoryVisible();

     // Категория Instant Win
     await dropList(page).burgerMenu();
     await gameCategory(page).instantWinCategory()
     await gameCategory(page).instantWinCategoryVisible()

     // Категория Рулетка
     await dropList(page).burgerMenu();
     await gameCategory(page).instantWinCategory()
     await gameCategory(page).instantWinCategoryVisible()

     // Категория Blackjack
     await dropList(page).burgerMenu();
     await gameCategory(page).blackJackCategory();
     await gameCategory(page).blackJackCategoryVisible();

    // Категория Bonus buy
    await dropList(page).burgerMenu();
    await gameCategory(page).bonusBuyCategory();
    await gameCategory(page).bonusBuyCategoryVisible()

  });

  
 test.afterAll(async () => {
    // Закрыть страницу
    await page.close();
  });
});


/*
test('Переход на Релоад', async () => {
  await page.getByRole('button', { name: 'Релоад' }).click();

  await expect(page.locator('div').filter({ hasText: /^Релоад$/ })).toBeVisible();
});

test('Переход на Рейкбэк', async () => {
  await page.getByRole('button', { name: 'Рейкбэк' }).click();

  await expect(page.locator('div').filter({ hasText: /^Рейкбэк$/ })).toBeVisible();
});

test('Переход на Буст', async () => {
  await page.getByRole('button', { name: 'Буст' }).click();

  await expect(page.locator('div').filter({ hasText: /^Буст$/ })).toBeVisible();
  await page.locator('._modal-close_9g9mb_3581').click();
});*/













