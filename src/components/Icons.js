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
    width:'75%',
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
  },
  '@media screen and (min-width:481px) and  (max-width: 1024px)':{
    backgroundColor:"rgba(82, 30, 138, 0.5)",
    margin:'10px',
    width:'75%',
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
    color:'rgba(250, 249, 246,0.5)',
    alignItems:'center',
    justifyContent:'center',
    margin:'3px',
    width:'150px',
    height:'70px',
    '@media screen and (max-width: 480px)':{
      display:'flex',
      flexDirection:'column',
      //backgroundColor:'yellow',
      color:'rgba(250, 249, 246,0.5)',
      alignItems:'center',
      justifyContent:'center',
      margin:'3px',
      width:'100px',
      height:'70px',
  },
  '@media screen and (min-width:481px) and  (max-width: 1024px)':{
    display:'flex',
    flexDirection:'column',
    //backgroundColor:'yellow',
    color:'rgba(250, 249, 246,0.5)',
    alignItems:'center',
    justifyContent:'center',
    margin:'3px',
    width:'80px',
    height:'60px',
}
  },
  img:{
    height:'30px',
    width:'30px',
    color:'rgba(250, 249, 246,0.5)',
    '@media screen and (max-width: 480px)':{
      height:'25px',
      width:'25px',
      color:'rgba(250, 249, 246,0.5)',
  },
  '@media screen and (min-width:481px) and  (max-width: 1024px)':{
    height:'25px',
    width:'25px',
    color:'rgba(250, 249, 246,0.5)',
}
  },
  text:{
    fontSize:'12px',
    '@media screen and (max-width: 480px)':{
      fontSize:'8px'
  },
  '@media screen and (min-width:481px) and  (max-width: 1024px)':{
    fontSize:'8px'
}
  }
})

const Icons = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.allbox}>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={ce}/>
                <Typography className={classes.text}>Child</Typography>
                <Typography className={classes.text}>Education</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={tree}/>
                <Typography className={classes.text}>Tree Plantation</Typography>
                <Typography className={classes.text}>Plantation</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={GI}/>
                <Typography className={classes.text}>Gender Inclusivity</Typography>
                <Typography className={classes.text}>Inclusivity</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={emp}/>
                <Typography className={classes.text}>Employement</Typography>
                <Typography className={classes.text}>Generation</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={com}/>
                <Typography className={classes.text}>Cause Driven</Typography>
                <Typography className={classes.text}>consumerism</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={skill}/>
                <Typography className={classes.text}>Skill Training</Typography>
            </Box>
            <Box className={classes.iconbox}>
                <img className={classes.img} src={enr}/>
                <Typography className={classes.text}>Renewable</Typography>
                <Typography className={classes.text}> Enegy adoption</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Icons