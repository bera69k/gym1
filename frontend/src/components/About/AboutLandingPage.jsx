/* eslint-disable no-unused-vars */
import classes from "./AboutLandingPage.module.css";
import { useNavigate } from "react-router";
import { trainers } from "../Trainers";
import { Link } from "react-router-dom";
import LocationAbout from "./LocationAbout";
import { useState, useRef, useEffect } from "react";

const AboutDetail = () => {
  const [isHovering, setIsHovering] = useState();
  const [hoveredTrainer, setHoveredTrainer] = useState(null);
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
      <div className="h-full m-0 bg-zinc-950 -md:w-full   ">
        <section  className=" text-white bg-zinc-950 -md:h-fit">
          <div className={classes.gradient}></div>
          <div className={classes.gradient2}></div>
          <div>
            <h1 className={classes.title}>ACHILLES</h1>
          </div>
          <div className="grid grid-cols-2 -md:grid -md:grid-cols-1 -md:grid-rows-1 -xl:grid -xl:grid-cols-1 -xl:grid-rows-1   -2xl:grid -2xl:grid-cols-1 -2xl:grid-rows-1">
            <div className="block z-50 ">
              <p className={classes.desc}>
                Welcome to Achilles Gym. You can find best trainers with history
                of winning in their background ready to teach you all their
                secrets to make you one of the best competitors in the future!
              </p>
              <div className="m-auto text-center mt-12">
             <Link to='location'> <button className={classes.location}>Location</button></Link>
              </div>
            </div>
            <div className="">
              <h1 className={classes.trainerHeader}>Check Out our Trainers</h1>
              <div className={classes.AboutTrainer}>
                {randomTrainerIds.map((trainerId) => {
                  const trainer = trainers.find(
                    (trainer) => trainer.id === trainerId
                  );
                  return (
                    <>
                    <div className={classes.wtf}>
                      <Link
                        to={`/classes/${trainerId}`}
                        className={classes.linkImg}
                        key={trainerId}
                      >
                        <div
                          onMouseEnter={() => setHoveredTrainer(trainerId)}
                          onMouseLeave={() => setHoveredTrainer(null)}
                          className={classes.trainerImg}
                          style={{
                            backgroundImage: `url(${
                              trainers.find(
                                (trainer) => trainer.id === trainerId
                              ).img
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          alt={`Trainer ${trainerId}`}
                        >
                          {hoveredTrainer === trainerId && (
                            <div className={classes.trainerName}>
                              {trainer.num}
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>
                    </>
                  );
                })}
              </div>
              <div className="-md:hidden"></div>
              <div className={classes.buttonDiv}>
                <Link to='/classes'><button className={classes.btn}>Enroll Now!</button></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-zinc-950">
                <LocationAbout/>
      </div>
    </>
  );
};

export default AboutDetail;
