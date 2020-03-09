const log = require('debug')('Video controller:log');
const error = require('debug')('Video controller:error');

module.exports = function makeVideoController(storageService) {
  return {
    videos: () => {
      
      return storageService.getList()
        .then((resp) => {
          log(resp);
          return resp;
        })
        .catch((err) => {
          error(err);
          return {data: []};
        });  
    }
  };
};