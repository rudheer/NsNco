import { Box, Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import ce from '../Images/reading.png'
import tree from '../Images/tree.png'
import GI from '../Images/gender.png'
import emp from '../Images/employment.png'
import com from '../Images/commerce.png'
import skill from '../Images/skill.png'
import enr from '../Images/energy.png'

const useStyles=makeStyles({
  wrapper:{
    display:'flex',
    //backgroundColor:'blue',
    width:'100%',
  },
  allbox:{
    backgroundColor:"rgba(82, 30, 138, 0.5)",
    margin:'10px',
    width:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    borderRadius:'8px',
    '@media screen and (max-width: 480px)':{
      backgroundColor:"rgba(82, 30, 138, 0.5)",
      margin:'10px',
      width:'85%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexWrap:'wrap',
      borderRadius:'8px',
  }
  },
  iconbox:{
    display:'flex',
    flexDirection:'column',
    //backgroundColor:'yellow',
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    margin:'10px',
  },
  img:{
    height:'30px',
    width:'30px',
    color:'white'
  }
})

const Icons = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.allbox}>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={ce}/>
                <Typography style={{"fontSize":"12px"}}>Child</Typography>
                <Typography style={{"fontSize":"12px"}}>Education</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={tree}/>
                <Typography style={{"fontSize":"12px"}}>Tree Plantation</Typography>
                <Typography style={{"fontSize":"12px"}}>Plantation</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={GI}/>
                <Typography style={{"fontSize":"12px"}}>Gender Inclusivity</Typography>
                <Typography style={{"fontSize":"12px"}}>Inclusivity</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={emp}/>
                <Typography style={{"fontSize":"12px"}}>Employement Generation</Typography>
                <Typography style={{"fontSize":"12px"}}>Generation</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={com}/>
                <Typography style={{"fontSize":"12px"}}>Cause Driven</Typography>
                <Typography style={{"fontSize":"12px"}}>consumerism</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={skill}/>
                <Typography style={{"fontSize":"12px"}}>Skill Training</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={enr}/>
                <Typography style={{"fontSize":"12px"}}>Renewable Energy</Typography>
                <Typography style={{"fontSize":"12px"}}>adoption</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Icons