import { Link } from "react-router-dom";
import "./Footer.css";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" ? (
        <footer className="bg-black  grid grid-cols-4  h-48 text-center text-white  inset-x-0 bottom-0 mt-auto z-10">
          <div className=" m-auto">
            <h1 className="uppercase text-3xl text-white">
              work harder with us
            </h1>
            <p className="uppercase text-xl">Biggest industry in our region</p>
            <p className="uppercase">Achilles Gym &reg;</p>
          </div>
          <div className="m-auto">
            <h1 className="text-3xl uppercase ">Get in touch</h1>
            <p className="my-2 underline hover:cursor-pointer">
              placeholder@placeholder.com
            </p>
            <p className="underline hover:cursor-pointer">
              placeholder@placeholder.com
            </p>
          </div>
          <div className="m-auto">
            <ul className="ul">
              <li className="li">
                <Link className="a facebook">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="li">
                <Link className="a twitter">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="li">
                <Link className="a instagram">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="li">
                <Link className="a google">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>liTest</li>
              <li>liTest</li>
              <li>liTest</li>
              <li>liTest</li>
            </ul>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
