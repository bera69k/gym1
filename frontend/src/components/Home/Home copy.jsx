import hero from "../../assets/hero.png";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const HomeS = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className={classes.main}>
        <div className={classes.abs}></div>
        <div className={classes.submain}>
            <div className={classes.imageWrapper}>
              <img src={hero} className={classes.heroImage} />
            </div>
          <div className={classes.headerText}>
            <h1 className={classes.h1}>TRAIN WITH</h1>
            <span className={classes.htext}>
              <h2 className={classes.us}>US</h2>
            </span>
            <p className={classes.text}>
              Professionals in their own area of expretise ready to teach you
              how to be one of the best.
            </p>
            <div className={classes.link}>
              {user ? (   
                    <div className={classes.btnCont}>
                    <Link to='/classes' >
                    <button className={classes.butEnr}>ENROLL</button>
                    </Link>
                    <Link to={`/profile/${user.name}`}>
                    <button className={classes.button}>PROFILE</button>
                    </Link>
                    </div>            
              ) : (
                <Link to="/login" className={classes.link}>
                    <button className={classes.button}>JOIN US</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeS;
