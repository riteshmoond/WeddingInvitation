import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../assets/eng1.jpg";
import img2 from "../assets/eng2.jpg";


const EngagementSliderSidebar = () => {
  return (
    <div className="bg-[#141414] border border-[#C8A951]/40 rounded-2xl p-4 shadow-xl">

      {/* Title */}
      <h4 className="text-center text-sm tracking-widest uppercase text-[#C8A951] mb-4">
        Engagement Moments
      </h4>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop
        slidesPerView={1}
        spaceBetween={16}
        className="w-full"
      >
        {[img1, img2,].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="Engagement"
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EngagementSliderSidebar;
