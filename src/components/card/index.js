import * as React from "react";

const Card = ({ title, text }) => {
  return (
    <div style={{backgroundColor: "#292929", margin: "1rem", padding: "2rem", maxWidth: "15rem"}}>
      <img
        style={{width: "2rem"}}
        src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d9deae5437fb02b72d5f7a_CheckMark%20Icon.svg"
        loading="lazy"
        id="w-node-ec0b854b-8453-414f-ec88-1b53249310da-a5af1e7e"
        alt="Check Mark Icon Pink"
        class="icon-small"
        />
      <h2>{title}</h2>
      <div>{text}</div>
    </div>
  );
};

export default Card;
