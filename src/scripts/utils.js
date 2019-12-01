//const Jimp = require('jimp/es');
const request = require('request');
const fs = require('fs');
const fetch = require('node-fetch');
const mkdirp = require('mkdirp');

/*
async function cropImage (url, filepath) {
  const image = await Jimp.read(url);
  image.crop(image.width, 100, image.width, 500);
  await image.writeAsync(filepath)
}
*/

async function downloadImage (url, filename) {
  return new Promise((resolve) => {
    request.head(url, function (err, res) {
      console.log('downloading: ',
        res.headers['content-type'],
        res.headers['content-length']
      );
      request(url)
        .pipe(fs.createWriteStream(filename))
        .on('close', resolve);
    });
  });
}

async function getRequest (url) {
  const response = await fetch(url);
  return await response.text();
}

async function write (filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, error => {
      if (error) return reject(error);
      return resolve();
    });
  });
}

async function mkdir (path) {
  return new Promise(resolve => {
    mkdirp(path, err => {
      if (err) throw err;
      else return resolve();
    });
  });
}

module.exports = {
  downloadImage,
  getRequest,
  write,
  mkdir
};