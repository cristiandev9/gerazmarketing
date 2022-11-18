import { ArrowRightOutlined, NodeExpandOutlined } from "@ant-design/icons";
import * as React from "react";
import Button from "../button";

const itemFlex = {
  display: "flex",
};

const presentation = {
  display: itemFlex.display,
  justifyContent: "space-between",
  width: "100%",
};

const navbarItens = {
  display: itemFlex.display,
};

const navbarItem = {
  margin: "0px 1.5rem",
};

const avaliableItem = {
  color: "#f538eb",
};

const TextPresentation = () => (
  <p>
    Invista em sua rede social com publicações criativas e inovadoras.
    <br /> Inumeros negócios vem se destacando e faturando através do Marketing
    Digital.
    <br /> Somos a geração das ideias criativas!
  </p>
);

const Presentation = () => {
  return (
    <>
      <div style={presentation}>
        <div style={{ display: "block", margin: "5rem 0 0rem 4.5rem" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "600" }}>
            Marketing criativo
            <br /> para sua rede social
          </h1>
          <div
            style={{
              color: "#9f9f9f",
              fontWeight: 500,
              lineHeight: "1.6",
              fontSize: "1.125rem",
              marginTop: "-1rem",
            }}
          >
            <TextPresentation />
          </div>
          <a href="#footer" style={{color:"#fff", textDecoration:"none"}}>
            <div style={{ margin: "2.2rem 0 2rem 0" }} id="saiba-mais">
              <Button text="SAIBA MAIS" scale="1" />
            </div>
          </a>
        </div>

        <div className="image" style={{ margin: "5.5rem 4.5rem 0 0" }}>
          <img
            src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d9881a98dcee8fddc18345_LapTop%20Image%20(3).png"
            style={{ maxWidth: "30.85rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Presentation;
