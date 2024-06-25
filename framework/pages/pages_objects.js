
import { expect } from '@playwright/test';

export function lobbyPage(page) {
    return {
        // Метод для перехода на страницу Лобби
        async goto() {
            await page.locator('a').filter({ hasText: 'Лобби' }).click();
        },

        // Методы для проверок на странице Лобби
        async assertOnLobbyPage() {
            await expect(page).toHaveURL(/.*lobby/);
        },

        async assertLobbyVisible() {
            await expect(page.locator('#scrollArea').getByText('лобби')).toBeVisible();
        }
    };
}