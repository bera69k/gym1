import Class from "../components/Class";
import classes from '../components/Class.module.css'
import david1 from '../assets/david1.jpg'
import dorian from '../assets/dorian.jpg'
import ronnie from '../assets/ronnie.png'
import mike from '../assets/mike.webp'
import tom from '../assets/tom.jpg'
import kevin1 from '../assets/kevin1.jpg'
import chris from '../assets/chris.png'
import tt from '../assets/tt.jpg'
import frank from '../assets/frank.webp'
import jay from '../assets/jay.jpg'
const Classes = () => {
  const trainers = [
    {
      num: "Dorian Yates",
      img:dorian
    },
    {
      num: "David Goggins",
      img: david1
    },
    {
      num: " Ronnie Coleman",
      img: ronnie
    },
    {
      num: "Mike Mentzer",
      img: mike
    },
    {
      num: "Tom Platz",
      img: tom
    },
    {
      num: "Kevin Levrone",
      img: kevin1
    },
    {
      num: "Chris Bumstead",
      img:chris
    },
    { num: "David Laid" },
    {
      num: "Tren Twins",
      
    },
    { num: "Frank Zane",
      img: frank
  },
    {
      num: "Jay Cutler",
      img: jay
    },
    { num: "Flex Wheeler" },
    {
      num: "Larry Scott",
    },
    { num: "Arnold Schwarzenegger" },
  ];
  return (
    <>
      <div className={classes.grid}>
        {trainers.map((trainer) => {
          return <Class key={trainer.num} trainerName={trainer.num} image={trainer.img}/>;
        })}
      </div>
    </>
  );
};

export default Classes;
