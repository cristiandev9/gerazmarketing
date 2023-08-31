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
      <div className="logo-and-contact" style={itemsRow}>
        <div>
          <img
            src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/png+logo+2020+.png"
            alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/png+logo+2020+.png"
            width={120}
          />
        </div>
        <div className="div-button-contact-whatsapp">
          {/* <input
            type="text"
            placeholder="Envie-nos uma mensagem"
            style={{ width: "15rem", height: "2rem" }}
          /> */}
          <a 
          className="contact-whatsapp"
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
      <div className="line-divider-footer" style={lineDivider}></div>
      <div className="social-and-copyright" style={itemsRow}>
        <div className="socials">
          <a
            href="https://wa.me/5527998691873?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+atendimento."
            target="_blank"
            rel="noreferrer"
            className="whatsapp-container"
          >
            <img
              src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/whatsapp.png"
              alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/whatsapp.png"
              width="53px"
            />
            <span>Entre em contato</span>
          </a>
          <a
            href="https://www.instagram.com/gerazmarketing/"
            target="_blank"
            rel="noreferrer"
            className="instagram-container"
          >
            <img
              src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/instagram.png"
              alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/instagram.png"
              width="53px"
              style={{ marginLeft: "1rem" }}
            />
            <span>Siga-nos</span>
          </a>
        </div>
        <div className="copyright">© 2022 GeraZ Marketing. Todos os direitos reservados.</div>
      </div>
      <div style={contactAndCopy} id="entre-em-contato">
        <div>
          E-mail de contato:{" "}
          <span
            style={{
              color: "#DB88D4",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            geraz@gmail.com
          </span>
        </div>
        <div className="created-by">
          Criado por:{" "}
          <span
            style={{
              color: "#DB88D4",
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
