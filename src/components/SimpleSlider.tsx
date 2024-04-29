

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css } from '@emotion/react';


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const a = css`
  cursor: pointer;
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: red;
  }
`

  return (

    <Slider {...settings} >
      {Array.from({ length: 6 }).map((_, index) => {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return <div key={index} css={[a, { backgroundColor: color }]}  >
          <h3 >{index + 1}</h3>
        </div>
      }
      )
      }
    </Slider >

  );
}