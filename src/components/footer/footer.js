import * as React from "react";
import Logo from "../logo";

const gridFooter = {
  display: "flex",
  flexDirection: "column",
  padding: "3rem 4.5rem",
  backgroundColor: "#292929",
  minHeight: "10rem",
};

const lineDivider = {
  width: "100%",
  height: "1px",
  backgroundColor: "#fff",
  margin: "2.5rem 0",
};

const itemsRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const contactAndCopy = {
    marginTop: "2rem",
    ...itemsRow
};


const Footer = () => {
  return (
    <footer style={gridFooter}>
      <div style={itemsRow}>
        <div><Logo /></div>
        <div>
            <input type="text" placeholder="Envie-nos uma mensagem" style={{width:"15rem", height: "2rem"}} />
            <button style={{width:"7rem", height: "2.35rem", marginLeft: "1rem", background: "transparent", border: "1px solid #fff", color: "#fff"}}>Enviar</button>
        </div>
      </div>
      <div style={lineDivider}></div>
      <div style={itemsRow}>
        <div>Instagram  Whatsapp</div>
        <div>© 2022 GeraZ. Todos os direitos reservados.</div>
      </div>
      <div style={contactAndCopy}>
        <div>E-mail de contato: <span style={{color: "#F538EB"}}>geraz@gmail.com</span></div>
        <div>Criado por: <span style={{color: "#F538EB"}}>GeraZ</span></div>
      </div>
    </footer>
  );
};

export default Footer;
