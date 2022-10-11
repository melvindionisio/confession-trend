import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import messenger from "../memes/newmessage.mp3";
import stickman from "../memes/smile.jpg";

function Welcome() {
  const [pageTransition, setPageTransition] = useState(false);
  const [cardTransition, setCardTransition] = useState(false);
  const [greetTransition, setGreetTransition] = useState(false);
  const [btnTransition, setBtnTransition] = useState(false);

  const [audio] = useState(new Audio(messenger));
  const handleReady = () => {
    audio.play();
  };

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(true);
      setTimeout(() => {
        setCardTransition(true);
        setTimeout(() => {
          setGreetTransition(true);
          setTimeout(() => {
            setTimeout(() => {
              setBtnTransition(true);
            }, 600);
          }, 500);
        }, 600);
      }, 200);
    }, 0);
  });
  return (
    <div
      className={`${
        pageTransition
          ? "transform translate-x-0 opacity-100 duration-500 transition font-quicksand h-screen w-screen flex items-center justify-center bg-sky-50"
          : "transform -translate-x-full opacity-50 duration-500 transition font-quicksand h-screen w-screen flex items-center justify-center bg-sky-50"
      }`}
    >
      {/*

          */}
      <div
        className={`${
          cardTransition
            ? "shadow-md -mt-16 opacity-100 flex flex-col md:flex-row md:justify-between items-center w-10/12 max-w-xl  p-10 rounded-xl transition duration-300 bg-white"
            : "shadow-md -mt-16 opacity-0 flex flex-col md:flex-row items-center md:justify-between w-10/12 max-w-xl  p-10 rounded-xl transition duration-300 bg-white"
        }`}
      >
        <p
          className={`${
            greetTransition
              ? "pb-5 border-b md:border-b-0  md:pr-3 transform translate-y-0 opacity-100 text-center text-lg mb-10 transition duration-500"
              : "pb-5 border-b md:border-b-0   md:pr-3 transform translate-y-32 opacity-0 text-center text-lg mb-10 transition duration-500"
          }`}
        >
          <span className="text-left text-xl  block">
            Hi! hope you're doing fine.
          </span>
          <span className="text-2xl mt-3 font-semibold text-left block">
            May gusto akong sabihin sa'yo
          </span>
          <span className="block mt-4 text-left text-green-500">
            actually sobrang tagal na,
            <br /> and I guess I'm ready now.
          </span>
        </p>
        <div className="flex gap-4 flex-row md:flex-col items-center">
          <img src={stickman} className="h-24 " alt="" />
          <Link to="/hear-me-out">
            <button
              onClick={handleReady}
              className={`${
                btnTransition
                  ? "opacity-100 px-4 py-2 font-semibold text-sm text-pink-100 bg-pink-600 uppercase rounded-md duration-300 shadow-md"
                  : "opacity-0 px-4 py-2 font-semibold text-sm text-pink-100 bg-pink-600 uppercase rounded-md duration-300 shadow-md"
              }`}
            >
              Click me{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
