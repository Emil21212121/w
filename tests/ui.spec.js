import { test, expect, describe } from '@playwright/test';
import { baseURL } from '../framework/config/config';
import {lobbyPage, racePage, promotionsPage, tournamentsPage, VipClubPage, partnerPage, promoPage, mainPage, gameCategory, lobbyCategoryList, lobbyProviderList} from '../framework/pages/pages_objects';

describe('Тесты навигации', () => {
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
    await page.locator('button').first().click();
 
  });

  // Тесты
  test ('Переход на главную', async () => {
    await mainPage(page).assertMainVisible();
  }) 
  test('Переход на страницу Лобби', async () => {
    // Переходим на страницу Лобби
    await lobbyPage(page).goto();

    // Обработчики
    await lobbyPage(page).assertLobbyPage();
    await lobbyPage(page).assertLobbyVisible();
    
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

    // Переходим на страницу Промоакций
    await promotionsPage(page).goto();

    // Обработчики
    await promotionsPage(page).assertPromotionsPage();
    await promotionsPage(page).assertPromotionsVisible();
    
    
    
  });

  test('Переход на страницу Турниры', async () => {

    // Переход на страницу Турниры
    await tournamentsPage(page).goto();
    
    // Обработчики
    await tournamentsPage(page).assertTournamentPage();
    await tournamentsPage(page).assertTournamentVisible();
  });

  test('Переход на страницу ВИП клуба', async () => {

    // Переход на страницу ВИП клуба
    await VipClubPage(page).goto()

    // Обработчики
    await VipClubPage(page).assertVipClubPage()
    await VipClubPage(page).assertVipClubVisible()
  });

  test ('Переходим на страницу Промо', async () => {
    await promoPage(page).goto();
    await promoPage(page).assertPromoPage();
    await promoPage(page).assertPromoVisible();
  })

  test('Переход на страницу Партнерам', async () => {

    // Переходим на страницу Партнерам
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

    // Категория Slots
    await gameCategory(page).slotsCategory();
    await gameCategory(page).slotsCategoryVisible();

    // Категория Live игры
    await gameCategory(page).liveGameCategory();
    await gameCategory(page).liveGameCategoryVisible();

    // Категория Jackpots
    await gameCategory(page).jackpotCategory();
    await gameCategory(page).jackpotCategoryVisible();

     // Категория Instant Win
     await gameCategory(page).instantWinCategory()
     await gameCategory(page).instantWinCategoryVisible()

     // Категория Рулетка
     await gameCategory(page).instantWinCategory()
     await gameCategory(page).instantWinCategoryVisible()

     // Категория Blackjack
     await gameCategory(page).blackJackCategory();
     await gameCategory(page).blackJackCategoryVisible();

    // Категория Bonus buy
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













