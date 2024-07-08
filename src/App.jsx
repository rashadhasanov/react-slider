import React, { useState, useCallback } from "react";
import Review from "./components/Review";
import Navigation from "./components/Navigation";
import RandomButton from "./components/RandomButton";
import { reviews } from "./data";

function App() {
  const [curSlide, setCurSlide] = useState(0);

  const prevSlide = useCallback(() => {
    setCurSlide((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurSlide((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  }, [reviews.length]);

  const randomSlide = useCallback(() => {
    const randomSlideIndex = Math.floor(Math.random() * reviews.length);
    setCurSlide(randomSlideIndex);
  }, [reviews.length]);

  return (
    <div className="container">
      <Review review={reviews[curSlide]} />
      <Navigation onPrev={prevSlide} onNext={nextSlide} />
      <RandomButton onRandom={randomSlide} />
    </div>
  );
}

export default App;
