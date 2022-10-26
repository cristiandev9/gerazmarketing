import * as React from "react";
import { StarFilled } from "@ant-design/icons";

const itemFlex = {
  display: "flex",
};

const navbar = {
  display: itemFlex.display,
  justifyContent: "space-between",
  margin: "2rem 7rem",
};

const navbarItens = {
  display: itemFlex.display,
};

const navbarItem = {
  margin: "0px 1.5rem",
};


const Navbar = () => {
  return (
    <>
      <div style={navbar}>
        <div className="logo">
          <img
            src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d98da043bcc5dbc846ad4f_Arrow%20Logo.svg"
            loading="lazy"
            width="48"
            alt="Company Logo, A pink arrow pointing up"
            class="main-logo"
          />
        </div>
        <div className="nav" style={navbarItens}>
          <div style={navbarItem}>Melhores Trabalhos</div>
          <div style={navbarItem}>Testemunhos</div>
        </div>
        <div className="avaliable">
          Avalie-nos &nbsp;<StarFilled style={{color:"#f538eb"}}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
