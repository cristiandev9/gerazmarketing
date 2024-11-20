import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import * as React from "react";
import Button from "../button";


const itemFlex = {
  display: "flex",
};

const navbar = {
  display: itemFlex.display,
  justifyContent: "space-between",
  alignItems: 'center',
  padding: "1.3rem 4.5rem",
  position: "fixed",
  width: "100%",
  zIndex: "999999",
  height: "auto",
  minHeight: "4px",
  backgroundColor: "#151515",
  borderBottom: "1px solid #000",
  paddingBottom: ".5rem",
};

const navbarItens = {
  display: itemFlex.display,
  marginBottom: ".5rem",
  marginLeft: "-9.8rem"
};

const navbarItem = {
  padding: "0.5rem 1rem 0.5rem 1rem ",
  fontWeight: "300",
  fontSize: "16px !important",
};

const styleA = {
  color: "#fff",
  textDecoration: "none"
}

const Navbar = ({setNavMobileActived, navMobileActived}) => {
  function handleNavbar(){
    setNavMobileActived(!navMobileActived);
  }

  return (
    <div className="navbar" style={navbar}>
      <div className="logo">
        <img
          src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/LOGOTIPO.png"
          alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/logo.png"
          width={120}
        />
      </div>
      <div className="nav-show-only-mobile" onClick={handleNavbar}>
        {navMobileActived && (<CloseOutlined style={{color:"#fff", fontSize:"23px"}}/>)} 
        {!navMobileActived && (<MenuOutlined style={{color:"#fff", fontSize:"23px"}}/>)} 
      </div>
      <div className="nav nav-device-lg" style={navbarItens}>
        <div style={navbarItem}>
          <a href="#sobre-nos" style={styleA}>Sobre nós</a>
        </div>
        <div style={navbarItem}>
          <a href="#nossos-servicos" style={styleA}>Nossos serviços</a>
        </div>
        <div style={navbarItem}>
          <a href="#saiba-mais" style={styleA}>Clientes</a>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <a href="https://wa.me/message/L42NJ4A3XZG5E1" target="_blank" style={styleA}>
            <Button text="ENTRE EM CONTATO" scale="0.9" />
          </a>
        </div>
      </div>
      
      <div className="avaliable" style={{ padding: "0.5rem 1rem" }}></div>

    </div>
  );
};

export default Navbar;
