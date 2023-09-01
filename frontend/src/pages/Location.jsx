import { Link } from "react-router-dom";
import ss from "../assets/ss.png";
import ss3 from "../assets/ss3.png";
import { BsTelephone } from "react-icons/bs";
import logo from "../assets/logo.png";
import Footer from "../components/Footer/Footer2";
import RightSideLocation from "../components/RightSideLocation";

const Location = () => {
  const trainers = [
    {
      day: "Monday",
      num: "David Goggins",
      nom: "Dorian Yates",
    },
    {
      day: "Tuesday",
      num: " Ronnie Coleman",
      nom: "Mike Mentzer",
    },
    {
      day: "Wednsday",
      num: "Tom Platz",
      nom: "Kevin Levrone",
    },
    {
      day: "Thursday",
      num: "Chris Bumstead",
      nom: "David Laid",
    },
    {
      day: "Friday",
      num: "Tren Twins",
      nom: "Frank Zane",
    },
    {
      day: "Saturday",
      num: "Jay Cutler",
      nom: "Flex Wheeler",
    },
    {
      day: "Sunday",
      num: "Arnold Schwarzenegger",
      nom: "Larry Scott",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3  -md:grid -md:grid-cols-1 -xl:grid-cols-2 -xl:grid-rows-1 ">
        <div className="  bg-gray-100 -md:h-screen">
          <h1 className="text-3xl mt-32 mb-6 m-auto text-center">
            You can find us here
          </h1>
          <Link
            to="https://goo.gl/maps/rg6K3BU2JDZmcs6g6"
            className="align-middle rounded-full w"
          >
            <img
              src={ss}
              className="w-350 h-350 object-cover rounded-full m-auto text-center "
            />
          </Link>
          <div className="mt-20 text-xl m-auto text-center">
            Feeling Lost? Click on Google Maps and find a way to US!
          </div>
        </div>
        <div className="h-screen bg-slate-900 text-center -md:h-screen">
          <img src={ss3} className="w-100" />
          <p className="text-white text-center text-xl mt-3">
            Vogelsangstrasse 11, 8400 Winterthur, Switzerland
          </p>
          <div className="inline-flex mt-3 text-white ">
            <BsTelephone className="text-3xl mt-1" />
            <p className="text-2xl font-bold ml-2">772-552-221</p>
          </div>
          <div className="text-white">
            <h2 className="text-3xl">Working hours:</h2>
            <ol className="">
              <li>Sunday 8 AM-10 PM</li>
              <li>Monday 8 AM-10 PM</li>
              <li>Tuesday 8 AM-10 PM</li>
              <li>Wednesday 8 AM-10 PM</li>
              <li>Thursday 8 AM-10 PM</li>
              <li>Friday 8 AM-10 PM</li>
              <li>Friday 8 AM-10 PM</li>
            </ol>
          </div>
          <img
            src={logo}
            className="mt-10 text-center m-auto h-48 w-48 text-black"
          />
        </div>
        <div className="grid grid-rows-8 divide-y  bg-slate-100 -md:h-screen -xl:w-screen">
          {trainers.map((trainer) => (
            <RightSideLocation
              key={trainer.day}
              day={trainer.day}
              trainerName1={trainer.num}
              trainerName2={trainer.nom}
            />
          ))}
          <div className="m-auto">
            <h1 className="text-center m-auto text-2xl color-slate-600 uppercase">Train with best people ever! </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
