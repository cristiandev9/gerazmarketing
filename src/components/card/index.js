import * as React from "react";

const Card = ({ title, text }) => {
  return (
    <div
      className="card-jobs"
      style={{
        backgroundColor: "#292929",
        margin: "2rem",
        padding: "3rem 2.5rem",
        width: "21.5rem",
        height: "17rem",
        textAlign: "left",
      }}
    >
      <img
        style={{ width: "6rem", marginTop: "-2.5rem", marginLeft: "-2rem" }}
        src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/icone+v.png"
        loading="lazy"
        id="w-node-ec0b854b-8453-414f-ec88-1b53249310da-a5af1e7e"
        alt="Check Mark Icon Pink"
        className="icon-small"
      />

      <div className="card-jobs-int" style={{display: "flex"}}>
        {title.map((ttl, ind) => (
          <h2
            key={ind}
            style={{ marginTop: "1rem", height: "2.5rem", fontSize: "20px" }}
          >
            {ttl}
          </h2>
        ))}
      </div>

      <div
        style={{
          marginTop: ".5rem",
          color: "#BABABA",
          letterSpacing: "0.3px",
        }}
      >
        {text.map((txt, ind) => (
          <span key={ind}>{txt}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
