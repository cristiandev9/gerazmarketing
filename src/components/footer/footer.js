import * as React from "react";

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
  ...itemsRow,
};

const Footer = () => {
  return (
    <footer style={gridFooter} id="footer">
      <div style={itemsRow}>
        <div>
          <img
            src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/logo.png"
            alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/logo.png"
            width={48}
          />
        </div>
        <div>
          {/* <input
            type="text"
            placeholder="Envie-nos uma mensagem"
            style={{ width: "15rem", height: "2rem" }}
          /> */}
          <a 
          href="https://wa.me/5527998691873?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+atendimento."
          target="_blank"
            style={{
              padding: ".7rem 2rem",
              marginLeft: "1rem",
              background: "transparent",
              border: "1px solid #fff",
              color: "#fff",
              textDecoration: "none"
            }}
          >
            Clique aqui para falar conosco no whatsapp!
          </a>
        </div>
      </div>
      <div style={lineDivider}></div>
      <div style={itemsRow}>
        <div>
          <a
            href="https://wa.me/5527998691873?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+atendimento."
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/whatsapp.png"
              alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/whatsapp.png"
              width="27px"
            />
          </a>
          <a
            href="https://www.instagram.com/gerazmarketing/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/instagram.png"
              alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/instagram.png"
              width="27px"
              style={{ marginLeft: "1rem" }}
            />
          </a>
        </div>
        <div>© 2022 GeraZ Marketing. Todos os direitos reservados.</div>
      </div>
      <div style={contactAndCopy} id="entre-em-contato">
        <div>
          E-mail de contato:{" "}
          <span
            style={{
              color: "rgb(157, 114, 177)",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            geraz@gmail.com
          </span>
        </div>
        <div>
          Criado por:{" "}
          <span
            style={{
              color: "rgb(157, 114, 177)",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            GeraZ
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
