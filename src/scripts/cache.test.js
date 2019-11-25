import {parseCatalogWebsite, parseShowcaseWebsite} from './cache–assets';


test('should parse catalog website', async function () {
  const MEN_RUNNING_SHOES = 'https://www.nike.com/w/mens-running-shoes-37v7jznik1zy7ok';
  const result = await parseCatalogWebsite(MEN_RUNNING_SHOES);
  result.forEach(obj => expect(Object.keys(obj).length).toBe(5));
});

test('should parse showcase website', async function () {
  const EXAMPLE_SHOWCASE = 'https://www.nike.com/t/varsity-compete-tr-2-mens-training-shoe-extra-wide-GFpX02/AT1239-008';
  const result = await parseShowcaseWebsite(EXAMPLE_SHOWCASE);
  result.forEach(url => expect(url.length > 50).toBe(true))
}, 50000);