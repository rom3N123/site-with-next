import React from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";
import Img1 from "../../imagesGallery/photo1.png";
import Img2 from "../../imagesGallery/photo2.png";
import Img3 from "../../imagesGallery/photo3.png";
import Img4 from "../../imagesGallery/photo4.png";
import Img5 from "../../imagesGallery/photo5.png";
import Img6 from "../../imagesGallery/photo6.png";
import Img7 from "../../imagesGallery/photo7.png";
import Img8 from "../../imagesGallery/photo8.png";
import Img9 from "../../imagesGallery/photo9.png";
import Img10 from "../../imagesGallery/photo10.png";
import Img11 from "../../imagesGallery/photo11.png";
import Img12 from "../../imagesGallery/photo12.png";
import Img13 from "../../imagesGallery/photo13.png";
import Img14 from "../../imagesGallery/photo14.png";
import Img15 from "../../imagesGallery/photo15.png";
import Img16 from "../../imagesGallery/photo16.png";
import Img17 from "../../imagesGallery/photo17.png";
import Img18 from "../../imagesGallery/photo18.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

const images = [
  [Img1, Img2, Img3, Img4, Img5, Img6],
  [Img7, Img8, Img9, Img10, Img11, Img12],
  [Img13, Img14, Img15, Img16, Img17, Img18],
];

const Gallery = () => {
  return (
    <div id="gallery" className={styles.gallery}>
      <div className="container">
        <h1 className={styles.gallery__heading}>Галерея</h1>
        <div>
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: function(index, className) {
                return (
                  '<span class="' + className + '">' + (index + 1) + "</span>"
                );
              },
            }}
            modules={[Grid, Pagination]}
          >
            {images.map((pageImages, index) => {
              return (
                <SwiperSlide key={index}>
                  {pageImages.map((src) => {
                    return <Image src={src} key={src} alt="Изображение галереи" />;
                  })}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.link__bar}></div>
      </div>
    </div>
  );
};
export default Gallery;
