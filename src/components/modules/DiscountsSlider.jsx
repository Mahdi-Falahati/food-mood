import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { RiLinksFill } from "react-icons/ri";
import { Images } from "../constant/Images";

export default function DiscountsSlider({ data }) {
  console.log(Images);
  return (
    <div className="w-[260px] md:w-[380px] mb-20">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"cube"}
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item, i) => {
          return (
            <>
              <SwiperSlide key={i}>
                <div className="relative">
                  <img src={Images[item.id - 1]} className="rounded-2xl" />
                  <div
                    className="text-white absolute top-0 z-10 px-2 py-3 left-0 right-0 rounded-t-2xl font-semibold tracking-wider"
                    style={{ background: "#00000085" }}
                  >
                    <div className="flex justify-around flex-wrap items-center">
                      <h2 className="text-xl inline-block my-1">{item.name}</h2>
                      <span className="text-white my-1 bg-red-600 py-1 px-2 rounded-md">
                        {item.discount} %
                      </span>
                    </div>
                    <Link
                      to={`/menu/${item.id}`}
                      className="hover:scale-105 underline flex justify-center items-center font-semibold tracking-wider  mt-2 py-1"
                    >
                      <RiLinksFill className="mr-2 text-xl" />
                      See More Details
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}
