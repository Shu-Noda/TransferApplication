import React, {useState} from'react'
import {ethers} from 'ethers'
import ERC20_ABI from "./ERC20_ABI.json";

function HomeFour(props) {
    const [connectContractText, setConnContractText] = useState('Connect Contract');

    const contractHandler = (event) => {
        event.preventDefault();
        //let tempContract = new ethers.Contract(event.target.sc.value, event.target.abi.value, props.signer);
        let tempContract = new ethers.Contract('0x6d746CB6D08FdbD67474b0A37B076538b0E5E8c3',ERC20_ABI,props.signer);
		props.setContract(tempContract);
       // props.allowStepFour(true);
        console.log("STEP 3.");
        console.log("let tempContract = new ethers.Contract(CONTRACT ADDRESS, CONTRACT ABI, SIGNER);");
        console.log("to connects to contract");
        setConnContractText('Connected');
        props.allowHomeFive(true);

    }
    if(props.allowHomeFour)
    {
        return(
            <div>
            <h3>Step 3. Connect to Smart Contract</h3>

            <button onClick={contractHandler}>{connectContractText}</button>
            </div>
        );
        /*return (
            <div>
                <h3>Step 3. Connect to Smart Contract</h3>
                <form onSubmit={contractHandler}>
                    <dl>
                        <dt>Contract Address:</dt> <dd><input id="sc" type="text"/></dd><br/>
                        <dt>ABI:</dt> <dd><input id="abi" type="text"/></dd>
                    </dl>
                    <button type={"submit"}>{connectContractText}</button>
                </form>
            </div>
        );*/
    }
}

export default HomeFour;