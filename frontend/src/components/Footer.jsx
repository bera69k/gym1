import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  return (
    <>
      <footer className="bg-black  grid grid-cols-4  h-48 text-center text-white  inset-x-0 bottom-0 mt-auto z-10">
        <div className=" m-auto">
          <h1 className="uppercase text-3xl text-white">work harder with us</h1>
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
        <div className="inline-flex gap-4 text-3xl text-center m-auto  ">
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="mr-4 cursor-pointer">
           {!isHovering ? <AiOutlineInstagram /> : <AiFillInstagram/>}
           <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} className="mr-4 cursor-pointer">
          {!isHovering1 ? <AiOutlineFacebook /> : <AiFillFacebook/>}
          <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} className="mr-4 cursor-pointer">
          {!isHovering2 ? <AiOutlineTwitter /> : <AiOutlineTwitter className=""/>}
          <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
          {!isHovering3 ? <AiOutlineLinkedin /> : <AiFillLinkedin/>}
          <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
    </>
  );
};

export default Footer;
