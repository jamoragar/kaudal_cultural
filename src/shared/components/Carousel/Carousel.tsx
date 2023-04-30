import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

interface Props {
  year: number;
  months: string[];
}

const Arrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "#cdcdcd" }}
      onClick={onClick}
    />
  );
};

const Carousel: React.FC<Props> = ({ year, months }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleClick = (month: string) => {
    console.log(`Se seleccionó el mes de ${month}`);
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {months.map((month, index) => (
          <div
            key={index}
            className="carousel-item border"
            onClick={() => handleClick(month)}
          >
            <p className="text-xl month">{month}</p>
            <p className="text-m">{year}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
