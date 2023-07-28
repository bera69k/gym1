import Class from "../components/Class";
import classes from "../components/Class.module.css";
import david1 from "../assets/david1.jpg";
import dorian from "../assets/dorian.jpg";
import ronnie from "../assets/ronnie.png";
import mike from "../assets/mike.webp";
import tom from "../assets/tom.jpg";
import kevin1 from "../assets/kevin1.jpg";
import chris from "../assets/chris.png";
import frank from "../assets/frank.webp";
import jay from "../assets/jay.jpg";
import flex from "../assets/flex.jpg";
import larry from "../assets/larry.jpg";
import arnold from "../assets/arnold.webp";
import mikeohearn from "../assets/mikeohearn.jpg";
import calum from "../assets/calum.jpg";

const Classes = () => {
  const trainers = [
    { id: 1, num: "Dorian Yates", img: dorian },
    { id: 2, num: "David Goggins", img: david1 },
    { id: 3, num: " Ronnie Coleman", img: ronnie },
    { id: 4, num: "Mike Mentzer", img: mike },
    { id: 5, num: "Tom Platz", img: tom },
    { id: 6, num: "Kevin Levrone", img: kevin1 },
    { id: 7, num: "Chris Bumstead", img: chris },
    { id: 8, num: "Mike O'Hearn", img: mikeohearn },
    { id: 9, num: "Calum Von Moger", img: calum },
    { id: 10, num: "Frank Zane", img: frank },
    { id: 11, num: "Jay Cutler", img: jay },
    { id: 12, num: "Flex Wheeler", img: flex },
    { id: 13, num: "Larry Scott", img: larry },
    { id: 14, num: "Arnold Schwarzenegger", img: arnold },
  ];
  return (
    <>
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
    </>
  );
};

export default Classes;
