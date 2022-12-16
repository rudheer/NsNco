import { Box } from '@material-ui/core'
import React from 'react'
import MediaIconsBox from './MediaIconsBox'
import RightBox from './RightBox'
import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        //backgroundColor:'yellow'
        height:'100vh',
        '@media screen and (max-width: 480px)':{
            display:'flex',
            flexDirection:'column',
            height:'1100px'
        }
    },
    mediabox:{
        display:'flex',
        //alignItems:'center',
        //justifyContent:'center',
        backgroundColor:'#090116',
        flex:0.7,
        '@media screen and (max-width: 480px)':{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#090116',
            //height:'150px'
        }
    },
    rightbox:{
        display:'flex',
        //alignItems:'center',
        //justifyContent:'center',
        backgroundColor:'#460D5C',
        flex:11.3,
        '@media screen and (max-width: 480px)':{
            display:'flex',
            //alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#460D5C',
            height:'100%'
        }
    }
})

const Main = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.mediabox}>
            <MediaIconsBox />
        </Box>
        <Box className={classes.rightbox}>
            <RightBox/>
        </Box>
    </Box>
  )
}

export default Main