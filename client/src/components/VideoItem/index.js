import React from 'react';

export default function VideoItem(props) {
  const { id, title, created } = props.item;
  const datec = new Date(+created);

  return (
    <div className="card" style={{minWidth:"200px", marginBottom: "5px"}}>        
      <div className="card-body">
        <h5 className="card-title">{title}</h5>                       
      </div>
      <div className="card-footer">
        <small className="text-muted">{datec.toDateString()}</small>       
        <button 
          onClick={props.onVideoClick} 
          value={id} style={{float: "right"}} type="button" className="btn btn-info">Play</button>    
      </div>        
    </div>      
  )
}