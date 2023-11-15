import { Outlet } from "react-router-dom";
import './App.scss'

import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
//Páginas usadas 

function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App

