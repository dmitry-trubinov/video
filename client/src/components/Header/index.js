import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="mid-line">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-4">
              <div id="logo" className="logo">
                <Link to="/">
                  <h1>Videos</h1>
                </Link>
              </div>  
            </div>
            <div className="col-sm-8 col-xs-8">              
              <Link to="/upload" className="float-right" style={{marginTop: "15px"}}>                
                Upload             
              </Link>
              <Link to="/" className="float-right" style={{marginTop: "15px", marginRight: "20px"}}>
                Home             
              </Link>                                        
              <br className="clear-fix"/>              
            </div>
          </div>            
        </div>
      </div>
    </header>
  )
}
