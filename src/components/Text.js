import { Box, Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'

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
  }
})

const Text = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
        <Typography style={{"fontSize":"13px"}}>
            The Happy Hippies Show is a web series of discussions by the leaders with genZ, who want to make a difference. We invite you to join us and take part in this moment for change. 
        </Typography>
    </Box>
  )
}

export default Text