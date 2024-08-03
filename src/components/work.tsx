import styled from "styled-components";
import { Card } from "./card";
import Slider from "react-slick";
import { useCallback, useContext, useEffect, useRef } from "react";
import { isLandscapeMobileContext } from "../context/landscapeMobile";
import { works } from "../constants/works";

const Container = styled.section<{ isLandscape: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isLandscape ? "3em" : "5em")};
  height: 100%;
  justify-content: center;
  .slick-slider {
    width: 90%;
    margin: 0 auto;
  }
  .slick-next,
  .slick-prev {
    width: 25px;
    height: 25px;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 25px;
    color: #2f2f2f;
  }
  .slick-track {
    display: flex;
    align-items: stretch;
  }
  .slick-slide {
    //height: auto;
    margin: auto;
    > div {
      //height: 100%;
    }
  }
  .slick-dots {
    bottom: -60px;
    li button:before {
      color: #2f2f2f;
    }
  }
`;

const Title = styled.h2`
  font-size: 5.5vmax;
  margin: 0;
  text-align: center;
`;

export function Work() {
  const isLandscapeMobile = useContext(isLandscapeMobileContext);
  const sliderRef = useRef<any>(null);

  const slides = works.map((item, index) => (
    <Card
      key={index}
      title={item.title}
      desc={item.desc}
      tags={item.tags}
      img={item.img}
      url={item.url}
    />
  ));

  function clickPrev() {
    var controls = document.getElementsByClassName("slick-prev");
    //@ts-ignore
    controls[0]!.click();
  }

  function clickNext() {
    var controls = document.getElementsByClassName("slick-next");
    //@ts-ignore
    controls[0]!.click();
  }

  const checkKey = useCallback((e: any) => {
    e = e || window.event;
    e.preventDefault();
    if (e.keyCode === 37) clickPrev();
    else if (e.keyCode === 39) clickNext();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", checkKey);
    return () => {
      document.removeEventListener("keydown", checkKey);
    };
  }, [checkKey]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    draggable: false, // deshabilita el cambio de slide por drag
    focusOnSelect: false, // deshabilita el foco al seleccionar un slide
    swipe: false,
    autoplay: false, // habilita el cambio automático de los slides
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
          centerPadding: "25px", // ajusta el padding para que las flechas no queden tan a los lados
        },
      },
    ],
  };

  return (
    <Container isLandscape={isLandscapeMobile}>
      <Title>Work</Title>
      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
    </Container>
  );
}
