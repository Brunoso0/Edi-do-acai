import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Produtos.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return <button className="custom-arrow left-arrow" onClick={onClick}>❮</button>;
};

const CustomRightArrow = ({ onClick }) => {
  return <button className="custom-arrow right-arrow" onClick={onClick}>❯</button>;
};

function Produtos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    { id: 1, img: "/produtos/pote-1.png", name: "Produto 1", desc: "Descrição do produto 1." },
    { id: 2, img: "/produtos/pote-2.png", name: "Produto 2", desc: "Descrição do produto 2." },
    { id: 3, img: "/produtos/pode-3.png", name: "Produto 3", desc: "Descrição do produto 3." },
    { id: 4, img: "/produtos/pote-4.png", name: "Produto 4", desc: "Descrição do produto 4." },
    { id: 5, img: "/produtos/pote-5.png", name: "Produto 5", desc: "Descrição do produto 5." }
  ];

  return (
    <div className="produtos-container">
      <h1>Nossos <br /> Produtos</h1>
      <p>Compre em atacado!</p>
      <div className="carousel-wrapper">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 0.8s ease-in-out"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px animated-carousel-item"
          beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {products.map((product, index) => (
            <div key={product.id} className={`carousel-item ${index === currentSlide ? "active" : "inactive"}`}>
              <img src={product.img} alt={product.name} />
              <div className={`carousel-content ${index === currentSlide ? "show" : "hide"}`}>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <button>Comprar</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Produtos;
