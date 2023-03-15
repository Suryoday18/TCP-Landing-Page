import React from "react";
import { TopBar } from '@egovernments/digit-ui-react-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp,  faSearch} from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft, faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { FaUserCircle } from "react-icons/fa";


//import logoImg from "src/assets/images/tcplogo_transperent.png"


const Header = () =>{
    return (
        <div>
         <div className="rows" style={{backgroundColor:"#374165"}}>

         <span style={{marginLeft:20,marginTop:10}}>
         <div className="cols" style={{color:"white"}}>
            {/*  */}
            <h6 style={{whiteSpace:"nowrap"}}>हिमाचल प्रदेश सरकार | Government Of Himachal Pradesh</h6>
            </div>
            </span>
           
         <div className="cols">
            {/* <img style={{height:65,width:400,margin:10,fontSize:12}}  src="https://tcp.hp.gov.in/img/eng_logo.png" alt="Town and Country Planning, Governmanet of Haryana"/> */}
           
            </div> 
            
                <div style={{width:"100%"}}>
                <ul className="nav pull-right">
                    
            <li>
            <a className="pull-right">
                <FontAwesomeIcon icon={faVolumeUp} style={{color:"blue"}}/>
                </a>
                </li>
                
                <li>
                <a>                    
                <FontAwesomeIcon icon={faAndroid} style={{color:"blue"}}/>
                </a>
                </li>
                
                <li>
                <a >
                <FontAwesomeIcon icon={faMicrosoft} style={{color:"blue"}}/>
                </a>
                </li>
                
                <li>
                    <a>
                        <FontAwesomeIcon icon={faApple} style={{color:"blue"}}/>
                    </a>
                </li>
                </ul>
                </div>
              
                <div className="rows hide-770 language_chng01 ">
                    {/* <div className="pull-left"> 
                        <a href="javascript:void(0);" className="lang-btn screenReader" title="Hindi" onclick="getLanguage('H')" tabindex="8">हिंदी</a>
                    </div> */}
               <div>
               </div>
               
                    <div className="rows fontBox"> 
                        <a href="javascript:decreaseFontSize();" title="Decrease Font Size" className="default screenReader" tabindex="9">T-</a> 
                        <a href="javascript:reSetFontSize();" title="Normal Font Size" className="default screenReader" tabindex="10">T</a> 
                        <a href="javascript:increaseFontSize();" title="Increase Font Size" className="default screenReader" tabindex="11">T+</a> 
                    </div>
                    <div className="themeBox"> 
                        <a onclick="chooseStyle('none', 60); $('#logoWhite').hide();$('.logoBlack').show();" href="javascript:void(0);" title="Standard View" className="whiteBg screenReader" tabindex="12"></a> 
                        <a onclick="chooseStyle('black', 60); $('#logoWhite').show();$('.logoBlack').hide();" href="javascript:void(0);" title="High Contrast View" className="blackBg screenReader" tabindex="13"></a> 
                    </div>
                    <div className="searchBox screenReader" tabindex="14">
                        <input type="text" className="txtSearch " name="searchTxt" id="searchTxt" placeholder="Search"  onkeyup="blockspecialcharSen(event,this.id);" autoComplete="off" style={{width:100,height:20}}/>
                        {/* <input type="submit" value="" name="searchBtn" className="btnSearch" onclick="return validateSearch();" title="Search"/> */}
                        <a style={{marginBottom:"50"}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </a>
                    </div>
                    </div>
                    </div>
                    <div className="rows">
                        <div className="cols">
                    <img style={{height:100,width:500,fontSize:14}}  src="https://tcp.hp.gov.in/img/eng_logo.png" alt="Town and Country Planning, Governmanet of Haryana"/>
                    </div>
                    <div className="cols pull-right">
            <img style={{height:90,width:200,fontSize:14}} src="https://www.hsvphry.org.in/assets/img/150-years-Mahatma-Gandhi-Logo.png" alt="Mahatma-Gandhi"/>
                    </div>
                    </div>
                    <div>
            </div>
            </div> 
        
       
        

    );
};

export default Header;