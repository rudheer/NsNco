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
    color:'white'
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