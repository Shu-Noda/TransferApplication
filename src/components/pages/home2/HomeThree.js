import React, {useState} from'react'
import {ethers} from 'ethers'
import { Link } from "react-router-dom";
function HomeThree(props) {
    const [buttonText, setbuttonText] = useState('Connect Provider/Signer')
    const updateEthers = async () => {
        console.log("STEP 2.");
        console.log("let tempProvider = await new ethers.providers.Web3Provider(window.ethereum);");
        console.log("is called to connect to EVM chain and instantiate Signer which allows you to sign");
		let tempProvider = await new ethers.providers.Web3Provider(window.ethereum);
		props.setProvider(tempProvider);
		props.setSigner(tempProvider.getSigner());
        props.allowHomeFour(true);
        setbuttonText("Connected");	
	}

    if(props.allowHomeThree)
    {
        return (
            <div>
                <h3>Step 2. Instantiate Provider and Signer</h3>
                <button onClick={updateEthers}>{buttonText}</button>
            </div>
        );
    }
}

export default HomeThree;