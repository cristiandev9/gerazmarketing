import * as React from "react";

const firstSquare = {
  display: "flex",
  width: "65px",
  height: "40px",
  alignItems: "center",
  backgroundColor: "rgba(245, 56, 235, 0.6)",
};
const secondSquare = {
    backgroundColor: "rgb(245, 56, 235)",
    height: "20px",
    width: "40px",
};

const Button = ({ text, scale }) => {
  return (
    <div style={{ display: "flex", transform: `scale(${scale})`, alignItems: "center"}}>
      <span style={firstSquare}>
        <span style={secondSquare}></span>
      </span>

      <span style={{position:"relative", right: "20px"}}>{text}</span>
      <span style={{ marginLeft: "-.4rem" }}>
        <img
          src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d9821126a0c0110d7d53be_Arrow%20Icon%20White.svg"
          loading="lazy"
          width="33"
        />
      </span>
    </div>
  );
};

export default Button;
