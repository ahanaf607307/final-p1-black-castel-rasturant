import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitle";
function Reviews() {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/reviews");
    setReview(data);
  };
  return (
    <div>
      <section>
        <SectionTitle
          heading={"---What Our Clients Say---"}
          title={"TESTIMONIALS"}
          color={"text-orange-500"}
          headingColor={"text-gray-500"}
        />
      </section>
      <section className="border-2 border-gray-500 rounded-xl pt-10 px-20 my-5">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          centeredSlides={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review?._id} className="pb-10 flex flex-col justify-center items-center text-center">
              <section className="text-center flex flex-col justify-center items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating}  readOnly />
              </section>
             <section className="flex flex-col justify-center items-center my-5">
             <h1 className=" text-5xl font-bold"><FaQuoteLeft /></h1>
             </section>
              <h1 className="text-3xl font-semibold text-orange-600 my-2">
                {review.name}
              </h1>
              <p className="text-sm text-gray-500 px-20">{review.details}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Reviews;
