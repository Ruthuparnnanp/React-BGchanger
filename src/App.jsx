import { useState } from "react";
import "./App.css";
import CheckBox from "./CheckBox";

function App() {
  const [color, setColor] = useState("white");
  const [checked, setChecked] = useState(null);

  const handleClick = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className={`${color} container `}>
        <div className="toggle">
          <CheckBox setChecked={setChecked} setColor={setColor} />
        </div>
        <div className={`text ${checked && "colo"}`}>
          <h1>Color Changer App</h1>
          <p>Choose any color for a cool transition</p>
        </div>
        <div className="main">
          <div onClick={() => handleClick("one")} className="color one"></div>
          <div onClick={() => handleClick("two")} className="color two"></div>
          <div
            onClick={() => handleClick("three")}
            className="color three"
          ></div>
          <div onClick={() => handleClick("four")} className="color four"></div>
          <div onClick={() => handleClick("five")} className="color five"></div>
        </div>
      </div>
    </>
  );
}

export default App;
