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
  const downloadImg = process.argv[2] === 'cache-images';
  for (let { id, url } of TASKS) {
    await downloadAll(id, url, downloadImg);
  }
  process.exit(0);
})();

async function downloadAll(name, websiteUrl, downloadImages = false) {
  const dirPath = path.join(__dirname, '..', '..', 'data');
  await mkdir(path.join(dirPath));
  await mkdir(path.join(dirPath, name));
  await mkdir(path.join(dirPath, name, 'images'));
  downloadImages && await mkdir(path.join(dirPath, name, 'meta'));
  let shoes = await parseCatalogWebsite(websiteUrl);
  for (let i = 0; i < shoes.length; i++) {
    const images = await parseShowcaseWebsite(shoes[i].url);
    shoes[i] = { ...shoes[i], image: images[0] };
    await writeJSON(path.join(name, 'meta', `${shoes[i].id}.json`), images);
    console.log(`${name} progress: ${i} / ${shoes.length}`);
    if (!downloadImages) continue;
    for (let i = 0; i < images.length; i++) {
      const imgPath = path.join(dirPath, name, 'images', `${shoes[i].id}_${i}.jpeg`);
      await downloadImage(images[i], imgPath);
    }
  }
  await writeJSON(path.join(name, 'catalog.json'), shoes);
}

async function writeJSON (filename, content) {
  await write(
    path.join(__dirname, '..', 'assets', filename),
    JSON.stringify(content, null, 4)
  );
}