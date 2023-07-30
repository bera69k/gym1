import { useState } from "react";
import { useParams } from "react-router-dom";
import { trainers } from "../components/Trainers";
import styles from "./ClassHelper.module.css";
import ReactPlayer from "react-player";
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
    setTimeout(() => setShowThumbnail(false), 1000); 
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
    <div className={styles["trainer-detail-container"]}>
      <div className={styles["trainer-info"]}>
        <img src={trainer.img} alt={trainer.num} />
        <h1>{trainer.num}</h1>
        <p>Price for the course: ${trainer.price}</p>
        <button>Enroll in the Class</button>
      </div>

      <div className={styles.exercises}>
        <h2>Exercises for Building Muscle:</h2>
        <ul>
        {trainer.exercises.map((exercise, index) => (
            <li
              key={index}
              className={styles["exercise-item"]}
              onMouseEnter={() => handleMouseEnter(exercise.video)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleVideoThumbnailClick(exercise.video)}
            >
              <span>{exercise.name}</span>
              <div
                className={`${styles["video-thumbnail-container"]} ${showThumbnail && hoveredVideo === exercise.video && "hover-visible"}`}
                style={{ backgroundImage: `url(${exercise.thumbnail})` }}
              >
              </div>
            </li>
          ))}
        </ul>
      </div>

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
  );
};

export default ClassHelper;
