const StorageService = require('./file');
const storageService = new StorageService('__test__/files_test_folder');
const storageServiceEmpty = new StorageService('__test__/empty_folder');
const storageServiceInvalid = new StorageService('__test__/files_folder_not_exist');

describe('File-Storage:', () => {
  
  beforeEach( async () =>{

  });

  it('getList - Results Length', () => {
    
    storageService.getList()
      .then(res => {
        expect(res.length).toEqual(3);
      });    
  });

  it('getList - Invalid folder', () => {
    
    storageServiceInvalid.getList()
      .then(res => {
        expect(res.length).toEqual(0);
      });    
  });

  it('getList - Empty folder', () => {
    
    storageServiceEmpty.getList()
      .then(res => {
        expect(res.length).toEqual(0);
      });    
  });

  it('getListSync - Results Length', () => {
    const res = storageService.getListSync(); 
    expect(res.length).toEqual(3);
  });
  
  it('getListSync - Invalid folder', () => {
    const res = storageServiceInvalid.getListSync(); 
    expect(res.length).toEqual(0);
  });

  it('getListSync - Empty folder', () => {
    const res = storageServiceEmpty.getListSync(); 
    expect(res.length).toEqual(0);
  });

  afterAll( async () => {
  
  });
});