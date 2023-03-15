import { width } from "@mui/system";
import React from "react";
import { FaUser, FaClipboardCheck, FaCalculator, FaServicestack } from "react-icons/fa";
import { CitizenFacilitation } from "./CitizenFacilitation";
import SlideShow from "./SlideShow";

const images = [
    'https://tcp.hp.gov.in/Application/uploadDocuments/banner/Banner20230210_152904.jpeg',
    'https://tcp.hp.gov.in/Application/uploadDocuments/banner/Banner20190627_163955.jpg',
    'https://tcp.hp.gov.in/Application/uploadDocuments/banner/Banner20190627_162504.jpg',
    'https://tcp.hp.gov.in/Application/uploadDocuments/banner/Banner20171004_160224.jpg'
    ];

const SideNav = () =>{
    return(
        <div className="container">
            <div className="row">
        <div className="col-md-auto" style={{marginTop:"5px"}}> 
        <SlideShow images={images}/>
        </div>
        <div className="col-md-auto" style={{position: "relative", marginTop:"5px"}}>
            <div className="sidenav">
            <a href="#"><FaUser className="sidenav-icon"/>Officer Login</a>
            <a href="#"><FaClipboardCheck className="sidenav-icon"/>Application Status</a>
            <a href="#"><FaCalculator className="sidenav-icon"/>Fees Calculator</a>
            <a href="#"><FaServicestack className="sidenav-icon"/>Online Services</a>
            </div>
            <div className="whatsnew-container">
                <h5>Whats New</h5>
                <marquee width="100%" direction="up" height="250px" scrollAmount="10">
<p style={{fontSize:14}}><a href="https://tcp.hp.gov.in/Application/uploadDocuments/news/News20230118_152721.pdf" target="_blanck" class="screenReader" title="NOTICE -RFP FOR EMPANELMENT OF CONSULTANTS" >NOTICE -RFP FOR EMPANELMENT OF CONSULTANTS</a></p>
<p style={{fontSize:14}}><a href="https://tcp.hp.gov.in/Application/uploadDocuments/news/News20221119_130258.pdf" target="_blanck" class="screenReader" title="Instructions in compliance to orders regarding attendance by way of Biometric." tabindex="46">Instructions in compliance to orders regarding attendance by way of Biometric.</a></p>
<p style={{fontSize:14}}><a href="https://tcp.hp.gov.in/Application/uploadDocuments/news/News20221117_153802.pdf" target="_blanck" class="screenReader" title="Amendment in Section-34 of HPTCP Act." tabindex="47">Amendment in Section-34 of HPTCP Act.</a></p>
<p style={{fontSize:14}}><a href="https://tcp.hp.gov.in/Application/uploadDocuments/news/News20221117_153713.pdf" target="_blanck" class="screenReader" title="New Amendment regarding Appendix-7." tabindex="48">New Amendment regarding Appendix-7.</a></p>

          </marquee>
                      </div>
         </div>
            </div>
            </div>
        
    );
};

export default SideNav;