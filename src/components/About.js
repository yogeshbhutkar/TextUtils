// import React, { useState } from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#2d2b2b",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="mt-5 text-center mb-4">About Us</h1>
      <h5 className="ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 mt-5 pt-3 text-center">
        This is a react app made to provide various text utilities to the user
        like converting the text to UpperCase, to LowerCase, Downloading the
        text as a .txt file, copying text to the clipboard and clearing the
        text.
      </h5>
      <h5 className="ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 mt-4 text-center">
        It supports the use of dark as well as light mode which makes theming
        convinient for the user.
      </h5>
      <h5 className="ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 mt-4 text-center">
        This project is available in the github code as a project done by Yogesh
        Bhutkar and is available for further suggestions and improvements.
      </h5>
      <h5 className="ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 mt-2 text-center">
        email: pseudonetwork1001@gmail.com
      </h5>
    </div>
  );
}
