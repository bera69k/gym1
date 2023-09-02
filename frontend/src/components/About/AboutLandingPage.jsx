/* eslint-disable no-unused-vars */
import classes from "./AboutLandingPage.module.css";
import { useNavigate } from "react-router";
import { trainers } from "../Trainers";
import { useState } from "react";
import { Link } from "react-router-dom";
import Testimonial from "../Class/Testimonial";
const AboutDetail = () => {
  const [isHovering, setIsHovering] = useState();
  const hoverHandler = () => {
    setIsHovering(true);
  };
  const unHoverHandler = () => {
    setIsHovering(false);
  };
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate("location");
  };

  const getRandomTrainerIds = () => {
    const trainerIds = trainers.map((trainer) => trainer.id);
    const randomIds = [];

    while (randomIds.length < 3) {
      const randomIndex = Math.floor(Math.random() * trainerIds.length);
      const randomId = trainerIds[randomIndex];

      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }

    return randomIds;
  };

  const [randomTrainerIds, setRandomTrainerIds] = useState(
    getRandomTrainerIds()
  );

  return (
    <>
      <div className="h-screen m-0 bg-zinc-950">
        <section className=" text-white">
          <div className={classes.gradient}></div>
          <h1 className={classes.title}>About Our Gym</h1>
          <div className="grid grid-cols-2 h-98 mt-12">
            <div>
              <p className={classes.desc}>
                Welcome to Achilles Gym. You can find best trainers with history
                of winning in their background ready to teach you all their
                secrets to make you one of the best competitors in the future!
              </p>
            </div>
            <div>
              <h1 className="text-5xl m-auto text-center mb-12 ">
                Check Out our Trainers
              </h1>

              <div
                className={classes.AboutTrainer}
                onMouseEnter={hoverHandler}
                onMouseLeave={unHoverHandler}
              >
                {randomTrainerIds.map((trainerId) => (
                  <Link
                    to={`/classes/${trainerId}`}
                    className={classes.linkImg}
                    key={trainerId}
                  >
                    <div
                      className={classes.trainerImg}
                      style={{
                        backgroundImage: `url(${
                          trainers.find((trainer) => trainer.id === trainerId)
                            .img
                        })`,
                        backgroundSize: "cover", // Adjust as needed
                        backgroundPosition: "center", // Adjust as needed
                      }}
                      alt={`Trainer ${trainerId}`}
                    >
                      {isHovering && (<>
                        <p>{}</p>
                      </>)}
                    </div>
                  </Link>
                ))}
              </div>
              <div></div>
              <div className={classes.buttonDiv}>
                <buton className={classes.btn}>Enroll Now!</buton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;
