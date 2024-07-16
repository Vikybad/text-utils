import React, { useRef, useEffect } from 'react';

const TextArea = ({ text, handleOnChange, toggleMode, defaultRows }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textArea = textAreaRef.current;
      const lineNumberColumn = document.getElementById('lineNumberColumn');
      if (textArea && lineNumberColumn) {
        lineNumberColumn.scrollTop = textArea.scrollTop;
      }
    };

    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (textArea) {
        textArea.removeEventListener('scroll', handleScroll);
      }
    };
  }, [text]);

  const getLineNumbers = () => {
    let lines = text?.split("\n").length;
    if (lines <= defaultRows) lines = defaultRows;
    return Array.from({ length: lines }, (_, index) => index + 1).join("\n");
  };

  return (
    <div className="mb-3 position-relative" style={{ fontFamily: 'monospace' }}>
      <div id="lineNumberColumn" className="line-numbers position-absolute">
        {getLineNumbers()}
      </div>
      <textarea
        ref={textAreaRef}
        id="myBox"
        value={text}
        onChange={handleOnChange}
        className="form-control"
        rows={defaultRows}
        style={{
          paddingLeft: `${40 + (String(text?.split("\n").length).length * 5)}px`,
          ...toggleMode()
        }}
      />
      <style>{`
        textarea {
          resize: both;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

export default TextArea;