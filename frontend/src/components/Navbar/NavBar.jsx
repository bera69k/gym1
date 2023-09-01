import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../../../context/userContext";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`/profile/${user.name}`);
  };

  return (
    <>
      <div className="bg-black relative flex drop-shadow-xl font-oswald m-0 h-23 font-medium w-screen">
        <Link to="/" className="absolute  ">
          <img
            src={logo}
            className="relative w-20 h-20 ml-4 cursor-pointer animate-left -delay-600 mt-2 justify-center"
          />
        </Link>

        <ul className="flex   gap-4 m-auto text-white text-xl uppercase pl-0 hover:font-medium -md:hidden ">
          <li className="">
            <NavLink
              to=""
              className="text-white aria-[current=page]:text-[red] hover:text-[red]"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="text-white aria-[current=page]:text-[red] hover:text-[red]"
              end
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="classes"
              className="text-white aria-[current=page]:text-[red] hover:text-[red]"
              end
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="gallery"
              className="text-white aria-[current=page]:text-[red] hover:text-[red]"
              end
            >
              Gallery
            </NavLink>
          </li>
        </ul>

        {user && (
          <svg
            onClick={redirectHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-10 mt-7 text-white cursor-pointer -md:hidden  hover:text-[red] aria-[current=page]:text-[red]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        )}
      </div>
      <MobileNav
        redirect={redirectHandler}
      />
    </>
  );
};

export default NavBar;
