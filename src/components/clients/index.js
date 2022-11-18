import * as React from "react";

const container = {
  backgroundColor: "#292929",
  minHeight: "12rem",
  margin: "6rem 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems:"center"
};

const Clientes = () => {
  return (
    <>
      <div style={container}>
        <img
          src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d989ab79fbea17dc6d314e_Logo%20PlaceHolder%204.svg"
          loading="lazy"
          width="196"
          alt="Logo PlaceHolder"
          className="logo"
        />
        <img
          src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d989ab79fbea17dc6d314e_Logo%20PlaceHolder%204.svg"
          loading="lazy"
          width="196"
          alt="Logo PlaceHolder"
          className="logo"
        />
        <img
          src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d989ab79fbea17dc6d314e_Logo%20PlaceHolder%204.svg"
          loading="lazy"
          width="196"
          alt="Logo PlaceHolder"
          className="logo"
        />
      </div>
    </>
  );
};

export default Clientes;
