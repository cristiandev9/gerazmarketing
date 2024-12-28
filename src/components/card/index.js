import * as React from "react";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Card = ({ title, text }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className="card-jobs"
      style={{
        backgroundColor: "#292929",
        margin: "1rem",
        padding: isVisible ? "2rem 2rem" : "1rem 2rem",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "2.5rem", marginTop: isVisible ? "-2.5rem" : '-.5rem', marginLeft: "-2rem" }}
          src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/icone+v.png"
          loading="lazy"
          id="w-node-ec0b854b-8453-414f-ec88-1b53249310da-a5af1e7e"
          alt="V"
          className="icon-small"
        />

        <div
          className="card-jobs-int"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={toggleVisibility}
        >
          {title.map((ttl, ind) => (
            <h1
              key={ind}
              style={{
                marginTop: "0rem",
                height: isVisible ? "2.5rem" : '.5rem',
                fontSize: "17px",
              }}
            >
              {ttl}
            </h1>
          ))}
          <Button
            onClick={toggleVisibility}
            style={{
              color: "#BABABA",
              padding: "0",
              marginTop: isVisible ? "-2.2rem" : '0'
            }}
            startIcon={isVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
          </Button>
        </div>
      </div>

      {isVisible && (
        <div
          className="text-card-1"
          style={{
            marginTop: "-.3rem",
            color: "#BABABA",
            letterSpacing: "0.3px",
            textAlign: "center",
          }}
        >
          {text.map((txt, ind) => (
            <span key={ind}>{txt}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
