const puppeteer = require('puppeteer-core');

let browser;
let page;

async function AssertMatchingImageAndSave(saveImageName) {
  // await page.waitFor(1000);
  await page.waitForResponse(response => response.ok())

  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot({
    failureThreshold: 0,
    failureThresholdType: 'percent',
    updatePassedSnapshot: process.env.UpdateAlways === 'true'
  });
}

const baseUrl = 'http://localhost:8080/';

jest.setTimeout(50000);
const localBrowserPath =
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const chromePath = localBrowserPath;

beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox']
  });
  page = await browser.newPage();
  await page.setViewport({ width: 960, height: 1080 });
  return page;
});

describe('Movie', () => {
  it('Movie List', async () => {
    await page.goto(baseUrl);
    await AssertMatchingImageAndSave('Movie');
  });
});
