import { useContext, useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { trainers } from "../../components/Trainers";
import styles from "./ClassHelper.module.css";
import ReactPlayer from "react-player";
import Testimonial from "./Testimonial";
import Arrows from "./Arrows";
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import toast from "react-hot-toast";
import Footer from "../Footer/Footer2";
import PointDown from "./PointDown";
const ClassHelper = () => {
  const { id } = useParams();
  const trainer = trainers.find((trainer) => trainer.id === Number(id));
  const { user } = useContext(UserContext);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [showThumbnail, setShowThumbnail] = useState(false);
  const [visible, setVisible] = useState(true);

  const [enrollmentData, setEnrollmentData] = useState({
    userId: user ? user.id : null,
    trainerName: trainer.num,
    price: trainer.price,
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });
  const ref = useRef(null);

  useEffect(() => {
    if (user && trainer) {
      setEnrollmentData({
        userId: user.id,
        trainerName: trainer.num,
        price: trainer.price,
      });
    }
  }, [user, trainer]);

  const handleMouseEnter = (video) => {
    setHoveredVideo(video);
    setShowThumbnail(true);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  const handleVideoThumbnailClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  const scrollHandler = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(false);
    } else if (scrolled <= 500 || scrolled === 0) {
      setVisible(true);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  if (!trainer) {
    return <div>Trainer not found</div>;
  }
  const enrollInClass = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/enroll",
        enrollmentData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data.message);
      toast.success("SUCCESSFULLY ENROLLED 🎉");
    } catch (error) {
      if (error.response) {
        if (error.response.data.error === "Already enrolled") {
          toast.error("YOU'RE ALREADY ENROLLED! 🙅‍♂️");
        } else if (error.response.data.error === "Enrollment limit reached") {
          toast.error("You've reached the maximum number of enrollments.🙅‍♂️");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className={styles["class-helper-container"]}>
        <Arrows id={id} />
        <div className="absolute w-96 h-64 m-auto text-center top-36 left-1/2 -translate-x-1/2 bg-black blur-3xl opacity-60">
          <span></span>
        </div>
        {/* Trainer Information Section */}
        <div className={styles["trainer-info-section"]}>
          <div className={styles["trainer-info"]}>
            <figure className={styles.imageContainer}>
            <img src={trainer.img} alt={trainer.num} className={styles.imgs} />
              <div className={styles.overview}>
                {trainer.courseOverview.map((course, index) => (
                    <figcaption key={index} className={styles.overviewText}>{course}</figcaption>
                  ))}
              </div>
            </figure>
            <h1>{trainer.num}</h1>
            <p>Price for the course: ${trainer.price}</p>
            
          </div>
          <div className={styles.exercises}>
            <ul>
              {trainer.exercises.map((exercise, index) => (
                <li
                  key={index}
                  className={styles["exercise-item"]}
                  onMouseEnter={() => handleMouseEnter(exercise.video)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleVideoThumbnailClick(exercise.video)}
                >
                  {exercise.name}
                  <div
                    className={`${styles["video-thumbnail-container"]} ${
                      showThumbnail &&
                      hoveredVideo === exercise.video &&
                      styles["hover-visible"]
                    }`}
                    style={{ backgroundImage: `url(${exercise.thumbnail})` }}
                  ></div>
                </li>
              ))}
            </ul>
            <p className={styles.desc}>
              Enroll in the class to see the rest of the program
            </p>
            {user ? (
              <button className={styles.button} onClick={enrollInClass}>
                Enroll in the Class
              </button>
            ) : (<>
              <p>Please log in to enroll and access the full program.</p>
              <Link to='/login'><button className={styles.log}>Join Us</button></Link>
              </>
            )}
          </div>
        </div>
        {/* Video Modal */}
        {selectedVideo && (
          <div className={styles["modal-overlay"]} onClick={handleCloseModal}>
            <div className={styles["video-modal"]}>
              <div className={styles["video-player-wrapper"]}>
                <ReactPlayer url={selectedVideo} controls playing />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute w-screen h-64 m-auto text-center -bottom-56  bg-black blur-3xl  -mid:-bottom-[620px] ">
        <span></span>
      </div>
      <PointDown scrollHandler={scrollHandler} visible={visible} />
      <div ref={ref}>
        <Testimonial trainer={trainer} />
        <h1 className="text-slate-600 ">
          {trainer.courseOverview.map((course, index) => {
            <div key={index}>{course}</div>;
          })}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default ClassHelper;
