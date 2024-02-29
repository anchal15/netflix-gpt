import React from "react";
import { BACKGROUND_NETFLIX_IMAGE } from "../utils/constant";
import { useSelector } from "react-redux";

const ErrorContainer = () => {
  const errMsg = useSelector((store) => store.error.errorMessage);
  return (
    <>
      <div className="fixed -z-20">
        <img className="h-screen object-cover w-screen" src={BACKGROUND_NETFLIX_IMAGE} alt="logo" />
      </div>
      <div className="pt-[50%] md:pt-[10%] flex justify-center ">
        <div className="bg-black py-10 px-10 bg-opacity-90">
          <span className="text-white text-3xl">OOPS!!! You got an error: {errMsg}</span>
        </div>
      </div>
    </>
  );
};

export default ErrorContainer;
