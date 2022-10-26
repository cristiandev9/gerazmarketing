import * as React from "react";

const itemFlex = {
  display: "flex",
};

const presentation = {
  display: itemFlex.display,
  justifyContent: "space-between",
  margin: "7rem 30.5rem",
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

const Presentation = () => {
  return (
    <>
      <div style={presentation}>
        <div style={{ display: "block" }}>
          <div>
            <h1 style={{ fontSize: "50px" }}>
              The best stock trading
              <br /> course on the planet
            </h1>
          </div>
          <div>
            <p style={{color:"#9f9f9f", fontWeight: 600, lineHeight: "1.6", fontSize: "1.05rem"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius
              <br /> enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros
              <br /> dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src="https://uploads-ssl.webflow.com/62d97c85c550e860adaf1e79/62d9881a98dcee8fddc18345_LapTop%20Image%20(3).png"
            style={{ maxWidth: "30rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Presentation;
