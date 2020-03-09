import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import VideoItem from '../VideoItem';

const VIDEOS = gql`
  {
    videos {
      id
      title
      created      
    }   
  }
`;

export default function VideoList(props) {
  const { loading, error, data } = useQuery(VIDEOS, {fetchPolicy: 'network-only'});
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  
  const videoList = data.videos.map((item) => (      
    <VideoItem key={item.id} item={item} onVideoClick={props.onItemClick} value={item.id}  />      
  ));
  
  return (
    <div className="card-deck">
      {videoList}
    </div>
  );
}
