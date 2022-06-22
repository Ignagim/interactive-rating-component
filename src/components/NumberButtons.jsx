import React from "react";

function NumberButtons({ number, value, setRating }) {
  return (
    <button
      type="button"
      onClick={() => setRating(value)}
      className={`bg-[#7c879854] focus:bg-[#fb7413] rounded-full w-10 h-10 text-center text-white hover:bg-[#959eac] transition-all ease-in duration-50`}
    >
      {number}
    </button>
  );
}

export default NumberButtons;
