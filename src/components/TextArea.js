import React, { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "TextDocument.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Downloading File", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="pt-2">{props.heading}</h1>
        <div className="form-floating ">
          <textarea
            className="form-control"
            value={text}
            id="floatingTextarea2"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2d2b2b",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "light" : "dark"
          } mt-3 me-3`}
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "light" : "dark"
          } mt-3 me-3`}
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "light" : "dark"
          } mt-3 me-3`}
          onClick={downloadTxtFile}
          disabled={text.length === 0}
        >
          Download Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "light" : "dark"
          } mt-3 me-3`}
          onClick={copyText}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "light" : "dark"
          } mt-3 me-3`}
          onClick={handleClear}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mt-2">Your text summary is</h2>
        <p>
          {
            text.split(" ").filter((number) => {
              return number.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((number) => {
              return number.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
};
