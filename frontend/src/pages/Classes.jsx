import Class from "../components/Class/Class";
import classes from "../components/Class/Class.module.css";
import { trainers } from "../components/Trainers";
import { useState,useEffect } from "react";
const Classes = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [isFollowing, setIsFollowing] = useState(false);
  let timeoutId;

  const updateCursorPosition = (e) => {
    setCursorPosition({ left: e.clientX, top: e.clientY });

    // Clear the existing timeout
    clearTimeout(timeoutId);

    // Set a new timeout to start following after 300ms
    timeoutId = setTimeout(() => {
      setIsFollowing(true);
    }, 300);
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
    <div className={classes.bg}>
      <div className={classes.grid}>
        <div
          className={`${classes.abs} ${isFollowing ? classes.following : ""}`}
          style={{
            left: cursorPosition.left,
            top: cursorPosition.top,
            transition: "left 0.3s ease, top 0.3s ease"
          }}
        ></div>
        {trainers.map((trainer) => {
          return (
            <Class
              id={trainer.id}
              key={trainer.id}
              trainerName={trainer.num}
              image={trainer.img}
            />
          );
        })}
      </div>
    </div>
  </>
  );
};

export default Classes;
