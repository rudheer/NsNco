// import React from 'react'
// import {Box, makeStyles,Grid} from '@material-ui/core'
// import Carousel from 'react-material-ui-carousel';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';

// const useStyles=makeStyles({
//   wrapper:{
//     display:'flex',
//     width:'100%',
//     backgroundColor:'#460D5C',
//     alignItems:'center',
//     justifyContent:'center',
//     '@media screen and (max-width: 480px)':{
//         display:'flex',
//         width:'100%',
//         backgroundColor:'#460D5C',
//         alignItems:'center',
//         justifyContent:'center',
//         height:'30%'
//     }
//   },
//   carousel:{
//     width:'50%',
//     //backgroundColor:'blue',
//     height:200,
//     '@media screen and (max-width: 480px)':{
//         width:'90%'
//     }
//     },
//     rightbox:{
//         //backgroundColor:'black',
//         marginTop:'10px',
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         //backgroundColor:'black',
//         width:'100%',
//         '@media screen and (max-width: 480px)':{
//             display:'flex',
//             alignItems:'center',
//             justifyContent:'center',
//             flexDirection:'column',
//             //backgroundColor:'black',
//             height:'60vh',
//         }
//     },
// })

// const Slide = () => {
//     const classes=useStyles();
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!",
//             src:'https://images.moneycontrol.com/static-mcnews/2017/09/Startup3-770x433.jpg?impolicy=website&width=770&height=431'
//         },
//     ]
//   return (
//     <Box className={classes.wrapper}>
//         <Grid item xs={12} sm={12} lg={6} className={classes.rightbox}>
//             <Carousel
//                 autoPlay={true}
//                 indicators={true}
//                 navButtonsAlwaysVisible={true}
//                 className={classes.carousel}
//                 >
//                     {
//                         items.map( (item) =>(
//                             <Card>
//                                 <CardMedia
//                                 component='img'
//                                 height='150'
//                                 image={item.src}
//                                 /> 
//                             </Card>
//                         ))
//                     }
//             </Carousel>
//         </Grid>
//     </Box>
//   )
// }

// export default Slide
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import { PropTypes } from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

const DUMMY_VIDEOS = [
  {
   _id: '5fd025a181e2c80897c14ae1',
   videoUrl: 'https://www.youtube.com/watch?v=HBxSmhigFQk&list=PLxNKsHD8bM1m0XLQIBGnXNApencPe-XwK&index=1',
   title:"Episode-1"
  },
  {
    _id: '5fd025a181e2c80897c14ae1',
    videoUrl: 'https://www.youtube.com/watch?v=HBxSmhigFQk&list=PLxNKsHD8bM1m0XLQIBGnXNApencPe-XwK&index=1',
    title:"Episode-1"
   },
];

const useStyles = makeStyles(theme => ({
  carousel: {
  margin: theme.spacing(2)
 },
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
cbox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'white'
}
}));

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="176px" url={url} playing={isSelected} />
);
const CarouselVideo = ({ data }) => {
    const classes = useStyles();
  
    const customRenderItem = (item, props) => (
      <item.type {...item.props} {...props} />
    );
  
    const getVideoThumb = videoId =>`https://img.youtube.com/vi/${videoId}/default.jpg`;
  
    const getVideoId = url =>url.substr('https://www.youtube.com/watch?v='.length, url.length);
  
    const customRenderThumb = children =>
      children.map(item => {
        const videoId = getVideoId(item.props.url);
    
        return <img key={videoId} src={getVideoThumb(videoId)} />;
});
    return (
        <Box className={classes.wrapper}>
        <Grid item md={6} xs={12}>
          <Carousel
           autoPlay={false}
           className={classes.carousel}
           emulateTouch={true}
           showArrows={true}
           showThumbs={false}
           showStatus={false}
           infiniteLoop={false}
           renderItem={customRenderItem}
           renderThumbs={customRenderThumb}
         >
          {data.map(v => (
            <Box className={classes.cbox}>
            <YoutubeSlide
              url={v.videoUrl}
              muted
              playing={false}
              key={v._id ? v._id : v.id}
            />
            <Typography style={{"width":'25%'}}>{v.title}</Typography>
            </Box>
          ))}
         </Carousel>
       </Grid>
       </Box>
      );
     };
    
     YoutubeSlide.propTypes = {
       url: PropTypes.string,
       isSelected: PropTypes.bool
     };

     CarouselVideo.propTypes = {
        data: PropTypes.array
      };
     
      CarouselVideo.defaultProps = {
       data: DUMMY_VIDEOS
      };
     
export default CarouselVideo;