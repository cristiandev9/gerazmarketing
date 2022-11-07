import { ArrowRightOutlined } from "@ant-design/icons";
import * as React from "react";
import Card from "../card";

const Jobs = () => {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", margin: "3rem auto" }}>
        <h2 style={{ fontSize: "3rem" }}>Quais os nossos serviços?</h2>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              padding: "10px",
              placeItems: "center",
            }}
          >
            <Card
              title="Gestão de rede social (Instagram)"
              text="Pioneiros em produção de conteúdo, estratégica digital e posicionamento no Instagram. (Produção de fotos, artes gráficas, estréias orgânicas e produção de reels)."
            />
            <Card
              title="Marketing físico"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
            />
            <Card
              title="Criação de sites"
              text="E-commerce, institucional, landingpage, etc."
            />
            <Card
              title="Designer gráfico"
              text="produção de artes: Outdoor, panfletos, adesivos, cardápios e muito mais."
            />
            <Card
              title="Mentorias para empreendedores"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
            />
            <Card
              title="Ensaios fotográficos corporativos"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
            />
            <Card
              title="Gestão de Lançamentos de produtos e infoprodutos"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
