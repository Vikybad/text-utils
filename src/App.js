import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import { Routes, Route } from "react-router";

function App() {
  //State
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  

  //Helping Functions
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#1F1D1F";
    } else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Navbar
            mode={mode}
            title="Text Utilities"
            toggleMode={toggleMode}
            btnText={btnText}
          />
          <div className="container my-3">
            <TextForm heading="Converter" toggleMode={mode} />
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
