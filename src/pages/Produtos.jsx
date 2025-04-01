import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../styles/Produtos.css";

const products = [
  { id: 1, name: "Creme de Cupuaçú", image: "/produtos/pote-1.png" },
  { id: 2, name: "Açai com Leitinho", image: "/produtos/pote-2.png" },
  { id: 3, name: "Açai com Morango", image: "/produtos/pode-3.png" },
  { id: 4, name: "Açai Tradicional",  image: "/produtos/pote-4.png" },
];

function Produtos() {
  return (
    <section className="packaged-products-section" id="produtos">
      <div className="packaged-products-header">
        <h1>NOSSOS <br /> PRODUTOS</h1>
        <p className="subtitle-product">Compre em atacado!</p>
      </div>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        speed={1000}
        loop={true}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        className="swiper-container-custom"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-item-custom">
              <img src={product.image} alt={product.name} className="product-image-custom" />
              <div className="product-text">
                <h3 className="product-name-custom">{product.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Produtos;
