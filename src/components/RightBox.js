import { Box} from '@material-ui/core'
import React from 'react'
import Content from './Content'
import Slide from './Slide'
import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles({
  wrapper:{
    display:'flex',
    flexDirection:'column',
    //backgroundColor:'yellow',
    width:'100%',
    height:'100vh',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'yellow',
      width:'100%',
      height:'100%'
    },
    '@media screen and (max-width: 1024px)':{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'yellow',
      width:'100%',
      height:'100%'
    }
  }
})

const RightBox = () => {
  const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
      <Content/>
      <Slide/>
    </Box>
  )
}

export default RightBox