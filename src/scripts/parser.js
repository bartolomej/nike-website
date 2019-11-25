const $ = require('cheerio');
const puppeteer = require('puppeteer');
const { getRequest } = require('./utils');

async function parseCatalogWebsite (url) {
  const html = await getRequest(url);
  const figures = $('figure', html);
  return Array.from(figures.map((index, node) => {
    const url = $('a[class=product-card__link-overlay]', node).attr('href');
    const title = $('div[class=product-card__title]', node).text();
    const subtitle = $('div[class=product-card__subtitle]', node).text();
    const price = $('div[class=product-card__price]', node).text();
    const colors = $('div[class=product-card__product-count]', node).text();
    const id = url.split('/')[url.split('/').length - 1];
    return { id, url, title, subtitle, price, colors };
  }));
}

async function parseShowcaseWebsite (url) {
  const browser = await puppeteer.launch({ defaultViewport: null });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('img[data-fade-in=css-147n82m]', { visible: true });
  await page.evaluate(async () => window.scrollBy(0, 1000));
  return await page.evaluate(() => {
    // TODO: parse product description
    const imgSelector = 'img[data-fade-in=css-147n82m]';
    const images = document.querySelectorAll(imgSelector);
    return Array.from(images).map(ele => ele.src);
  });
}

module.exports = {
  parseCatalogWebsite,
  parseShowcaseWebsite
};