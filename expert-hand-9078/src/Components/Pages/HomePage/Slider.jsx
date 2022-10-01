import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Box, Container, Image, Text } from '@chakra-ui/react';

export default function Slider() {
  return (
    <Box maxW={"100%"} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" py={["2rem","3rem","5rem"]} margin="auto" >  
    <Text px={"1rem"} color="#7f8488" as="b" fontSize={"18px"} textAlign="center">Companies of all shapes and sizes use TrackingTime:</Text>
    <Box >
    <Swiper
    loop={true}
    navigation={true}
    autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
  
    modules={[FreeMode, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo11.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo9.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo2.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo5.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo8.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo3.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo6.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo7.jpg"/></SwiperSlide>
    <SwiperSlide><Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo10.jpg"/></SwiperSlide>
  </Swiper>
  </Box>
  </Box>
  )
}
