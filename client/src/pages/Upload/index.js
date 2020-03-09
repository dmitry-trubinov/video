import React, { Component } from 'react';
import axios from 'axios';
import baseUrl from '../../configs/baseUrl';
import fileConfig from '../../configs/file';

export default class Upload extends Component {

  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
      selectedFile: null,
      result: ''
    }
  }   
  
  onChangeHandler(event) {
    const data = new FormData();    
    const types = fileConfig.formats;
    console.log(fileConfig.formats);
    console.log(`FILES: ${event.target.files[0].size}`);
    console.log(`FILES: ${event.target.files[0].type}`);

    if (event.target.files[0] && 
        event.target.files[0].size < fileConfig.maxSize && 
        types.indexOf(event.target.files[0].type) !== -1) {
      
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0
      })    
      
      data.append('video', event.target.files[0])
      axios.post(`${baseUrl}/v1/upload`, data, {
        })
        .then(res => {
          this.setState({
            result : 'success',
            selectedFile: null,
            loaded: 1
          });
        })
        .catch(err => {
          this.setState({
            result : 'error',
            selectedFile: null,
            loaded: 1
          })
        })
    } else {
      this.setState({result : 'Too big or Wrong format!'});
    }
  }
  
  render() {
    const result = this.state.result;
    return (
      <div className="container">
        <h3>Upload</h3>      
        <div className="card" style={{textAlign: "center"}}>
          <input type="file" name="video" onChange={this.onChangeHandler}/>               
        </div>
        {result !== 'success'  && result !== '' &&
          <div className="alert alert-danger" style={{marginTop:"10px"}} role="alert">
            File is not loaded: {result} 
          </div>
        }
        {result === 'success' &&
          <div className="alert alert-success" role="alert">
            File is loaded!
          </div>
        }        
      </div>
    )
  }
}
