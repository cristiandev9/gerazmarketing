import * as React from "react";
import { useState } from "react";

const About = () => {
  const [verMais, setVerMais] = useState(false);
  function handleMore(){
    setVerMais(!verMais);
  }
  return (
    <div className="container-ab" id="sobre-nos" style={{ margin: "2rem 4.2rem 4rem  4.2rem" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center", color: "#FDF213" }}>Sobre nós</h1>

      <div
       className="container-about"
        style={{
          backgroundColor: "rgb(41, 41, 41)",
          padding: "3rem",
          textAlign: "justify",
          lineHeight: "1.4",
          letterSpacing: "1px",
        }}
      >
        <div className="container-img-text-sobre" style={{ display: "flex" }}>
          <div className="container-img-sobre-nos" style={{ width: "60rem", height: "28.5rem", marginRight: "3rem" }}>
            <img
              src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/FEED+GERAZ.png"
              alt="logotipofeed"
              width="100%"
            />
          </div>
          <div>
            <span style={{ marginLeft: '1.5rem' }}>A &nbsp;
            <b style={{ color: "#DB88D4" }}>Gera Marketing</b>
            &nbsp; foi criada no dia 20 de Novembro de 2018, pela &nbsp;
            <b className="ceo-milena-perin" style={{ color: "#DB88D4" }}>CEO Milena Perin</b>
            ,&nbsp; a princípio o nome da empresa era &nbsp;
            <b style={{ color: "#DB88D4" }}>MP Marketing</b>&nbsp;
            (as iniciais do nome da idealizadora), em 2020 Milena decidiu
            reformular a identidade visual e o nome da empresa. A logo sofreu
            apenas uma alteração no ícone, que foi a substituição das letras MP
            pela letra Z e o seu nome passou a ser Gera Marketing ao invés de
            MP Marketing.
            </span>
            <br />
            <span style={{ marginLeft: '1.5rem' }}>Por que Milena escolheu o nome &nbsp;
            <b style={{ color: "#DB88D4" }}>Gera Marketing</b>&nbsp;?&nbsp; O
            nome Gera Marketing vem de &nbsp;
            <b style={{ color: "#DB88D4" }}>Geração Z</b>&nbsp;, que
            representa aqueles que nasceram entre o fim da década de 1990 e
            2010. Além de Milena ter nascido na época, sua profissão tem tudo a
            ver com as características da geração que ela pertence.
            </span>
            <br />
            <span style={{ marginLeft: '1.5rem' }}>Os pertencentes a Geração Z, também chamados
            de nativos digitais, tem uma íntima relação com o mundo digital, com
            a internet e com a informática, são pessoas que cresceram jogando
            video games, que acompanharam de perto as inovações tecnológicas e
            que gostam de consumir essas inovações quando possível.
            </span>
            <br />
            <span style={{ marginLeft: '1.5rem' }}>Milena resolveu juntar o útil ao
            agradável e hoje busca trabalhar com uma equipe pertencente à mesma
            geração para desenvolverem em conjunto e na mesma sintonia, projetos
            inovadores e tecnológicos para seus clientes.
            </span>
            <br />
            <span style={{ marginLeft: '1.5rem' }}>É impossível falar da &nbsp;
            <b style={{ color: "#DB88D4" }}>Gera Marketing</b>&nbsp; e não
            vincular o nome: &nbsp;
            <b style={{ color: "#DB88D4" }}>Milena</b>.&nbsp; Todos
            os seus clientes e pessoas que já ouviram falar na empresa, sabem
            que Milena é a cara da Gera Marketing.
            </span>
          </div>
        </div>
        <br />
        
        {verMais && (
          <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Conheça um pouco mais sobre a &nbsp;
          <b style={{ color: "#DB88D4" }}>CEO Milena Perin</b>:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ela teve seu primeiro contato com a área
          do Marketing em 2013, no ensino médio, onde cursou técnico em
          administração integrado ao ensino médio. No curso, ela tinha uma
          matéria específica em marketing e outras secundárias, mas que também
          envolviam a área.<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante o ensino médio, Milena fez estágio como
          atendente/vendedora em uma loja de serviços fotográficos e logo após o
          término do estágio e do ensino médio, começou a fazer serviços como
          modelo, a partir daí, começou a ter um contato forte com redes
          sociais, fotografias e produções de vídeos. Tudo parecia que Milena
          iria engrenar na carreira de modelo e influencer, mas não, na época
          começou a trabalhar como CLT no setor comercial e administrativo de
          uma escola de cursos, outra oportunidade que Milena teve para entender
          sobre vendas e estratégias.<br /> &nbsp;&nbsp; Na época, ingressou na faculdade de
          Marketing em uma instituição, mas não gostou muito da grade
          curricular, segundo ela: parecia que estava fazendo administração
          misturado com contabilidade e não tinha nada a ver com Marketing.
          Depois um tempo trancou a faculdade e resolveu buscar outra
          instituição que tivesse uma grade curricular correta com a área que
          buscava. Então, começou novamente a faculdade de Marketing, porém, em
          uma nova instituição onde aproveitou ao máximo o que o curso
          oferecera. No ano de 2018, Milena começou a modelar para uma loja de
          roupas em sua cidade e aproveitou suas habilidades com as redes
          sociais, e se propôs a cuidar do instagram da loja, resultado: Ela
          cuidava do instagram e ao mesmo tempo era a modelo da marca (como um
          extra), pois no momento ainda trabalhava na escola de cursos.<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A partir daí, Milena viu uma oportunidade
          de investir ainda mais na carreira de Marketing. Ainda no ano de
          2018 mudou de emprego e começou a trabalhar (CLT), sendo responsável
          pelo Marketing em uma farmácia de sua cidade e ao mesmo tempo cuidava
          das redes sociais de outras empresas.
          Ela trabalhou alguns meses apenas usando seu nome, até que chegou
          o momento de criar um CNPJ profissional e assim surgiu a MP Marketing e
          consequentemente a Gera Marketing. Os primeiros serviços oferecidos foram:
          Gestão de redes sociais (fotografias, produção de vídeos, postagens e
          estratégias digitais), Criação de logo (identidade visual) e Designer
          Gráfico (Produção de artes).
          Milena trabalhava em tempo integral na farmácia e durante suas folgas atendia seus clientes, até
          que chegou um momento que foi necessário escolher entre seu emprego de
          carteira assinada ou empreender com a sua gestão de redes sociais. Em
          abril de 2021, pediu demissão da farmácia para se dedicar apenas aos
          seus clientes e ir em busca de novos. Milena já atendeu mais de 150
          empresas em seus anos de experiência, hoje além dos antigos serviços
          prestados, a Gera Marketing oferece mais como, por exemplo: a criação de
          sites, sendo o responsável seu esposo Cristian Barbosa Andrisen. 
          E agora, após seis anos, Milena decidiu mudar o nome da empresa para Gera Marketing, eliminando o "Z". <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A decisão foi tomada porque a equipe agora é composta por profissionais de diversas gerações, e não apenas da Geração Z. Portanto, o nome anterior já não refletia mais a realidade da equipe.  O nome "Gera" foi mantido para comunicar o principal objetivo da empresa: gerar ideias, gerar marketing, e o alvo porém de uma forma repaginada para comunicar um dos principais focos do marketing que envolve um estudo aprofundado do público-alvo de cada negócio. Com essa mudança de marca, a empresa busca inclusão das gerações e reforçar seu compromisso em desenvolver estratégias assertivas e personalizadas. A transição para Gera Marketing reflete o crescimento e a evolução da empresa, alinhando seu nome com a missão de gerar valor e inovação no campo do marketing.

        </div>
        )}

        <div style={{textAlign:"center", margin:"1rem 0 1rem 0"}}>
          <button onClick={handleMore} style={{padding: "12px 20px", textAlign: "center", borderRadius: "8px", border: "none"}}> {!verMais && (<span>Clique aqui para conhecer mais sobre a <br/><b style={{ color: "#DB88D4" }}>CEO Milena Perin</b></span>) }

          {verMais && (<span>Reduzir Conteúdo Do Sobre Nós</span>) }
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default About;
