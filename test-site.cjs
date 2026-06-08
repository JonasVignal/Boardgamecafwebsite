const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  console.log('Navigating to site...');
  await page.goto('https://jonasvignal.github.io/Boardgamecafwebsite/', { waitUntil: 'networkidle0' });
  
  const rootHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
  console.log('ROOT HTML LENGTH:', rootHtml.length);
  if (rootHtml.length < 50) {
     console.log('Root HTML:', rootHtml);
  }
  
  await browser.close();
})();
