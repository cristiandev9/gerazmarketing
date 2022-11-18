import * as React from "react";

const Card = ({ title, text }) => {
  return (
    <div style={{backgroundColor: "#292929", margin: "rem", padding: "3rem 2.5rem", maxWidth: "17rem" , height: "16.5rem", textAlign:"left"}}>
      <img
        style={{width: "2rem"}}
        src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d9deae5437fb02b72d5f7a_CheckMark%20Icon.svg"
        loading="lazy"
        id="w-node-ec0b854b-8453-414f-ec88-1b53249310da-a5af1e7e"
        alt="Check Mark Icon Pink"
        className="icon-small"
        />
      <h2 style={{marginTop:"2.5rem", height:"2.5rem", fontSize: "22px"}}>{title}</h2>
      <div style={{marginTop:"2.5rem", color: "#BABABA", letterSpacing: "0.3px"}}>{text}</div>
    </div>
  );
};

export default Card;
