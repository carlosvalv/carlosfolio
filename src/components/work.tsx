import styled from 'styled-components';
import { Card } from './card';
import Slider from "react-slick";
import { useRef } from 'react';
import { isMobile, useMobileOrientation } from 'react-device-detect';

const Container = styled.section<{ isLandscape: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.isLandscape ? "3em" : "5em"};
  height: 100%;
  justify-content: center;
  .slick-slider{
    width: 90%;
    margin: 0 auto;
  }
  .slick-next, .slick-prev{
    width: 25px;
    height: 25px;
  }
  .slick-next:before, .slick-prev:before{
    font-size: 25px;
    color: #2F2F2F
  }
  .slick-track{
    display: flex;
    align-items: stretch;
  }
  .slick-slide{
    height: auto;
    >div{
      height: 100%;
    }
  }
  .slick-dots{
    bottom: -35px;
    li button:before{
      color: #2F2F2F
    }
  }
`;

const Title = styled.h2`
  font-size: 5.5vmax;
  margin: 0;
  text-align: center;
`;

const items = [
  { id: 1, title: "My own website", tags: ["React", "CSS", "Typescript"], desc: "This is my personal portfolio, where I showcase my work and projects", url: "https://github.com/carlosvalv/carlosfolio" },
  { id: 2, title: "Go class", tags: ["React", "CSS", "Typescript", ".Net", "PostgreSQL"], desc: "This is my personal portfolio, where I showcase my work and projects", url: "https://github.com/carlosvalv/carlosfolio" },
  { id: 3, title: "Aquila fortis", tags: ["Angular", "Arduino", "MySQL", "Java"], desc: "Real time monitored innovative transportation system for blood products, organs and biological materials", url: "https://github.com/ruben69695/aquilafortis" },
  { id: 4, title: "Hungry crossing", tags: ["Java", "MySQL", "PHP"], desc: "Android application to search for restaurants", url: "https://github.com/carlosvalv/android_hungrycrossing" },
];

export function Work() {
  const sliderRef = useRef<any>(null);

  const slides = items.map((item) => (
    <Card key={item.id} title={item.title} desc={item.desc} tags={item.tags} url={item.url} />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: false, // deshabilita el cambio de slide por drag
    focusOnSelect: false, // deshabilita el foco al seleccionar un slide
    swipe: false,
    autoplay: true, // habilita el cambio automático de los slides
    autoplaySpeed: 3000, // establece el intervalo de cambio automático de los slides en 5 segundos
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: '25px', // ajusta el padding para que las flechas no queden tan a los lados
        },
      },
    ],
  };

  return (
    <Container isLandscape={useMobileOrientation().isLandscape && isMobile}>
      <Title>Work</Title>
      <Slider ref={sliderRef} {...settings}>{slides}</Slider>
    </Container>
  );
}
