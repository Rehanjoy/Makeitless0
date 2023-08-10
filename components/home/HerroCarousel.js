/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pt-10">
      <Slider {...settings}>
        <div className="px-4">
          <img
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1691236095/Blue_Gradient_Modern_Professional_Gadget_Laptop_Store_Instagram_Post_1_l8djgs.png"
            className="m-auto max-h-full w-full max-w-full rounded-b-2xl rounded-t-2xl"
            alt="Slide 1"
          />
        </div>
        <div className="px-4">
          <img
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1691236094/Refrigerator_Sale_Promo_Instagram_Post_yhh4p8.png"
            className="m-auto max-h-full w-full max-w-full rounded-b-2xl rounded-t-2xl"
            alt="Slide 2"
          />
        </div>
        <div className="px-4">
          <img
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1690982958/Fashion_Clothing_Online_Shop_Showroom_Instagram_Post_unlhka.png"
            className="m-auto max-h-full w-full max-w-full rounded-b-2xl rounded-t-2xl"
            alt="Slide 3"
          />
        </div>
        <div className="px-4">
          <img
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1691236094/Men_Clothing_Promo_Instagram_Post_gjhwst.png"
            className="m-auto max-h-full w-full max-w-full rounded-b-2xl rounded-t-2xl"
            alt="Slide 4"
          />
        </div>
        <div className="px-4">
          <img
            src="https://res.cloudinary.com/dcpte972l/image/upload/v1691236094/Refrigerator_Sale_Promo_Instagram_Post_yhh4p8.png"
            className="m-auto max-h-full w-full max-w-full rounded-b-2xl rounded-t-2xl"
            alt="Slide 5"
          />
        </div>
      </Slider>
    </div>
  );
}


