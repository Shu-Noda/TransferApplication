import logo from './logo.svg';
import React, {useState} from'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
//import { Layout } from './components/layout/Layout';
import Home from "./components/pages/home/Home";

import HomeTwo from "./components/pages/home2/HomeTwo";

import HomeSix from './components/pages/home2/HomeSix';

import Register from "./components/pages/register/Register";
import Borrow from "./components/pages/borrow/Borrow";
import COR from "./components/pages/home2/COR";
import Returns from "./components/pages/returns/Returns";
import './App.css';
function App() {
  const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

  const homeUrl = process.env.PUBLIC_URL;



  return (
    <BrowserRouter>
      <Routes>
      
        <Route path={homeUrl} element={<Home />} />

        <Route path={homeUrl+"/home2"} element={<HomeTwo contract={contract} setContract={setContract}/>}/>

        <Route path={homeUrl+"/home6"} element={<HomeSix contract={contract} setContract={setContract}/>}/>
        <Route path={homeUrl+"/register"} element={<Register contract={contract} setContract={setContract}/>} />
        <Route path={homeUrl+"/borrow"} element={<Borrow contract={contract} setContract={setContract}/>} />
        <Route path={homeUrl+"/cor"} element={<COR />}/>
        <Route path={homeUrl+"/returns"} element={<Returns contract={contract} setContract={setContract}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
