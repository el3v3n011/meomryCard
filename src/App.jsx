import { useState } from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Images from "./Images";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
    <div className="container">

      <Sidebar onInputChange={handleInputChange} />
      <Images keyWord={inputValue} />
    </div>
    </>
  );
}

export default App;
