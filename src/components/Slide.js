import React from 'react'
import {Box, makeStyles,Grid} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const useStyles=makeStyles({
  wrapper:{
    display:'flex',
    width:'100%',
    backgroundColor:'#460D5C',
    alignItems:'center',
    justifyContent:'center',
    '@media screen and (max-width: 480px)':{
        display:'flex',
        width:'100%',
        backgroundColor:'#460D5C',
        alignItems:'center',
        justifyContent:'center',
        height:'30%'
    }
  },
  carousel:{
    width:'50%',
    //backgroundColor:'blue',
    height:200,
    '@media screen and (max-width: 480px)':{
        width:'90%'
    }
    },
    rightbox:{
        //backgroundColor:'black',
        marginTop:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'black',
        width:'100%',
        '@media screen and (max-width: 480px)':{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            //backgroundColor:'black',
            height:'60vh',
        }
    },
})

const Slide = () => {
    const classes=useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src:'https://images.moneycontrol.com/static-mcnews/2017/09/Startup3-770x433.jpg?impolicy=website&width=770&height=431'
        },
    ]
  return (
    <Box className={classes.wrapper}>
        <Grid item xs={12} sm={12} lg={6} className={classes.rightbox}>
            <Carousel
                autoPlay={true}
                indicators={true}
                navButtonsAlwaysVisible={true}
                className={classes.carousel}
                >
                    {
                        items.map( (item) =>(
                            <Card>
                                <CardMedia
                                component='img'
                                height='150'
                                image={item.src}
                                /> 
                            </Card>
                        ))
                    }
            </Carousel>
        </Grid>
    </Box>
  )
}

export default Slide