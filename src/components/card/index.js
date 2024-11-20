import * as React from "react";

const Card = ({ title, text }) => {
  return (
    <div
      className="card-jobs"
      style={{
        backgroundColor: "#292929",
        margin: "1rem",
        padding: "2rem 2.5rem",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img
          style={{ width: "2.5rem", marginTop: "-2.5rem", marginLeft: "-2rem" }}
          src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/icone+v.png"
          loading="lazy"
          id="w-node-ec0b854b-8453-414f-ec88-1b53249310da-a5af1e7e"
          alt="V"
          className="icon-small"
        />

        <div className="card-jobs-int" style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          {title.map((ttl, ind) => (
            <h1
              key={ind}
              style={{ marginTop: "0rem", height: "2.5rem", fontSize: "17px" }}
            >
              {ttl}
            </h1>
          ))}
        </div>
      </div>

      <div
        className="text-card-1"
        style={{
          marginTop: "-.3rem",
          color: "#BABABA",
          letterSpacing: "0.3px",
          textAlign: "center"
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
