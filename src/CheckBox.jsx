import { useState } from "react";
import "./App.css";

function CheckBox({ setChecked, setColor }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setColor("blacky");
      setChecked(true);
    } else {
      setColor("whity");
      setChecked(false);
    }
  };

  return (
    <>
      <div className="checkbox-wrapper-41">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      </div>
    </>
  );
}

export default CheckBox;
