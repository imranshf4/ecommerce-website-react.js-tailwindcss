import React from 'react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadingSection from '../../components/HeadingSection'
import bedroomImage from '../../assets/home/category/bedroom.png';
import diningImage from '../../assets/home/category/dining.png';
import livingImage from '../../assets/home/category/living.png';
import { Link } from 'react-router';
import "../../index.css";
const categories = [
  // Chairs
  {
    id: 1,
    name: "bedroom",
    imageUrl: bedroomImage,
  },
  {
    id: 2,
    name: "dining",
    imageUrl: diningImage,
  },
  {
    id: 3,
    name: "living",
    imageUrl: livingImage,
  },
  {
    id: 4,
    name: "bedroom",
    imageUrl: bedroomImage,
  },
  {
    id: 5,
    name: "dining",
    imageUrl: diningImage,
  },
  {
    id: 6,
    name: "living",
    imageUrl: livingImage,
  },
  
];


const Category = () => {
  return (
    <div className='section-container'>
        <HeadingSection heading="Browse The Range" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>

        <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="md:max-w-7xl mx-auto relative rounded"
            >
                {
                    categories.map((category, index) => (
                        <SwiperSlide key={index} className=' bg-no-repeat bg-cover rounded-lg re' style={{ backgroundImage: `url(${category.imageUrl})` }}>
                          <Link to={'/'} className='relative'>
                            <img src={category.imageUrl} alt="" className='w-20 h-40'/>
                            <div className='flex items-center justify-center absolute inset-0'>
                              <h2 className='text-xl text-center font-semibold text-gray-800 capitalize'>{category.name}

                              </h2>
                        </div>
                          </Link>
                        
                        
                        </SwiperSlide>
                    ))
                }

            </Swiper>
    </div>
  )
}

export default Category