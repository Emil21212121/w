const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();


chromium.use(stealth);

(async () => {

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://selector322.gg/'); 

  await page.getByRole('button', { name: 'Регистрация', exact: true }).click();
  await page.waitForTimeout(1000); 


  await page.getByRole('button', { name: 'В 1 клик', exact: true }).click();
  await page.waitForTimeout(1000); 


  await page.getByRole('button', { name: 'Регистрация' }).nth(3).click();
  await page.waitForTimeout(10000); 


  
})();
