/** format */
import React from "react"
import Header from "./Componentes/Header/Headerestilo.jsx";
import Main from "./Componentes/Main/Main.jsx";
import Headerestilo from "./Componentes/Header/Headerestilo.jsx";


export default function App() {
  return (
    <>
      {/* "S.GlobalStyle" esta resetando toda a pagina  */}
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  );
}


