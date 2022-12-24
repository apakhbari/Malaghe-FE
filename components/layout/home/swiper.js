import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './stylesSwiperHome.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function MySwiper() {
  return (
    <Swiper
      dir="rtl"
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>اسلاید ۱</SwiperSlide>
      <SwiperSlide>اسلاید ۲</SwiperSlide>
      <SwiperSlide>اسلاید ۳</SwiperSlide>
      <SwiperSlide>اسلاید ۴</SwiperSlide>
    </Swiper>
  )
}
