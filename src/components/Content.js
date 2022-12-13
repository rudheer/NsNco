import { Typography,Box, Button } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import bg from '../Images/bg.jpg'
import name from '../Images/thhs.png'
import Icons from './Icons'
import Text from './Text'

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
    backgroundPositionY:'80%'
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
      width:'80%',
      padding:'15px',
  }
  },
  img:{
    height:'100px',
    width:'100%'
  },
  bottom:{
    display:'flex',
    //alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow',
    width:'70%',
    padding:'15px',
    flexDirection:'column'
  },
  buttonbox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'70%',
    //backgroundColor:'blue'
  },
  btn:{
    backgroundColor:'rgba(135, 116, 148, 0.5)',
    color:'white',
    borderRadius:'4px',
    margin:'10px'
  }
})

const Content = () => {
    const classes=useStyles();
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
            <a href='https://nsnco.in/' target='_blank' style={{'textDecoration':'none'}}><Button className={classes.btn}>Play Invite</Button></a>
        </Box>
    </Box>
  )
}

export default Content