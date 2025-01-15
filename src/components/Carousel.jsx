import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import { pinotGrigio } from "@/utils/assets";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <Box bg="orange.500" w="200px" h="400px"></Box>
      </div>
      <div>
        <Box bg="orange.500" w="200px" h="400px"></Box>
      </div>
      <div>
        <Box bg="orange.500" w="200px" h="400px"></Box>
      </div>
      <div>
        <Box bg="orange.500" w="200px" h="400px"></Box>
      </div>
      <div>
        <Box bg="orange.500" w="200px" h="400px"></Box>
      </div>
      <div>
        <Box bg="orange.500" w="200px" h="400px"></Box>
      </div>
    </Slider>
  );
};
export default Carousel;
