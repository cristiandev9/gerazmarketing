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
        <h2 style={{ fontSize: "3rem" }}>Quais os nossos serviços?</h2>
        <div style={{ display: "flex", justifyContent: "center", margin: "0 3rem" }}>
          <Card
            title="Gestão de redes sociais"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
          <Card
            title="Marketing físico"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
          <Card
            title="Criação de sites"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
          <Card
            title="Designer gráfico"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
