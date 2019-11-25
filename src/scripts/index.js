const { write, mkdir, downloadImage } = require('./utils');
const { parseShowcaseWebsite, parseCatalogWebsite } = require('./parser');
const path = require('path');

const TASKS = [
  {
    id: 'men-running-shoes',
    url: 'https://www.nike.com/w/mens-running-shoes-37v7jznik1zy7ok',
  },
  {
    id: 'women-running-shoes',
    url: 'https://www.nike.com/w/womens-running-shoes-37v7jz5e1x6zy7ok'
  }
];

(async function () {
  process.setMaxListeners(0);
  for (let { id, url } of TASKS) await downloadAll(id, url);
  process.exit(0);
})();

async function downloadAll(name, websiteUrl) {
  const shoes = await parseCatalogWebsite(websiteUrl);
  await mkdir(path.join('..', 'assets', name));
  await mkdir(path.join('..', 'assets', name, 'images'));
  await writeJSON(path.join(name, 'catalog.json'), shoes);
  for (let shoe of shoes) {
    const images = await parseShowcaseWebsite(shoe.url);
    await writeJSON(path.join(name, `${shoe.id}.json`), images);
    for (let i = 0; i < images.length; i++) {
      await downloadImage(
        images[i],
        path.join('..', 'assets', name, 'images', `${shoe.id}_${i}.jpeg`)
      );
    }
  }
}

async function writeJSON (filename, content) {
  await write(
    path.join('..', 'assets', filename),
    JSON.stringify(content, null, 4)
  );
}