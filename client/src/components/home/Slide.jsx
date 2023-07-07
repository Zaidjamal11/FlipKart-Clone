
import React from 'react';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Countdown from 'react-countdown';

import { Box , Typography , Button, styled } from '@mui/material';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const Component = styled(Box)`
   margin-top: 10px;
   background: #ffffff;
  `;

  const Deal = styled(Box)`
     padding: 15px 20px;
     display: flex;
   
   `;

   const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-item: center;
    color: #7f7f7f;
   `;

   const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;

   `;
   const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    color: #ffffff;
   `




const Slide = ({ products }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer  = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left </Box>
    }

  return (

    <Component>
        <Deal>
            <DealText>Deal of the day </DealText>
            <Timer>
                <img src={timerURL} alt="timer" style={{ width: 24 }}/>
                <Countdown date={Date.now() + 5.04E+7} renderer={renderer} />

            </Timer>
            <ViewAllButton>view all</ViewAllButton>
            


        </Deal>



       <Carousel

          responsive={responsive}
          swipeable={false}
          draggable={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          centerMode={true}
         slidesToSlide={1}
       >
        
          {
            products.map((product) => (
                <img src={product.url} alt="product" />

            ))
          }

       </Carousel>
    </Component>
  )
}

export default Slide;