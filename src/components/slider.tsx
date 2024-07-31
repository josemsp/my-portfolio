import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/index.css'
import React from 'react';

interface CustomCarouselProps {
  width?: string;
  height?: string;
  items: React.ReactNode[];
  className?: string;
}

const Slider = ({
  items,
  width,
  height,
  className = '',
}: CustomCarouselProps) => {

  return (
    <div
      style={{ width, height }}
      className={className}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} style={{ height }}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider
