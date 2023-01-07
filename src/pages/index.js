import * as React from "react";
import GlobalStyle from "../css/globalStyles";
import Navbar from "../components/navbar";
import Presentation from "../components/presentation";
import Jobs from "../components/jobs";
import Clients from "../components/clients";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
import { useState } from "react";

const primaryColorBackground = {
  backgroundColor: "#151515",
};

const initialPage = {
  backgroundColor: primaryColorBackground.backgroundColor,
  width: "100%",
  height: "100vh",
  padding: "0",
  margin: "0",
  color: "#fff",
};


const IndexPage = () => {
  const [navMobileActived, setNavMobileActived] = useState(false);

  
  return (
    <main style={initialPage}>
      <GlobalStyle />
      <Navbar setNavMobileActived={setNavMobileActived} navMobileActived={navMobileActived}/>
      {navMobileActived &&(
        <nav className="navbar-mobile nav-show-only-mobile" style={{width: "100vh", height:"100%", zIndex: "9998", background: "#000", position: "fixed", right: 0, bottom: 0, top: 0, left: 0}}>
          <div style={{display: "block"}}>
            <div style={{marginTop: "8rem", marginLeft: "3rem", color: "#fff", fontSize: "23px"}}>
              <a href="#sobre-nos" onClick={()=>setNavMobileActived(false)} style={{color:"#fff"}}>Sobre nós</a>
            </div>
            <div style={{marginTop: "2rem", marginLeft: "3rem", color: "#fff", fontSize: "23px"}}>
              <a href="#nossos-servicos" onClick={()=>setNavMobileActived(false)}>Nossos serviços</a>
            </div>
            <div style={{marginTop: "2rem", marginLeft: "3rem", color: "#fff", fontSize: "23px"}}>
              <a href="#saiba-mais" onClick={()=>setNavMobileActived(false)}>Clientes</a>
            </div>
          </div>
        </nav>
      )}
      <Presentation/>
      <Clients/>
      <Jobs/>
      <About/>
      <Footer/>
      
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>GeraZ Marketing</title>;
