import React from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelopeOpenText, FaInfoCircle, FaRegAddressBook, FaFileDownload, FaPersonBooth, 
    FaBriefcase, FaPencilAlt, FaMapMarked, FaExclamationTriangle} from 'react-icons/fa';



export const CitizenFacilitation=()=>{
    return (
        <div className='container' style={{backgroundColor:'#374165',width:"71%",height:180,marginLeft:210,padding:"100"}}>
            <h3 style={{marginLeft:300}}>CITIZEN FACILITATION</h3>
<div className='row clearfix' style={{cursor:'pointer',color:"white"}}>
    <div className='col-sm-2'>
        <a tabIndex={1}>
        <FaEnvelopeOpenText style={{fontSize:30,textAlign:'center'}}/>
        <div style={{fontSize:14}}>Notified Planning Special Area</div>
        </a>
    </div>
    <div className='col-sm-2'>
    <a tabIndex={2}>
    <FaInfoCircle style={{fontSize:30,textAlign:'center'}}/>
        <div style={{fontSize:14}}>RTI</div>
        </a>
    </div>
    <div className='col-sm-2'>
    <a tabIndex={5}>
        <FaRegAddressBook style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/architect.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14}}>Directory of Reg. Professionals</div>
        </a>
    </div>
     <div className='col-sm-2'> <a tabIndex={1}>
        <FaFileDownload style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/guranteeAct.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14}}>Download Form</div>
        </a>
    </div>
    <div className='col-sm-2'> <a tabIndex={2}>
            <FaPersonBooth style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/guranteeAct.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14}}>Public Service Guarantee Act</div>
        </a>
    </div>
    
    <div className='col-sm-2'> <a tabIndex={3}>
            <FaBriefcase style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/guranteeAct.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14}}>Planning Permission Cases</div>
        </a>
    </div>
    </div>
    <div className='row clearfix' style={{color:"white"}}>
    <div className='col-sm-2'> <a tabIndex={4}>
        <FaPencilAlt style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/guranteeAct.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14}}>Instruction Orders</div>
        </a>
    </div>
    <div className='col-sm-2'> <a tabIndex={1}>
        <FaMapMarked style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/guranteeAct.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14}}>Area Locator</div>
        </a>
    </div>
    <div className='col-sm-2'> <a tabIndex={1}>
        <FaExclamationTriangle style={{fontSize:30,textAlign:'center'}}/>
        {/* <img src='https://tcp.hp.gov.in/img/guranteeAct.png' alt='Image' style={{height:20,width:20}}></img> */}
        <div style={{fontSize:14,whiteSpace:'nowrap'}}>Unauthorised Constructions Complaints</div>
        </a>
    </div>
    
    <div className='col-sm-2'> <a tabIndex={1}><div style={{fontSize:12}}></div></a></div>
    <div className='col-sm-2'> <a tabIndex={1}><div style={{fontSize:12}}></div></a></div>
    <div className='col-sm-2'> <a tabIndex={1}><div style={{fontSize:12}}></div></a></div>
</div>
</div>
    );
};



