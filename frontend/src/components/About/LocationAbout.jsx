import "./LocationAbout.css";
import { useState, useRef, useEffect } from "react";
import arnold from "../../assets/aboutpic3.png";
import test from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import {Link} from 'react-router-dom'
const LocationAbout = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold:0.5 }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div.hid").forEach((el) => {
        el.classList.add("show");
      });
      ref.current.querySelectorAll("img.test").forEach((el) => {
        el.classList.add("showers");
      });
      ref.current.querySelectorAll("img.test1").forEach((el) => {
        el.classList.add("showers1");
      });
      ref.current.querySelectorAll("img.test3").forEach((el) => {
        el.classList.add("showers2");
      });
      ref.current.querySelectorAll("div.text").forEach((el) => {
        el.classList.add("showw");
      });
      ref.current.querySelectorAll("div.para").forEach((el) => {
        el.classList.add("showww");
      });
    } else {

      ref.current.querySelectorAll("img.test").forEach((el) => {
        el.classList.remove("showers");
      });
      ref.current.querySelectorAll("img.test1").forEach((el) => {
        el.classList.remove("showers1");
      });
      ref.current.querySelectorAll("img.test3").forEach((el) => {
        el.classList.remove("showers2");
      });
      ref.current.querySelectorAll("div.text").forEach((el) => {
        el.classList.remove("showw");
      });
      ref.current.querySelectorAll("div.para").forEach((el) => {
        el.classList.remove("showww");
      });
    }
  }, [isIntersecting]);

  return (
    <>
      <div className="height">
        <section className="section ">
          <section className="gradientlol"></section>
          <main ref={ref} className="grid grid-cols-3 adc bg-zinc-950 -xl:grid -xl:grid-cols-1">
            <div className="-mt-96">
              <div className="text">
              <h1 className="text-white text-4xl m-auto text-center mt-[800px] -xl:mt-[450px]">
                Ready to train?
              </h1>
              </div>
              <div className="para mb-24 -xl:m-auto -xl:text-center -xl:mb-12">
                Dont trust us yet? Check out our other users reviews and
                ratings we got!<Link to='/classes'><span className="text-[#ff2300]">(Find more on the trainers page)</span></Link>
              </div>
            </div>
            <div>
              <span className="span">
                <img src={test} className="test test1" />
              </span>
              <span className="span">
                <img src={test2} className="test test3 z-10" />
              </span>
              <div className="hid">
                <img src={arnold} className="arnold" />
              </div>
              <span className="span">
                <img src={test3} className="test test2" />
                </span>
            </div>
            <div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default LocationAbout;
