import React, { useState } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
import TextArea from "./TextArea";
import ActionButtons from "./ActionButtons";
import ClipboardButton from "./ClipboardButton"
import TextSummary from "./TextSummary";
import "../App.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const defaultRows = "12";

  const toggleMode = () => {
    return props.toggleMode === "light"
      ? { color: '#1F1D1F', backgroundColor: "white" }
      : { color: "white", backgroundColor: '#1F1D1F' };
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setMsg("");
    setType("");
    setEndTime(Date.now());

    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  const spaceHandler = () => {
    let alertMsg = "";
    let type = "success";
    if (!text) {
      alertMsg = "Please enter the text to be converted!";
      type = "warning";
      setMsg(alertMsg);
      setType(type);

      return "";
    } else alertMsg = "Cleared Unneccessary Blank Spaces";
    let string = text?.replace("\n    ", "")?.replace("\n}", "}")?.replace("\n]", "]")?.split(/[ \n]/).filter(t => t).map(t => t.trim()).join(" ");
    setMsg(alertMsg);
    setType(type);
    setText(string);
    setEndTime(0)
    setStartTime(0)
  };

  const validateJSON = () => {
    try {
      let alertMsg = "";
      let type = "success";
      if (!text.length) {
        throw new Error('Please enter the text to be converted!')
      } else alertMsg = "Converted to JSON successfully";

      let parsedJson = text
      try {
        parsedJson = JSON.parse(text)
        parsedJson = JSON.stringify(parsedJson, null, 2)?.toString() ?? text
      } catch (error) {
        type = "warning"
        alertMsg = "Invalid JSON input"
      }

      setText(parsedJson);
      setMsg(alertMsg);
      setType(type);
      setEndTime(0)
      setStartTime(0)
    } catch (error) {
      setMsg(error.message);
      setType("warning");
    }
  }

  const toUpperCASE = () => {
    let upperCaseText = text.toUpperCase();
    let alertMsg = "";
    let type = "success";
    if (!text) {
      alertMsg = "Please enter the text to be converted!";
      type = "warning";
    } else alertMsg = "Converted to Uppercase successfully";
    setMsg(alertMsg);
    setType(type);
    setText(upperCaseText);
    setEndTime(0)
    setStartTime(0)
  };

  const toLowerCASE = () => {
    let lowerCaseText = text.toLowerCase();
    let alertMsg = "";
    let type = "success";
    if (!text) {
      alertMsg = "Please enter the text to be converted!";
      type = "warning";
    } else alertMsg = "Converted to LowerCase successfully";
    setMsg(alertMsg);
    setType(type);
    setText(lowerCaseText);
  };


  //Functions invoked on "onClick" EVENT
  const wordCount = () => {
    if (!text || isArrayOrObject(text)) {
      return 0;
    }

    let words = 0;
    const countWordsInElement = (element) => {
      if (typeof element === 'string') {
        words += element?.split(/\s+/).filter(t => t).length;
      } else if (Array.isArray(element)) {
        element.forEach(countWordsInElement);
      } else if (typeof element === 'object') {
        Object.values(element).forEach(countWordsInElement);
      }
    };

    try {
      const parsedData = JSON.parse(text);
      countWordsInElement(parsedData);
    } catch (error) {
      // Handle parsing error, if any
      countWordsInElement(text);
    }

    return words;
  };

  const isArrayOrObject = (text) => {
    try {
      if (typeof text == 'object') return 1
      JSON.parse(text)
      return 1 // If parsed without error: means its a valid JSON or Array 
    } catch (error) {
      return 0
    }
  }

  const charCountWithoutSpace = () => {
    if (isArrayOrObject(text)) { return 0 }
    return text.length
  }

  const charCountWithSpace = () => {
    if (isArrayOrObject(text)) { return 0 }
    return text.replace(/\s/g, '').length
  }

  const countWpm = () => {
    if (isArrayOrObject(text)) { return 0 }
    return (0.008 * text.length).toFixed(2)
  }

  const calculateWordsPerMinute = () => {
    const words = wordCount();
    const timeInSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds
    const minutes = timeInSeconds / 60; // Convert seconds to minutes
    return minutes ? (words / minutes)?.toFixed(2) : 0;
  };

  return (
    <>
      <div style={toggleMode()}>
        <section className="mb-3 headerSection">
          <div className="heading" style={{ color: props.toggleMode === "light" ? "#2E2C2C" : "#D9D5D5" }}>
            {props.heading}
          </div>
          <div className="successMessage">
            {msg && <Alert message={msg} type={type} />}
          </div>
          <ClipboardButton
            text={text}
            setMsg={setMsg}
            setType={setType}
            colorMode={props.toggleMode}
          />
        </section>

        <TextArea
          text={text}
          handleOnChange={handleOnChange}
          toggleMode={toggleMode}
          defaultRows={defaultRows}
        />

        <ActionButtons
          toUpperCASE={toUpperCASE}
          toLowerCASE={toLowerCASE}
          spaceHandler={spaceHandler}
          validateJSON={validateJSON}
          colorMode={props.toggleMode}
        />
      </div>

      <TextSummary
        wordCount={wordCount}
        charCountWithoutSpace={charCountWithoutSpace}
        charCountWithSpace={charCountWithSpace}
        countWpm={countWpm}
        calculateWordsPerMinute={calculateWordsPerMinute}
        toggleMode={toggleMode}
      />

      <div className="container my-4" style={toggleMode()}>
        <h2>Preview of your Text</h2>
        <p>{text.replace(/\s/g, '').length ? text : props.previewMode}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  previewMode: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Heading Goes Here",
  previewMode: "Enter some text to preview",
};