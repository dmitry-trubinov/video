const config = require('config').files;
const deploy = require('./multer')(config);

module.exports = deploy;