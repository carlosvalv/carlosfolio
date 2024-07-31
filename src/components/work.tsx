import styled from "styled-components";
import { Card } from "./card";
import Slider from "react-slick";
import { useCallback, useContext, useEffect, useRef } from "react";
import { isLandscapeMobileContext } from "../context/landscapeMobile";

const Container = styled.section<{ isLandscape: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isLandscape ? "3em" : "2.25em")};
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
    margin: auto;
  }
  .slick-dots {
    bottom: ${(props) => (props.isLandscape ? "-50px" : "-15px")};

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

const items = [
  {
    id: 7,
    title: "Taskflow",
    tags: ["React", "Typescript", "Redux"],
    desc: "Organize your tasks",
    img: "taskflow.png",
    url: "https://carlosvalv.github.io/trello-clone/",
  },
  {
    id: 3,
    title: "Go class",
    tags: ["React", "Node.js", "Typescript", ".Net", "PostgreSQL"],
    desc: "Virtual classroom used by GoStudent and Classgap",
    url: "https://demo.class.classgap.com/",
    img: "goclass.png",
  },
  // {
  //   id: 2,
  //   title: "Aquila fortis",
  //   tags: ["Angular", "Arduino", "MySQL", "Java"],
  //   desc: "Real time monitored innovative transportation system for blood products, organs and biological materials",
  //   url: "https://github.com/ruben69695/aquilafortis",
  // },
  // { id: 3, title: "Hungry crossing", tags: ["Java", "MySQL", "PHP"], desc: "Android application to search for restaurants", url: "https://github.com/carlosvalv/android_hungrycrossing" },

  {
    id: 4,
    title: "Classgap",
    tags: ["Html", "CSS", "Typescript", ".Net", "MongoDB"],
    desc: "Online tutor marketplace",
    url: "https://www.classgap.com",
    img: "classgap.png",
  },
  // {
  //   id: 5,
  //   title: "Classgap for enterprise",
  //   tags: ["React", "Javascript", ".Net", "MongoDB"],
  //   desc: "Online classes for companies",
  //   url: "https://enterprise.classgap.com",
  // },
  {
    id: 6,
    title: "Tusclasesparticulares",
    tags: ["SQL", "Javascript", ".Net", "MongoDB"],
    desc: "The largest tutoring search portal in Spain",
    url: "https://www.tusclasesparticulares.com",
    img: "tusclasesparticulares.png",
  },
  {
    id: 1,
    title: "My own website",
    tags: ["React", "CSS", "Typescript"],
    desc: "This is my personal portfolio, where I showcase my work and projects",
    url: "https://github.com/carlosvalv/carlosfolio",
    img: "carlosfolio.png",
  },
];

export function Work() {
  const isLandscapeMobile = useContext(isLandscapeMobileContext);
  const sliderRef = useRef<any>(null);

  const slides = items.map((item) => (
    <Card
      key={item.id}
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
    slidesToShow: 1,
    slidesToScroll: 1,
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
          slidesToShow: 1,
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
