const config = require('config').files;
const StorageService = require('./file');

const storageService = new StorageService(config.folder);
module.exports = storageService;