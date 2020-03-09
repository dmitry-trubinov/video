const log = require('debug')('app:log');
const error = require('debug')('app:error');
const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');

const graphqlController = require('./controllers/graphql');


const app = express();
const port = process.env.PORT || 8001;
const host = process.env.HOST || '127.0.0.1'; 

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');      
    
  next();
});

app.options('/*', (req, res, next) => {
  res.send(200);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/status', (req, res) => {            
  res.status(200).send('OK');
});

app.use('/v1', index);

app.use('/graphql', graphqlController);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);  
});

// error handler
app.use(function(err, req, res, next) {
  error(err);
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);  
  res.end();
  //res.render('error');
});

app.listen(port, host, () => {
  log(`Listening on port ${port}`);
});

module.exports = app;