import { ArrowRightOutlined } from "@ant-design/icons";
import * as React from "react";
import Card from "../card";

const itemFlex = {
  display: "flex",
};

const avaliableItem = {
  color: "#f538eb",
};

const Jobs = () => {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", margin: "3rem auto" }}>
        <h2 style={{ fontSize: "3rem" }}>Com o que trabalhamos?</h2>
        <div style={{ display: "flex", justifyContent: "center", margin: "0 3rem" }}>
          <Card
            title="Marketing Físico"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
          <Card
            title="Marketing Digital"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
          <Card
            title="Criamos seu site"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
          <Card
            title="Redes Sociais"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
