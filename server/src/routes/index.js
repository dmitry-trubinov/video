const log = require('debug')('Router:log');
const error = require('debug')('Router:error');
const router = require('express').Router();
const config = require('config').files;
const mime = require('mime');

const storageService = require('../services/storage');
const deployServiceMw = require('../services/deploy');

router.post('/upload', deployServiceMw, function(req, res) {
  log(req.file);
  if(!req.file) {
    res.status(400).send('false');
  } else {
    res.status(200).send('ok');
  }  
});

router.get('/videos/:id', function(req, res) {  
  const filename = req.params.id;
  log(filename);

  res.setHeader('Content-Type', mime.getType(`${config.folder}/${filename}`));
  const stream = storageService.getItemStream(filename);
  
  stream
    .on('error', function(err) {
      error(err);
      res.status(err.status || 500);
      res.end();      
    })
    .on('close', function() {
      log('Closed');
      res.end();
    });

  stream.pipe(res);  
});

module.exports = router;