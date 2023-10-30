import { useState, useRef } from "react";
import Card1 from "./cards/card1/card1";
import Card2 from "./cards/card2/card2";
import Card3 from "./cards/card3/card3";
import Card4 from "./cards/card4/card4";
import './App.css'


export default function App() {
  const arrayCards = [<Card1 />, <Card2 />, <Card3 />,<Card4 />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayCards.length);
  };

  const prevcard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arrayCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div  className="content">
      <button onClick={prevcard} className="Prevbtn"><i class="fa-solid fa-arrow-left"></i></button>

      <div className="Div1">{arrayCards[currentIndex]}</div>

      <button onClick={nextcard} className="nextbtn"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  );
}
