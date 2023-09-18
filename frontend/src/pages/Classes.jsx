import Class from "../components/Class/Class";
import classes from "../components/Class/Class.module.css";
import { trainers } from "../components/Trainers";
import { useState,useEffect } from "react";
const Classes = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });


  const updateCursorPosition = (e) => {
    setCursorPosition({ left: e.clientX, top: e.clientY });
  };

  useEffect(() => {

    document.addEventListener('mousemove', updateCursorPosition);


    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
    <div className={classes.bg}>
      <div className={classes.grid}>
      <div className={classes.abs}  style={{ left: cursorPosition.left, top: cursorPosition.top }}></div>
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
