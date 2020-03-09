const fs = require('fs');
const log = require('debug')('FileService:log');
const error = require('debug')('FileService:error'); 

class FileStorage {
  constructor(path) {
    this.path = path;
  }  

  getItemStream(name) {
    const stream = fs.createReadStream(`${this.path}/${name}`);
    return stream;
  }

  getList() {
    return new Promise((resolve, reject) => {
      fs.readdir(this.path, (err, files) => {
        if (err) {
          error(err.message);
          resolve([]);
          return;
        }

        log(files);
        resolve(files
          .map((item) => item.split('---'))
          .filter(item => item.length === 2)
          .map(item => {
            return {id: item.join('---'), title: item[1], created: item[0]};
          })          
        );
      });
    });
  }

  getListSync() {
    try {
      const files = fs.readdirSync(this.path);
      log(files);
      return files;
    } catch(err) {
      error(err.message);
      return [];
    } 
  }
}

module.exports = FileStorage;