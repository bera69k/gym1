import { useState } from "react";
import { useParams } from "react-router-dom";
import { trainers } from "../../components/Trainers";
import styles from "./ClassHelper.module.css";
import ReactPlayer from "react-player";
import Testimonial from "./Testimonial";
import Arrows from "./Arrows";
const ClassHelper = () => {
  const { id } = useParams();
  const trainer = trainers.find((trainer) => trainer.id === Number(id));

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [showThumbnail, setShowThumbnail] = useState(false);

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

  if (!trainer) {
    return <div>Trainer not found</div>;
  }
  return (
    <>
      <div className={styles["class-helper-container"]}>
        <Arrows id={id}/>
        <div className="absolute w-96 h-64 m-auto text-center top-36 left-1/2 -translate-x-1/2 bg-black blur-3xl opacity-60"><span></span></div>
        {/* Trainer Information Section */}
        <div className={styles["trainer-info-section"]}>
          <div className={styles["trainer-info"]}>
            <img src={trainer.img} alt={trainer.num} className={styles.imgs} />
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
            <button className={styles.button}>Enroll in the Class</button>
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
      <div className="absolute w-screen h-64 m-auto text-center -bottom-56  bg-black blur-3xl "><span></span></div>
      <div>
        <Testimonial trainer={trainer} />
      </div>
    </>
  );
};

export default ClassHelper;
