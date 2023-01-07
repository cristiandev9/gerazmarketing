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
        <nav className="navbar-mobile nav-show-only-mobile" style={{width: "100vh", height:"100%", zIndex: "9998", background: "#000"}}>

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
