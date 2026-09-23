// Local PDF gen — mirrors .github/workflows/pdf.yml (puppeteer-core + system Chrome)
const p = require('C:/Users/saves/node_modules/puppeteer-core');
const path = require('path');
const url = f => 'file:///' + path.join(__dirname, f).replace(/\\/g, '/');
(async () => {
  const b = await p.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--no-sandbox'] });
  const pg = await b.newPage();
  await pg.setViewport({ width: 940, height: 1400, deviceScaleFactor: 2 });
  await pg.goto(url('index.html'), { waitUntil: 'networkidle0' });
  await pg.emulateMediaType('screen');
  await pg.pdf({ path: path.join(__dirname, 'resume.pdf'), format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await pg.goto(url('resume-ast.html'), { waitUntil: 'networkidle0' });
  await pg.pdf({ path: path.join(__dirname, 'resume-ast.pdf'), format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await b.close();
  console.log('ok');
})().catch(e => { console.error(e); process.exit(1); });
