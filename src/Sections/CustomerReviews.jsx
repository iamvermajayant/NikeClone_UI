import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../Constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        What our <span className="text-coral-red">Customers</span> say?
      </h3>
      <p className="info-text m-auto text-center max-w-lg mt-4">
        Hear genuine story from our satisfied customers about thier exceptional
        experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard 
            key={review.customerName}
            imgURL = {review.imgURL}
            customerName= {review.customerName}
            feedback= {review.feedback}
            rating= {review.rating}
          >
            {review}
          </ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
