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
            className="absolute right-4 top-1/2"
          >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
          </button>
        </div>
      </div>
    </>

    /**
     * .hamburger {
    display: block;
    width: 35px;
    cursor: pointer;
    appearance: none;
    background: none;
    outline: none;
    border: none;
    position: absolute;
    right: 20px;
    top: 28px;

}

.hamburger .bar, .hamburger::after, .hamburger::before{
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background-color: #fff;
    margin: 6px 0px;
    transition: 0.4s;
    border-radius: 10px;
}
     */
  );
};

export default Arrows;
