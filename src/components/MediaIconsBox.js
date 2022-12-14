import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import logo from "../Images/logo.jpeg"
import gmail from '../Images/gmail.png'
import linkdln from'../Images/linkedin.png'
import youtube from'../Images/youtube.png'
import insta from'../Images/instagram.png'
import fb from'../Images/facebook.png'

const useStyles=makeStyles({
    wrapper:{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      alignItems:'center',
      '@media screen and (max-width: 480px)':{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        //flexWrap:'wrap'
        alignItems:'center',
        //backgroundColor:'yellow',
        justifyContent:'center'
      }
    },
    imgbox:{
      //backgroundColor:'blue',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'80px',
      '@media screen and (max-width: 480px)':{
        //backgroundColor:'blue',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'80px',
      }
    },
    img:{
      height:'40px',
      width:'40px',
      '@media screen and (max-width: 480px)':{
        height:'30px',
        width:'30px',
      }
    }
})

const MediaIconsBox = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imgbox}>
        <a href='https://nsnco.in/' target="_blank"><img className={classes.img} src={logo}/></a>
      </Box>
      <Box className={classes.imgbox}>
      <a href='mailto: happyhippie@thhs.in' target="_blank"><img className={classes.img} src={gmail}/></a>
      </Box>
      <Box className={classes.imgbox}>
      <a href='https://www.linkedin.com/company/the-happy-hippies-show' target="_blank"><img className={classes.img} src={linkdln}/></a>
      </Box>
      <Box className={classes.imgbox}>
      <a href='https://www.youtube.com/channel/UCri7Bmj7Iz30kEcOvzWr3SA' target="_blank"><img className={classes.img} src={youtube}/></a>
      </Box>
      <Box className={classes.imgbox}>
      <a href='https://www.instagram.com/thehappyhippiesshow/?hl=en' target="_blank"><img className={classes.img} src={insta}/></a>
      </Box>
      <Box className={classes.imgbox}>
      <a href='https://www.facebook.com/happy.hippie.969/' target="_blank"><img className={classes.img} src={fb}/></a>
      </Box>
    </Box>
  )
}

export default MediaIconsBox