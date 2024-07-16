import React from 'react';
import "../App.css"

const TextSummary = ({ wordCount, charCountWithoutSpace, charCountWithSpace, countWpm, calculateWordsPerMinute, toggleMode, colorMode }) => {

  const summaryData = [
    { label: "Total words: ", value: wordCount() },
    { label: "Total characters including space: ", value: charCountWithoutSpace() },
    { label: "Total characters excluding space: ", value: charCountWithSpace() },
    { label: "Minutes taken to read this text (average): ", value: countWpm() },
    { label: "Estimated Words Per Minute (WPM): ", value: calculateWordsPerMinute() },
  ];

  return (
    <div className="container my-4" style={toggleMode()}>
      <h3>Your Text Summary</h3>
      <p>

        {summaryData.map((item, index) => (
          <section key={index} className="my-3" style={{ letterSpacing: "1px" }}>
            {item.label}
            <span className={`mx-1 ${colorMode + "-summary-value"}`}>
              {item.value.toString()}
            </span>
          </section>
        ))}

      </p>
    </div>
  );

};

export default TextSummary;