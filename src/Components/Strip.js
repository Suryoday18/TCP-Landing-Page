import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import {BsFillVolumeUpFill} from 'react-icons/bs'
import {DiAndroid} from 'react-icons/di'
import {AiFillWindows} from 'react-icons/ai'
import {BsApple} from 'react-icons/bs'
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  iconStyle: {
    width: '25px', 
    height: '25px', 
    borderRadius: '50%', 
    border: '2px solid #1F4A7C' , 
    color: '#1F4A7C',
    margin: '5px'
  },
});




function Strip() {
  const classes = useStyles()
  return (
    <AppBar position="static" style={{backgroundColor:'#fbfbfb', height: '36px', color: 'black'}}>
      <Toolbar>
       {/* <Typography variant="h6" component="div" style={{marginBottom: '24px', fontSize: '14px'}}>
        हिमाचल प्रदेश सरकार
        </Typography>
        <Typography variant="h6" component="div" style={{marginBottom: '24px', marginLeft: '10px', marginRight: '10px', fontSize: '14px'}}>
        |
        </Typography> */}
        {/* <div>
          <img src='http://www.tcpo.gov.in/sites/all/themes/nexus/images/flag.jpg' alt='indian-flag' style={{margin: '0px 20px 20px 20px'}}/>
        </div>
        <Typography variant="h6" component="div" style={{marginBottom: '24px', marginRight: '300px', fontSize: '14px'}}>
        Government of Himanchal Pradesh 
        </Typography> */}
        <div style={{display: 'flex', flexDirection: 'row', marginRight: '120px'}}>
          <BsFillVolumeUpFill className={classes.iconStyle}/>
          <DiAndroid className={classes.iconStyle}/>
          <AiFillWindows className={classes.iconStyle}/>
          <BsApple className={classes.iconStyle}/>
          <Typography variant='p' style={{width: '150px', margin: '10px'}}>e-service User Guide</Typography>
        <Button style={{width: '130px', height: '35px', margin: '0px 10px 30px 10px', backgroundColor: '#207CBD', color: 'white'}}>E-Map Login</Button>
        </div>
        <Typography variant='h6' component='div' style={{fontSize: '14px', margin: '0px 10px 25px 10px'}}>Skip to main content</Typography>
        <img src='https://www.hsvphry.org.in/assets/img/font-small.png' alt='decrease' style={{marginBottom: '25px',marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-small.png' alt='normal' style={{marginBottom: '25px', marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-normal-size.png' alt='increase' style={{marginBottom: '25px',marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-white.png' alt='dark' style={{marginBottom: '25px', marginLeft: '25px', marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-black.png' alt='default' style={{marginBottom: '25px', marginRight: '10px', width: '22px', height: '22px'}}/>
        <Typography variant="h6" component="div" style={{marginBottom: '25px'}}>
          हिंदी 
        </Typography>
        <input type='text' placeholder='Search here...' style={{marginBottom: '25px', marginLeft: '20px'}}/>
        
      </Toolbar>
    </AppBar>
  );
}

export default Strip


//  <ul class="nav ace-nav settingNav">          
// <!--<li><a href="javascript:void(0);" class="hide-770 screenReader" id="Main" title="Skip to main Content"><span style="border-right:#000 solid 1px; padding-right:5px;">Skip to main Content</span></a></li>-->
// <!--        <li><a href="https://play.google.com/store/apps/details?id=com.csm.hptcp.hptcpmobileapp" class="hide-770 screenReader" title="Download Mobile App" target="_blank"> <i class="fa fa-android bigger-130 green" aria-hidden="true"></i> &nbsp;<span style="border-right:#000 solid 1px; padding-right:5px;">Download Mobile App</span></a></li>-->
//             <li><a href="https://tcp.hp.gov.in/screenReader" class="screenReader appLink" title="Screen Reader" target="_blank" tabindex="2"> <i class="fa fa-volume-up bigger-130 green" aria-hidden="true"></i></a></li>
//             <!--<li><a href="https://play.google.com/store/search?q=hptcp&hl=en" class="screenReader appLink" title="Download Mobile App" target="_blank"> <i class="fa fa-android bigger-130 green" aria-hidden="true"></i></a></li>-->
//             <li><a href="javascript:void(0);" class="screenReader appLink" title="Download Mobile App" tabindex="3"> <i class="fa fa-android bigger-130 green" aria-hidden="true"></i></a></li>
// 			<li><a href="https://www.microsoft.com/en-in/store/p/him-tcp/9nblggh406mz" class="screenReader appLink" title="Download Mobile App" target="_blank" tabindex="4"> <i class="fa fa-windows bigger-130 green" aria-hidden="true"></i></a></li>
//             <li><a href="https://itunes.apple.com/us/app/him-tcp/id1161638555?ls=1&amp;mt=8" class="screenReader appLink" title="Download Mobile App" target="_blank" tabindex="5"> <i class="fa fa-apple bigger-130 green" aria-hidden="true"></i></a></li>
// 	            <!--<li><a href="javascript:void(0);" onClick="goToPage('https://tcp.hp.gov.in/downloadScreenreader',9,0,'Download Screen Reader','');" class="hide-770 screenReader"><span style="padding-right:5px;">Download Screen Reader</span></a></li>-->
// 	<li><a href="javascript:void(0);" data-toggle="modal" data-target="#userGuideModal" class="hide-770 screenReader" title="e-Services User Guide" tabindex="6"><span style="padding-right:0px;">e-Services User Guide</span></a></li>
//                  <li class="fees-calc-link" style="height:40px;"><a href="javascript:void(0);" onclick="goToPage('https://tcp.hp.gov.in/login/4',9,0,'E-Map Center Login','');" class="hide-770 screenReader" tabindex="7">E-Map Login</a></li>
//                    <!--<li class="btnApplication"><a href="https://tcp.hp.gov.in/login">Start an Application</a></li>-->
// 		            <!--<li class="btnApplication"><a href="javascript: void(0);"  id="startApp" class="screenReader" onClick="goToPage('https://tcp.hp.gov.in/login',9,0,'Login','');">Start an Application<i class="ace-icon fa fa-caret-down"></i></a>    </li>-->
		            
// </ul>
