import React from "react";
import image from "../images/illustration-thank-you.svg";

function SubmitCard({ rating }) {
  return (
    <div className="bg-[#252d37] w-[90%] h-[50%] md:w-[400px] m-auto rounded-3xl flex flex-col items-start gap-6">
      <div className="flex items-center justify-center w-full mt-8">
        <img src={image} width={170} alt="succesful" />
      </div>
      <div className="flex justify-center text-center w-[200px] mx-auto bg-[#959eac21] rounded-xl">
        <h1 className="text-[#fb7413]">You selected {rating} out of 5</h1>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-2 md:gap-6 mx-auto w-full">
        <h2 className="text-white text-2xl">Thank You!</h2>
        <p className="text-gray-400 text-center sm:text-sm md:text-[17px] font-light">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default SubmitCard;
