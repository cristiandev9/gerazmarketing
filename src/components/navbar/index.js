import * as React from "react";
import { StarFilled } from "@ant-design/icons";
import Button from "../button";

const itemFlex = {
  display: "flex",
};

const navbar = {
  display: itemFlex.display,
  justifyContent: "space-between",
  margin: "1.3rem 4.5rem",
  position: "sticky",
  height: "auto",
  minHeight: "4px",
  backgroundColor: "#151515",
  borderBottom: "1px solid #000", 
  paddingBottom: ".5rem"
};

const navbarItens = {
  display: itemFlex.display,
  marginBottom: ".5rem"
  
};

const navbarItem = {
  padding: "0.5rem 1rem 0.5rem 1rem ",
  fontWeight: "300",
  fontSize: "16px !important"
};


const Navbar = () => {
  return (
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
          <div style={navbarItem}>Nossos Trabalhos</div>
          <div style={navbarItem}>Clientes</div>
          <div style={navbarItem}>Sobre nós</div>
          <div style={{marginLeft: "1rem"}}><Button text="ENTRE EM CONTATO" scale="0.9"/></div>
        </div>
        <div className="avaliable" style={{padding: "0.5rem 1rem"}}>
          Avalie-nos &nbsp;<StarFilled style={{color:"#f538eb"}}/>
        </div>
      </div>
  );
};

export default Navbar;
