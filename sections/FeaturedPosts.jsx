import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";
import "swiper/css";
const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);
  const detectSize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWidth]);
  useEffect(() => {
    if (windowWidth <= 640) {
      setSlides(1);
    } else if (windowWidth <= 768 && windowWidth > 640) {
      setSlides(2);
    } else if (windowWidth <= 1024 && windowWidth > 768) {
      setSlides(3);
    }
  }, [windowWidth]);

  return (
    <>
      {/* <div className="mb-8 border-b border-black-500"> */}
      <Swiper spaceBetween={20} slidesPerView={slides} className="flex w-full">
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <FeaturedPostCard post={post} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
  {
    /* </div> */
  }
};

export default FeaturedPosts;
