import React from 'react';

function Footer() {
  return (
    <div className="footer" style={{color:"maroon"}}>
        <div className='row' style={{color:"maroon",cursor:'pointer'}}>
            <div className='col-md-2' style={{marginLeft:70}}><li>hello</li></div>
            <div className='col-md-2'><li>Home</li></div>
            <div className='col-md-2'><li>Disclaimer</li></div>
            <div className='col-md-2'><li>Privacy Policy</li></div>
            </div>
            <div className='row' style={{marginTop:20,marginLeft:60,color:"maroon"}}>
            <div className='col-md-2'><li>Terms & Conditions</li></div>
            <div className='col-md-2'><li>Feedback/Complaints</li></div>
            <div className='col-md-2'><li>E- Samadhan</li></div>
            </div>
        
     <p style={{marginTop:20}}>Department Of Town and Country Planning</p>
      <p>Designed and developed ABM INDIA KNOWLEDGEWARE.</p>
    </div>
  );
}

export default Footer;
