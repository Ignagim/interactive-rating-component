import React from "react";
import { AiFillStar } from "react-icons/ai";
import NumberButtons from "./NumberButtons";
import { useNavigate } from "react-router-dom";

function RatingCard({ setRating }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/submit`);
  };

  return (
    <div className="bg-[#252d37] w-[90%] h-[50%] md:w-[400px] m-auto rounded-3xl flex flex-col items-start gap-6">
      <div className="flex items-center justify-start h-16 w-full mt-2">
        <div className="bg-[#7c879854] rounded-full h-8 w-8 flex justify-center items-center ml-4">
          <AiFillStar color="hsl(25, 97%, 53%)" size={18} />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between h-[120px] mx-4 mt-[-5px]">
        <h1 className="text-white font-bold text-2xl">How did we do?</h1>
        <p className="text-[#959eac] text-[15px] text-left">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <form
        onSubmit={(value) => handleSubmit(value)}
        className="flex mt-4 gap-10 w-full flex-col"
      >
        <div className="flex justify-evenly items-center w-full">
          <NumberButtons number="1" value={1} setRating={setRating} />
          <NumberButtons number="2" value={2} setRating={setRating} />
          <NumberButtons number="3" value={3} setRating={setRating} />
          <NumberButtons number="4" value={4} setRating={setRating} />
          <NumberButtons number="5" value={5} setRating={setRating} />
        </div>
        <button
          type="submit"
          className="m-auto sm:mb-10 mb-4 h-8 bg-[#fb7413] w-[85%] rounded-lg hover:bg-white hover:text-[#fb7413]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RatingCard;
