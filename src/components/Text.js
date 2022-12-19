import { Box, Typography, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core'
import Icons from './Icons'

const useStyles=makeStyles({
  wrapper:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'rgba(82, 30, 138, 0.5)',
    width:'40%',
    padding:'15px',
    marginLeft:'10px',
    borderRadius:'8px',
    color:'rgba(250, 249, 246,0.7)',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'rgba(82, 30, 138, 0.5)',
      width:'75%',
      padding:'15px',
      marginRight:'13%',
      borderRadius:'8px',
      color:'rgba(250, 249, 246,0.7)',
   },
   '@media screen and (min-width:481px) and  (max-width: 1024px)':{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'rgba(82, 30, 138, 0.5)',
    width:'80%',
    padding:'15px',
    marginRight:'13%',
    borderRadius:'8px',
    color:'rgba(250, 249, 246,0.7)',
 }
  },
  iconslinkbox:{
    display:'none',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      color:'rgb(250, 250, 51)',
      textDecoration:'underline'
   },
  },
  playbox:{
    //style={{"display":'flex',"flexWrap":'wrap',"alignItems":'center',"justifyContent":'center',"backgroundColor":'white',"height":'200px',"width":'55%',"borderRadius":'10px',"marginLeft":'20%',"marginTop":'5%'}}
    '@media screen and (max-width: 480px)':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"rgba(82, 30, 138, 1)",
      height:'300px',
      width:'65%',
      borderRadius:'10px',
      marginLeft:'13%',
      marginTop:'5%',
    },
  },
})

const Text = () => {
    const classes=useStyles();
    const [iconOpen,setIconopen]=useState(false);
  return (
    <Box className={classes.wrapper}>
        <Typography style={{"fontSize":"13px"}}>
        <b style={{"color":'white'}}>We invite you to join us and take part in this moment for change</b>. Driven by our GenZs, The Happy Hippies Show is a web series of discussions by the leaders, on these social themes. 
        </Typography>
        <Typography className={classes.iconslinkbox} style={{"fontSize":"13px"}}>
          <a onClick={()=>setIconopen(true)}>Check Out Social Themes That Interst's You</a>
        </Typography>
        <Modal
        open={iconOpen}
        onClose={()=>setIconopen(false)}
        >
          <Box className={classes.playbox}>
            <Icons/>
          </Box>
        </Modal>
    </Box>
  )
}

export default Text