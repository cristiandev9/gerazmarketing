import * as React from "react";
import Card from "../card";

const Jobs = () => {
  return (
    <>
      <div
        style={{ width: "100%", textAlign: "center", margin: "3rem auto" }}
        id="nossos-servicos"
      >
        <h2 className="title-jobs" style={{ fontSize: "3rem", marginTop: "-1rem", color:"#DEEB21"}}>Quais os nossos serviços?</h2>
        <div className="jobs-cards">
          <div 
            className="cards-jobs-all"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              padding: "0px",
              placeItems: "center",
            }}
          >
            <Card
              title={[
                "Gestão de rede social ",
                <img
                  src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/logosclientes/medalha-de-ouro.png"
                  alt="https://gerazmarketing.s3.sa-east-1.amazonaws.com/logosclientes/medalha-de-ouro.png"
                  width="23px"
                  style={{ marginLeft: ".5rem", marginBottom: "-.2rem" }}
                />,
              ]}
              text={[
                "- Criação de conteúdo (Fotografia, artes gráficas e gravações de vídeos);",
                <br />,
                "- Postagem estratégica (Responsabilidade de postar usando estratégias orgânicas para o aumento do alcance e engajamento);",
                <br />,
                "- Planejamento estratégico (Ações para rede social).",
              ]}
            />
            <Card
              title={["Criação de Sites"]}
              text={[
                "- Desenvolvimento de sites institucionais, landingpage, e-commerce, etc.",
                <br />,
                "- Sites ou e-commerce's responsivos, otimizados para o google, personalizados, construídos com técnologias de ponta, tudo isso em alta performance!",
              ]}
            />
            <Card
              title={["Designer Gráfico"]}
              text={[
                "- Criação de identidade visual;",
                <br />,
                "- Criação de artes para rede socais, outdoor, panfletos, adesivos e demais materiais gráficos.",
              ]}
            />
            <Card
              title={["Mentoria para Empreendedores"]}
              text={["- Mentoria para empreendedores que querem aprender a dominar as redes sociais e usá-las de forma estratégica em favor do seu negócio."]}
            />
            <Card
              title={["Mentoria para profissionais da área"]}
              text={["- Mentoria para quem deseja entrar para a área ou se aperfeiçoar."]}
            />
            <Card
              title={["Marketing Físico"]}
              text={[
                "- Programação de eventos presenciais;",
                <br />,
                "- Cobertura de eventos;",
                <br />,
                "- Campanhas comerciais;",
                <br />,
                "- Ornamentação.",
              ]}
            />
            <Card
              title={["Ensaios fotográficos corporativos"]}
              text={[
                "- Programação de eventos presenciais;",
                <br />,
                "- Acompanhamento estratégico;",
                <br />,
                "- Branding visual;",
                <br />,
                "- Fotografia em studio (fotógrafos parceiros).",
              ]}
            />
            <Card
              title={["Lançamentos"]}
              text={["- Gestão e execução de campanhas de lançamentos de produtos, serviços, infoprodutos e marcas."]}
            />
            <Card
              title={["Lives"]}
              text={["Estruturação e cobertura de lives para eventos, shopping, lançamentos etc."]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
