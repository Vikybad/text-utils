import React from 'react';

const TextSummary = ({ wordCount, charCountWithoutSpace, charCountWithSpace, countWpm, calculateWordsPerMinute, toggleMode }) => {

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
        <section>
          {summaryData[0].label}
          {/* style={{ pointerEvents: 'none' }} is used to disable pointer selection */}
          <span className="btn " style={{ pointerEvents: 'none' }}> {summaryData[0].value} </span>
        </section>

        <section>
          {summaryData[1].label}
          <span className="btn mx-2 px-2" style={{ pointerEvents: 'none' }}> {summaryData[1].value} </span>
        </section>

        <section>
          {summaryData[2].label}
          <span className="btn mx-2 px-2" style={{ pointerEvents: 'none' }}> {summaryData[2].value} </span>
        </section>
        
        <section>
          {summaryData[3].label}
          <span className="btn mx-2 px-2" style={{ pointerEvents: 'none' }}> {summaryData[3].value} </span>
        </section>
        
        <section>
          {summaryData[4].label}
          <span className="btn mx-2 px-2" style={{ pointerEvents: 'none' }}> {summaryData[4].value} </span>
        </section>

      </p>
    </div>
  );

};

export default TextSummary;