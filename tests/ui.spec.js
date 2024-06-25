import { test, expect, describe } from '@playwright/test';
import { baseURL } from '../framework/config/config';

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
  });

  // Тесты

  test('Переход на страницу Лобби', async () => {
    // Переходим на страницу Лобби
    await page.locator('a').filter({ hasText: 'Лобби' }).click();
    
    // Обработчики
    await expect(page).toHaveURL(/.*lobby/);
    await expect(page.locator('#scrollArea').getByText('лобби')).toBeVisible();
  });

  test('Переход на страницу Гонка', async () => {
    // Переход на страницу Гонка
    await page.locator('a', { hasText: /^Гонка$/ }).click();

    // Обработчики
    await expect(page).toHaveURL(/.*race/);
    await expect(page.getByText('Игрок')).toBeVisible();
    await expect(page.getByText('Сумма ставок')).toBeVisible();
    await expect(page.getByText('Приз', { exact: true })).toBeVisible();
  });

  test('Переход на страницу Промоакций', async () => {

    // Переходим на страницу Промоакций
    await page.locator('a').filter({ hasText: 'Акции' }).click();
    
    // Обработчики
    await expect(page).toHaveURL(/.*promotions/);
    await expect(page.getByText('Акции и предложенияНе пропустите возможность получить бонус в наших текущих акци')).toBeVisible();
  });

  test('Переход на страницу ВИП клуба', async () => {

    // Переход на страницу ВИП клуба
    await page.locator('a').filter({ hasText: 'VIP-клуб' }).click();

    // Обработчики
    await expect(page.getByRole('button', { name: 'Бронза' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Серебро' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Золото' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Платина' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Алмаз' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Элит' })).toBeVisible();
  });

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
  });

  test('Переход на страницу Партнерам', async () => {

    // Переходим на страницу Партнерам
    await page.locator('a').filter({ hasText: 'Партнерам' }).click();

    await expect(page.locator('div').filter({ hasText: /^Общее$/ })).toBeVisible();
    await expect(page.getByRole('button', { name: 'ID партнера: #' })).toBeVisible();
    await expect(page.getByText('Кабинет партнера')).toBeVisible();
  });

  test('Переход в раздел Компании', async () => {

    // Переходим в раздел Кампании
    await page.getByText('Кампании').click();
    
    // Обработчики
    await expect(page).toHaveURL(/.*partner/);
    await expect(page.locator('div').filter({ hasText: /^Кампании$/ })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Обновить' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Экспорт' })).toBeVisible();
  });

  test.afterAll(async () => {
    // Закрыть страницу
    await page.close();
  });
});
