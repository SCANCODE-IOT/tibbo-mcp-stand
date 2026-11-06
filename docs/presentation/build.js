// Сборка PDF презентаций: node docs/presentation/build.js  (нужен Playwright с Chromium)
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch();
  for (const lang of ['ru', 'en']) {
    const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
    await p.goto('file://' + path.join(__dirname, 'deck.html') + '#' + lang);
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    await p.pdf({ path: path.join(__dirname, '..', 'presentation-' + lang + '.pdf'), width: '1920px', height: '1080px', printBackground: true });
    if (process.argv.includes('--png')) {
      const n = await p.$$eval('.slide', s => s.length);
      for (let i = 0; i < n; i++) await (await p.$$('.slide'))[i].screenshot({ path: path.join(process.argv[process.argv.indexOf('--png') + 1], lang + '-' + String(i + 1).padStart(2, '0') + '.png') });
    }
    await p.close();
  }
  await b.close();
})();
