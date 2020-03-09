import React, { Component } from 'react';
import VideoList from '../../components/VideoList';
import VideoPlayer from '../../components/VideoPlayer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      videoSrc: "",
      mimeType: ""
    }
  }

  handleItemClick(e) {
    this.setState({"videoSrc": e.target.value});
  }
  
  render() {
    const src = this.state.videoSrc;
    const mime = this.state.mimeType;

    return (
      <div className="container">
      <VideoPlayer videoSrc={src} mimeType={mime} />        
      <VideoList onItemClick={this.handleItemClick}/>    
    </div>
    )
  }
}