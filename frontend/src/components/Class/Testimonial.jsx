/* eslint-disable react/prop-types */
import classes from "./Testimonial.module.css";

const renderStars = (rating) => {
  const filledStars = Math.floor(rating);
  const partialStar = rating - filledStars; 

  const starElements = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      starElements.push(
        <span key={i} className={classes["star-icon-filled"]}>
          &#9733;
        </span>
      );
    } else if (i === filledStars) {
      starElements.push(
        <span key={i} className={classes["star-icon-half-filled"]}>
          &#9733;
        </span>
      );
    } else {
      starElements.push(
        <span key={i} className={classes["star-icon"]}>
          &#9733;
        </span>
      );
    }
  }

  return starElements;
};

const Testimonial = ({ trainer }) => {
  const testimonials = trainer.testimonials;

  return (
    <>
    <div className={classes.mainContainer}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={classes.testContainer}>
          <div className={classes.containerInfo}>
            <div className={classes.authorInfo}>
              <img
                src={testimonial.authorImage}
                alt={testimonial.author}
                className={classes.authorIMG}
              />
              <p className={classes.authorName}>{testimonial.author}</p>
            </div>
            <div className={classes.authorText}>
              <p>{testimonial.text}</p>
            </div>
            <div className={classes.starRating}>{renderStars(testimonial.rating)}</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Testimonial;
