import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-black  grid w-screen grid-cols-3  h-48 text-center text-white  bottom-0 max-[600px]:grid max-[600px]:grid-rows-3  max-[600px]:grid-cols-1 max-[600px]:h-screen ">
        <div className=" m-auto">
          <h1 className="uppercase text-3xl text-white">work harder with us</h1>
          <p className="uppercase text-xl">Biggest industry in our region</p>
          <p className="uppercase">Achilles Gym &reg;</p>
        </div>
        <div className="m-auto max-[600px]:-mt-6">
          <h1 className="text-3xl uppercase ">Get in touch</h1>
          <p className="my-2 underline hover:cursor-pointer">
            placeholder@placeholder.com
          </p>
          <p className="underline hover:cursor-pointer">
            placeholder@placeholder.com
          </p>
        </div>
        <div className="links">
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
      </footer>
    </>
  );
};

export default Footer;