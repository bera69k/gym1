import classes from "./Class.module.css";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Class = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { trainerName, image,id } = props;

  const hoverHandler=()=> {
    setIsHovering(true);
  }
  const unHoverHandler = () => {
    setIsHovering(false);
  };

  return (
    <div className={classes.main}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={classes.box}
        onMouseOver={hoverHandler}
        onMouseOut={unHoverHandler}
      >
        {isHovering && (
          <div>
            <h1 className="text-white text-2xl">{trainerName}</h1>
            <Link to={`/classes/${id}`}>
            <button className={classes.button}>
              
              Check Out
              
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Class;
