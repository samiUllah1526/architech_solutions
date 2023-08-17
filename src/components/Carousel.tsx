import {
  Box,
} from '@chakra-ui/react'
import Slider from 'react-slick'


const settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 1
    //   }
    // },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
}

export function Carousel({ children }: Props) {
  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Slider {...settings}>
        {children}
        {/*  */}
      </Slider>
    </Box>
  )
}