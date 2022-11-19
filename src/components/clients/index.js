import * as React from "react";

const container = {
  backgroundColor: "#292929",
  minHeight: "12rem",
  margin: "6rem 0",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const Clientes = () => {
  let rows = [];
  for (let i = 1; i <= 11; i++) {
    rows.push(<img
      src={`https://gerazmarketing.s3.sa-east-1.amazonaws.com/logosclientes/${i}.png`}
      loading="lazy"
      width="196"
      alt="Logo PlaceHolder"
      className="logo scroll"
      key={i}
    />);

  }
  if (rows.length === 0) {
    return <p>Nenhum item</p>;
  }

  return (
    <>
      <div style={container} id="clientes" aria-hidden="true">
        

        {rows.map(cliente => cliente)}
      </div>
    </>
  );
};

export default Clientes;
