

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css } from '@emotion/react';
import imgUrl01 from '../assets/slider/01.jpeg'
import imgUrl02 from '../assets/slider/02.jpeg'
import imgUrl03 from '../assets/slider/03.jpeg'


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slideCss = css`
  position: relative;
  cursor: pointer;
  font-size: 24px;
  border-radius: 4px;
  color: gray;
  &:hover {
    color: black;
  }
`
  const imgs = [imgUrl01, imgUrl02, imgUrl03];
  return (

    <Slider {...settings} >
      {Array.from({ length: 3 }).map((_, index) => {
        return <div key={index} >
          <div css={[slideCss, { display: "flex" }]} >
            <img src={imgs[index]} alt="" css={{ width: "100%" }} />
            <div css={{
              position: "absolute",
              top: "30%",
              left: "20%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "20px",

            }}>
              <h2>Text </h2>
              <p>subtitle</p>
              <button> ++++ </button>
            </div>
          </div>
        </div>
      }
      )
      }
    </Slider >

  );
}