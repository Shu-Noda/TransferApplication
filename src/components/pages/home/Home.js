import { Link } from "react-router-dom";
import React, {useState} from'react'
import HomeTwo from '../home2/HomeTwo';
import HomeThree from "../home2/HomeThree";
import '../../layout/App.css';



const Home = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

    const [HomeTwo, allowHomeTwo] = useState(false);
    const [HomeThree, allowHomeThree] = useState(false);

    

  return (
    <>
      <div className="startpage">
      <h1>ホーム</h1>
      
      <div>
        metamask接続は<Link to={`TransferApplication/home2`}>こちら</Link>
      </div>
      
      </div>
    </>
    
  );
};

export default Home;