const express = require('express');
const request = require('supertest');

const config = { 
  "folder": "__test__/temp",
  "max_size_bites": "1500",  
  "field_name": "video"
}

const deployMw = require('./multer')(config);

const initDeployMw = () => {
  const app = express();
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  const router = express.Router();
  
  router.post('/', deployMw, (req, res) => {
    console.log(req.file);
    res.send('ok');
  });
  app.use(router);
  return app;
}

describe('Deploy-Multer:', () => {
  
  beforeEach( async () => {

  });

  it('File deployed', async () => {    
       
    const app = initDeployMw();
    request(app)
      .post('/')
      .set('Content-Type', 'multipart/form-data')
      .attach('video', './files/1.avi')
      .then(res => {
        //console.log(res.req);
        expect(res.req).toBe('video2');
      })
      .catch(err => {
        console.log(err);
      })       
       
  }); 

  afterAll( async () => {
  
  });
});
