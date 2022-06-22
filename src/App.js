import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RatingCard from "./components/RatingCard";
import SubmitCard from "./components/SubmitCard";

function App() {
  const [rating, setRating] = useState(null);
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Routes>
        <Route path="/" element={<RatingCard setRating={setRating} />} />
        <Route path="/submit" element={<SubmitCard rating={rating} />} />
      </Routes>
    </div>
  );
}

export default App;
