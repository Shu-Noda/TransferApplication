import React, {useState} from'react'
import { Link } from "react-router-dom";

import HomeThree from './HomeThree';
import HomeFour from './HomeFour';
import HomeFive from './HomeFive';
import '../../layout/App.css';


function HomeTwo(props) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    //const [HomeTwo, allowHomeTwo] = useState(false);
    const [homeThree, allowHomeThree] = useState(false);
    const [homeFour, allowHomeFour] = useState(false);
    const [homeFive, allowHomeFive] = useState(false);
    //const [stepFive, allowStepFive] = useState(false);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const {contract, setContract} = props;


    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
                console.log("window.ethereum is called to check if wallet is installed in your browser, and connects to this page");
                console.log("Address obtained from wallet - " + result[0]);
				setConnButtonText('Wallet Connected');
                allowHomeThree(true);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
    };

    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

    return (
        <div className='Connect'>
            <div>
                <h3>Step 1. Connect your wallet</h3>
                <button onClick={connectWalletHandler}>{connButtonText}</button>
                <p>Wallet Address - {defaultAccount}</p>
            </div>
            <div>
                <HomeThree allowHomeThree={homeThree} setProvider={setProvider} setSigner={setSigner} allowHomeFour={allowHomeFour}/>
            </div>

            <div>
                <HomeFour allowHomeFour={homeFour} signer={signer} setContract={setContract} allowHomeFive={allowHomeFive}/>
            </div>

            <div>
                <HomeFive allowHomeFive={homeFive} contract={contract}  />
            </div>

            
            
            {errorMessage}

        
      


        </div>
    );
}

export default HomeTwo;

/*
<div>
                <HomeThree allowHomeThree={homeThree} setProvider={setProvider} setSigner={setSigner} allowHomeFour={allowHomeFour}/>
            </div>
            <div>
                <HomeFour allowHomeFour={homeFour} signer={signer} setContract={setContract} />
            </div>
*/