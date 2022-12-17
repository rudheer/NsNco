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

const useStyles=makeStyles({
  wrapper:{
    display:'flex',
    flexDirection:'column',
    //backgroundColor:'yellow',
    width:'100%',
    height:'70%',
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
      height:'80%',
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
    justifyContent:'center',
    //backgroundColor:'yellow',
    width:'70%',
    padding:'15px',
    flexDirection:'column',
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
    '@media screen and (min-width:481px) and  (max-width: 1024px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'80%',
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
})

const Content = () => {
    const classes=useStyles();
    const [shareOpen,setShareopen]=useState(false);
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.top}>
            <img className={classes.img} src={name}/>
        </Box>
        <Box  className={classes.bottom}>
            <Icons/>
            <Text/>
        </Box>
        <Box className={classes.buttonbox}>
            <a href='https://nsnco.in/' target='_blank' style={{'textDecoration':'none'}}><Button className={classes.btn}>Visit NsN co</Button></a>
            <a href='https://nsnco.in/' target='_blank' style={{'textDecoration':'none'}}><Button  className={classes.btn}>Visit friends</Button></a>
            <a href='https://www.linkedin.com/company/the-happy-hippies-show/jobS/' target='_blank' style={{'textDecoration':'none'}}><Button className={classes.btn}>We are hiring</Button></a>
            <Button className={classes.btn} onClick={()=>setShareopen(true)}>Invite Friends</Button>
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
    </Box>
  )
}

export default Content