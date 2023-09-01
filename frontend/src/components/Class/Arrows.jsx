/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import classes from './Arrows.module.css'
const Arrows = ({ id }) => {
  const navigate = useNavigate();

  const PrevPageHandler = () => {
    const prevPageID = Number(id) - 1;
    navigate(`/classes/${prevPageID}`);
    if (prevPageID < 1) {
      navigate("/classes/14");
    }
  };
  const NextPageHandler = () => {
    const prevPageID = Number(id) + 1;
    navigate(`/classes/${prevPageID}`);
    if (prevPageID > 14) {
      navigate("/classes/1");
    }
  };

  return (
    <>
      <div>
        <div onClick={PrevPageHandler} className={classes.father}>
          <button onClick={PrevPageHandler} className={classes.hamb}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
          </button>
        </div>
        <div>
          <button
            onClick={NextPageHandler}
            className={classes.hamb2}
          >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Arrows;
