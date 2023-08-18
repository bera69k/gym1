import { useContext } from "react";
import classes from "./Hamburger.module.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
// eslint-disable-next-line react/prop-types
const MobileNav = ({ onClick, isActive, redirect }) => {
  const { user } = useContext(UserContext);

  return (
    <><div className="text-2xl">
      <div className={classes.hambContainer}>
        <button
          className={`${classes.hamburger} ${
            isActive ? classes["is-active"] : ""
          }`}
          onClick={onClick}
        >
          <div className={classes.bar}></div>
        </button>
      </div>
      <nav
        className={`${classes.nav}  ${isActive ? classes["is-active"] : ""}`}
      >
        <NavLink className={classes.navLink} to='/about'  onClick={onClick}>About</NavLink>
        <NavLink className={classes.navLink}to='/classes' onClick={onClick}>Classes</NavLink>
        <NavLink className={classes.navLink}to='/gallery' onClick={onClick}>Gallery</NavLink>
        {!user ? (
          <button className=" h-12  absolute  bottom-28 right-4">Log In</button>
        ) : (
          <div className="absolute right-4 bottom-32 inline-flex">
            <h1 className="uppercase mr-4 ">{user.name}</h1>
            <svg
              onClick={redirect}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        )}
      </nav>
      </div>
    </>
  );
};

export default MobileNav;
