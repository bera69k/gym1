import classes from "./Class.module.css";
import { useState } from "react";
const Class = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { trainerName, image } = props;

  const hoverHandler = () => {
    setIsHovering(true);
  };
  const unHoverHandler = () => {
    setIsHovering(false);
  };

  return (
    <div className="text-center">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={classes.box}
        onMouseOver={hoverHandler}
        onMouseOut={unHoverHandler}
      >
        {isHovering ? (
          <div>
            <h1 className="text-white text-2xl">{trainerName}</h1>
            <button className="p-4 border-2 text-white m-auto hover:bg-black hover:text-white hover:ease-in hover:duration-300 hover:border-black mt-48">
              Check Out
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Class;
