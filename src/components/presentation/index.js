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

const TextPresentation = () => (
  <p>
    Invista em sua rede social com publicações criativas e inovadoras.
    <br /> Inúmeros negócios vem se destacando e faturando através do Marketing
    Digital.
    <br /> Somos a geração das ideias criativas!
  </p>
);

const bannerMainUrl =
  "https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/banner-geraz.png";

const Presentation = () => {
  return (
    <>
      <div style={presentation}>
        <div
          className="div-text-presentation"
          style={{ display: "block", margin: "9rem 0 0rem 4.5rem" }}
        >
          <div className="image-presentation-only-mobile">
            <img
              src={bannerMainUrl}
              alt={bannerMainUrl}
              style={{ maxWidth: "37rem" }}
            />
          </div>
          <h1
            className="title-presentation"
            style={{ fontSize: "3.5rem", fontWeight: "600" }}
          >
            Marketing criativo
            <br /> para sua rede social
          </h1>
          <div
            className="text-presentation"
            style={{
              color: "#9f9f9f",
              fontWeight: 500,
              lineHeight: "1.6",
              fontSize: "1.125rem",
              marginTop: "-.3rem",
            }}
          >
            <TextPresentation />
          </div>
          <a href="https://wa.me/message/L42NJ4A3XZG5E1" target="_blank" style={{ color: "#fff", textDecoration: "none" }}>
            <div style={{ margin: "2.6rem 0 2rem 0" }} id="saiba-mais">
              <Button text="SAIBA MAIS" scale="1" />
            </div>
          </a>
        </div>

        <div className="image" style={{ margin: "8rem 5.5rem 0 0" }}>
          <img
            src={bannerMainUrl}
            alt={bannerMainUrl}
            style={{ maxWidth: "37rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Presentation;
