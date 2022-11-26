import React, {useState} from'react'
import {ethers} from 'ethers'
import { Link } from "react-router-dom";
import HomeSix from './HomeSix';
import { useNavigate } from 'react-router-dom'


function HomeFive(props){

    if(props.allowHomeFive)
    {
    return(
        <>
        <div>
        　次は<Link to={`../home6`} >こちら</Link>           
        </div>
        </>

    )
    }

    
}
//        <HomeSix contract={contract}/>


export default HomeFive;