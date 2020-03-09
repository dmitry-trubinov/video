const log = require('debug')('Deploy:log');
const multer = require('multer');

module.exports = function makeDeploy(config) {
  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      log(file.originalname);
      cb(null, config.folder);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '---' +file.originalname );
    }
  });

  const filter = function (req, file, cb) {
    cb(null, true);  
  };

  const limits = {
    fileSize: config.max_size_bites
  };

  return multer({ storage, filter, limits }).single(config.field_name);
};