import React, { useEffect } from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css"

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Review = () => {
  const [review, setreview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, []);
  return (
    <>
      <div className="w-max text-center  mx-auto my-10">
        <h2 className="text-4xl text-amber-400 pb-2">
          ---what our client says---
        </h2>
        <h2 className="uppercase text-5xl  border-y-4 py-3">testimoniials</h2>
      </div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {review.map((view) => (
          <SwiperSlide>
            <div className="mx-20 flex flex-col items-center gap-5 mb-10">
              <Rating 
                value={view.rating}
                style={{ maxWidth: 200 }}
                readonly
              />
              <p className="text-center">{view.details}</p>
              <h2 className="text-center text-2xl text-amber-400">
                {view.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
