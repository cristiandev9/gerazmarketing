import * as React from "react";
import Button from "../button";
import Logo from "../logo";

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
  paddingBottom: ".5rem",
};

const navbarItens = {
  display: itemFlex.display,
  marginBottom: ".5rem",
};

const navbarItem = {
  padding: "0.5rem 1rem 0.5rem 1rem ",
  fontWeight: "300",
  fontSize: "16px !important",
};

const Navbar = () => {
  return (
    <div style={navbar}>
      <div className="logo">
      <Logo />
      </div>
      <div className="nav" style={navbarItens}>
        <div style={navbarItem}>Sobre nós</div>
        <div style={navbarItem}>Nossos serviços</div>
        <div style={navbarItem}>Clientes</div>
        <div style={navbarItem}>Portfólio</div>
        <div style={{ marginLeft: "1rem" }}>
          <Button text="ENTRE EM CONTATO" scale="0.9" />
        </div>
      </div>
      <div className="avaliable" style={{ padding: "0.5rem 1rem" }}></div>
    </div>
  );
};

export default Navbar;
