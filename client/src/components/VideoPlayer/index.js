import React, { Component } from 'react';
import baseUrl from '../../configs/baseUrl';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.stopVideo = this.stopVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }  

  stopVideo() {
    this.refs.playerRef.pause();    
  }
  playVideo() {
    if (this.props.videoSrc !== '') {
      this.refs.playerRef.play();
    }    
  }

  componentDidUpdate() {       
    if (this.props.videoSrc !== '') {
      this.refs.playerRef.play();
    }       
  }
  
  render() {
    const src = this.props.videoSrc !== '' ? `${baseUrl}/v1/videos/${this.props.videoSrc}` : '';
    return (
      <div className="card" style={{minWidth:"200px", marginBottom: "5px", textAlign: "center"}}>        
        <div className="card-body">
          <video ref="playerRef" controls width="30%" style={{minWidth:"300px"}} src={src} type="video/mp4">
            Sorry, your browser doesn't support embedded videos
          </video>                
        </div>
        <div className="card-footer">
          <input style={{float: "right"}} type="button" className="btn btn-info" value="Pause" onClick={this.stopVideo}/>    
          <input style={{float: "right", marginRight: "5px"}} type="button" className="btn btn-info" value="Play" onClick={this.playVideo}/>
        </div>        
      </div>
    )
  }
}
