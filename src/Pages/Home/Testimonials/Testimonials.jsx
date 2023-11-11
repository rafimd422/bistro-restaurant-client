import { useEffect, useState } from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewImg from "../../../assets/Review/review.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((res) => setReviews(res.data));
  }, []);

  return (
    <section className="my-20 mx-2">
      <SectionTitle
        subHeading={"What Our client Say"}
        heading={"Testimonials"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-32 flex flex-col items-center gap-4">
              <Rating
                style={{ maxWidth: 340 }}
                value={review.rating}
                readonly
              />

              <img src={reviewImg} alt="" />

              <p className=" lg:mx-24 py-4">{review.details}</p>
              <h3 className="text-2xl text-yellow-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
