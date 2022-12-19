import { Typography,Box, Button, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core'
import bg from '../Images/bg.jpg'
import name from '../Images/thhs.png'
import Icons from './Icons'
import Text from './Text'
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import ReactPlayer from 'react-player'

const useStyles=makeStyles({
  wrapper:{
    display:'flex',
    flexDirection:'column',
    //backgroundColor:'yellow',
    width:'100%',
    height:'100%',
    backgroundImage:`url(${bg})`,
    backgroundRepeat:'no-repeat',
    //backgroundPosition:'inherit',
    backgroundSize:'cover',
    //backgroundAttachment:'fixed'
    backgroundPositionY:'80%',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      flexDirection:'column',
      //backgroundColor:'yellow',
      width:'100%',
      height:'100%',
      backgroundImage:`url(${bg})`,
      backgroundRepeat:'repeat',
      //backgroundPosition:'inherit',
      backgroundSize:'cover',
      backgroundAttachment:'fixed',
      backgroundPositionY:'80%',
    }
  },
  top:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow',
    width:'50%',
    padding:'15px',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'yellow',
      width:'95%',
      //padding:'11px',
  },
  '@media screen and (min-width:481px) and (max-width: 1024px)':{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow',
    width:'50%',
    //padding:'11px',
 }
  },
  img:{
    height:'100px',
    width:'100%',
    '@media screen and (max-width: 480px)':{
      height:'60px',
      width:'100%',
    },
    '@media screen and (min-width:481px) and  (max-width: 1024px)':{
      height:'60px',
      width:'100%',
  }
  },
  bottom:{
    display:'flex',
    //alignItems:'center',
    //justifyContent:'center',
    //backgroundColor:'pink',
    width:'100%',
    //padding:'15px',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'yellow',
      width:'100%',
      padding:'15px',
      flexDirection:'column',
    },
  },
  bottomleftbox:{
    display:'flex',
    //alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow',
    width:'60%',
    flexDirection:'column',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'yellow',
      width:'100%',
      flexDirection:'column',
    },
  },
  bottonRightBox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'30%',
    flexDirection:'column',
    color:'rgba(250, 249, 246,0.7)',
    backgroundColor:'rgba(82, 30, 138, 0.5)',
    borderRadius:'8px',
    padding:'5px',
    '@media screen and (max-width: 480px)':{
      display:'none',
    },
  },
  buttonbox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'70%',
    //backgroundColor:'blue'
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      flexDirection:'column'
      //backgroundColor:'blue'
    },
    '@media screen and (min-width:481px) and  (max-width: 1200px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      //backgroundColor:'blue'
    },
  },
  btn:{
    backgroundColor:'#C5C4FE',
    //color:'white',
    borderRadius:'4px',
    margin:'10px',
    width:'180px',
    fontWeight:'bold',
    boxShadow:'0 4px 8px 0 rgba(197,196,254,0.2), 0 3px 10px 0 rgba(197,196,254,0.2);',
    '&:hover':{
      backgroundColor:'#74B652',
    },
    '@media screen and (min-width:481px) and  (max-width: 1024px)':{
      backgroundColor:'#C5C4FE',
      //color:'white',
      borderRadius:'4px',
      margin:'10px',
      width:'150px',
      fontWeight:'bold',
      boxShadow:'0 4px 8px 0 rgba(197,196,254,0.2), 0 3px 10px 0 rgba(197,196,254,0.2);',
    },
  },
  playbox:{
    //style={{"display":'flex',"flexWrap":'wrap',"alignItems":'center',"justifyContent":'center',"backgroundColor":'white',"height":'200px',"width":'55%',"borderRadius":'10px',"marginLeft":'20%',"marginTop":'5%'}}
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    height:'400px',
    width:'55%',
    borderRadius:'10px',
    marginLeft:'20%',
    marginTop:'5%',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      height:'400px',
      width:'75%',
      borderRadius:'10px',
      marginLeft:'10%',
      marginTop:'5%',
    },
  },
  iconsbox:{
    '@media screen and (max-width: 480px)':{
      display:'none',
    },
  },
  moonMobile:{
    display:'none',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      backgroundColor:'rgba(82, 30, 138, 0.5)',
      color:'rgba(250, 249, 246,0.7)',
      borderRadius:'8px',
      padding:'5%',
    },
  }
})

const Content = () => {
    const classes=useStyles();
    const [shareOpen,setShareopen]=useState(false);
    const [playOpen,setPlayopen]=useState(false);
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.top}>
            <img className={classes.img} src={name}/>
        </Box>
        <Box  className={classes.bottom}>
            <Box className={classes.bottomleftbox}>
              <Box><Text/></Box>
              <Box className={classes.iconsbox}><Icons/></Box>
            </Box>
            <Box className={classes.bottonRightBox}>
              <Typography style={{"fontSize":'18px',"color":'white'}}>#MoonProject</Typography>
              <Typography style={{"fontSize":'13px',}}>In current times, the happy hippies are on their journey to be on the moon by 2024. 
    They are doing this to make earth a better place, cleaner environment, less pollution, no descrimination and happiness for all. 
    Now the happy hippies of future,  year 2024, from the moon, are showing us their journey from earth to moon through this show.</Typography>
              <Typography style={{"fontSize":'13px'}}>This show inspires a series of events and conversations with leaders, changemakers and you. 
    We the happy hippies are the GenZs, the generation of hope,  for future. And this is our #MoonProject.</Typography>
            </Box>
        </Box>
        <Box className={classes.buttonbox}>
            <Button className={classes.btn} style={{"backgroundColor":'#FF0000'}} onClick={()=>setPlayopen(true)}>Play Invite</Button>
            <a href='https://nsnco.in/' target='_blank' style={{'textDecoration':'none'}}><Button  className={classes.btn} style={{"textTransform":'none'}}>VISIT NsN Co</Button></a>
            <Button className={classes.btn} onClick={()=>setShareopen(true)}>Invite Friends</Button>
            <a href='https://www.linkedin.com/company/the-happy-hippies-show/jobS/' target='_blank' style={{'textDecoration':'none'}}><Button className={classes.btn}>We are hiring</Button></a>
        </Box>
        <Box className={classes.moonMobile}>
          <Typography style={{"fontSize":'15px',"color":'white'}}>#MoonProject</Typography>
          <Typography style={{"fontSize":'13px'}}>In current times, the happy hippies are on their journey to be on the moon by 2024. 
They are doing this to make earth a better place, cleaner environment, less pollution, no descrimination and happiness for all. 
Now the happy hippies of future,  year 2024, from the moon, are showing us their journey from earth to moon through this show.</Typography>
          <Typography style={{"fontSize":'13px'}}>This show inspires a series of events and conversations with leaders, changemakers and you. 
We the happy hippies are the GenZs, the generation of hope,  for future. And this is our #MoonProject.</Typography>
        </Box>
        <Modal
        open={shareOpen}
        onClose={()=>setShareopen(false)}
        >
          <Box style={{"display":'flex',"flexWrap":'wrap',"alignItems":'center',"justifyContent":'center',"backgroundColor":'white',"height":'200px',"width":'55%',"borderRadius":'10px',"marginLeft":'20%',"marginTop":'5%'}}>
            <EmailShareButton><EmailIcon size={32} round={true} style={{"margin":'10px'}}/></EmailShareButton>
            <FacebookShareButton><FacebookIcon size={32} round={true} style={{"margin":'10px'}}/></FacebookShareButton>
            <InstapaperShareButton><InstapaperIcon size={32} round={true} style={{"margin":'10px'}}/></InstapaperShareButton>
            <LinkedinShareButton><LinkedinIcon size={32} round={true} style={{"margin":'10px'}}/></LinkedinShareButton>
            <TelegramShareButton><TelegramIcon size={32} round={true} style={{"margin":'10px'}}/></TelegramShareButton>
            <TwitterShareButton><TwitterIcon size={32} round={true} style={{"margin":'10px'}}/></TwitterShareButton>
            <WhatsappShareButton><WhatsappIcon size={32} round={true} style={{"margin":'10px'}}/></WhatsappShareButton>
          </Box>
        </Modal>
        <Modal
        open={playOpen}
        onClose={()=>setPlayopen(false)}
        >
          <Box className={classes.playbox} >
            <ReactPlayer playing={true} url='https://www.youtube.com/watch?v=HBxSmhigFQk' />
          </Box>
        </Modal>
    </Box>
  )
}

export default Content