import * as React from "react";
import GlobalStyle from "../css/globalStyles";
import Navbar from "../components/navbar";
import Presentation from "../components/presentation";

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
  return (
    <main style={initialPage}>
      <GlobalStyle />
      <Navbar/>
      <Presentation/>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>GeraZ Marketing</title>;
