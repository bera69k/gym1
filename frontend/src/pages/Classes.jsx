import Class from "../components/Class/Class";
import classes from "../components/Class/Class.module.css";
import { trainers } from "../components/Trainers";
const Classes = () => {

  return (
    <>
    <div   className={classes.bg}>
      <div className={classes.grid}>
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
