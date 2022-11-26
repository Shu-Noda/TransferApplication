import React, {useState,useEffect} from'react'
import {ethers} from 'ethers'
import { Link } from "react-router-dom";
import Register from '../register/Register';
import '../../layout/App.css';


function HomeSix(props) {
    const protable = document.getElementById('product-table');
    const tblbody = document.getElementById('tblbody');
    const didEffect = React.useRef(false);



    const {contract, setContract} = props;
    const [buttonText, setbuttonText] = useState('Connect Provider/Signer')


   

    window.onload = function(){
        var perfEntries = performance.getEntriesByType("navigation");
        perfEntries.forEach(function(pe){
          switch( pe.type ){
            case 'navigate':
              console.log('通常のアクセス');
              break;
            case 'reload':

              console.log('更新によるアクセス');
              alert("リロードしたため初期画面に戻ります");
              setTimeout(function(){
                window.location.href = 'http://localhost:3000';
              }, 2*1000);
              break;
            case 'back_forward':
              console.log('戻るによるアクセス');
              break;
            case 'prerender':
              console.log('レンダリング前');
              break;
          }
        });
      };


    /*const setData = async() =>{
        try{
        const tblbody = document.getElementById('tblbody');

        for(let num = 1; num <4;num++){
            let tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerText = num;
            tr.appendChild(td);

            var td = document.createElement('td');
            //var cellText = document.createTextNode(await contract.readProductName(num));
            //td.appendChild(cellText);
            td.innerText = await contract.readProductName(num);
            tr.appendChild(td);

            var td = document.createElement('td');
            //var cellText = document.createTextNode(await contract.readClassNum(num));
            td.innerText = await contract.readClassNum(num);
            //td.appendChild(cellText);
            tr.appendChild(td);

            var td = document.createElement('td');
            //var cellText = document.createTextNode(await contract.readColor(num));

            td.innerText = await contract.readColor(num);
            //td.appendChild(cellText);
            tr.appendChild(td);

            var td = document.createElement('td');
            //var cellText = document.createTextNode(await contract.readCompany(num));
            td.innerText = await contract.readCompany(num);
            //td.appendChild(cellText);
            tr.appendChild(td);

            var td = document.createElement('td');
            //var cellText = document.createTextNode(await contract.readManuDate(num));
            td.innerText = await contract.readManuDate(num);
            //td.appendChild(cellText);
            tr.appendChild(td);

            var td = document.createElement('td');
            //var cellText = document.createTextNode(await contract.readPurDate(num));
            td.innerText = await contract.readPurDate(num);
            //td.appendChild(cellText);
            tr.appendChild(td);

            //tblbody.appendChild(tr);

            console.log(tr);
            tblbody.appendChild(tr);
            console.log(num);

        }
        }catch(error){
            console.error(error);
        }
    }*/

    useEffect(() =>{
        
        const setData = async()=> {
            if (!didEffect.current) {
                didEffect.current = true;
                
            try{
                const tblbody = document.getElementById('tblbody');

                var product_total = await contract.getCode();

        
                for(let num = 1; num <= product_total;num++){
                    if(await contract.readFlag(num)== true){
                        continue;
                        
                    }
                    let tr = document.createElement('tr');
                    var td = document.createElement('td');
                    td.innerText = num;
                    tr.appendChild(td);
        
                    var td = document.createElement('td');
                    //var cellText = document.createTextNode(await contract.readProductName(num));
                    //td.appendChild(cellText);
                    td.innerText = await contract.readProductName(num);
                    tr.appendChild(td);
        
                    var td = document.createElement('td');
                    //var cellText = document.createTextNode(await contract.readClassNum(num));
                    td.innerText = await contract.readClassNum(num);
                    //td.appendChild(cellText);
                    tr.appendChild(td);
        
                    var td = document.createElement('td');
                    //var cellText = document.createTextNode(await contract.readColor(num));
        
                    td.innerText = await contract.readColor(num);
                    //td.appendChild(cellText);
                    tr.appendChild(td);
        
                    var td = document.createElement('td');
                    //var cellText = document.createTextNode(await contract.readCompany(num));
                    td.innerText = await contract.readCompany(num);
                    //td.appendChild(cellText);
                    tr.appendChild(td);
        
                    var td = document.createElement('td');
                    //var cellText = document.createTextNode(await contract.readManuDate(num));
                    td.innerText = await contract.readManuDate(num);
                    //td.appendChild(cellText);
                    tr.appendChild(td);
        
                    var td = document.createElement('td');
                    //var cellText = document.createTextNode(await contract.readPurDate(num));
                    td.innerText = await contract.readPurDate(num);
                    //td.appendChild(cellText);
                    tr.appendChild(td);
                
                    console.log(tr);
                    tblbody.appendChild(tr);
                    console.log(num);
        
                }
                console.log(contract);
            }catch(error){
                console.error(error);
            }
        }

            
            }
        setData();

    }, []);

    


    



    const setTable = async() =>{
        var messageStatus = document.getElementById('messageStatus');
        let  res = await contract.readProductName(1);
        messageStatus.innerHTML = res
        //setbuttonText(res);	


    }

    
    return(
        <>
        <div className='Home'>
            <h1>譲渡アプリ</h1>
            <table align='center' border={1} id="product-table">
                <thead>
                    <tr>
                        <th>商品番号</th>
                        <th>商品名</th>
                        <th>商品分類</th>
                        <th>色</th>
                        <th>製造会社</th>
                        <th>製造日</th>
                        <th>購入日</th>
                    </tr>
                </thead>
                <tbody id = "tblbody">
                </tbody>

                
            </table>

            <p></p>
            <p></p>
        
            <div>

                登録は<Link to={`/TransferApplication/register`} >こちら</Link>
                
            </div>
            <div>
                貸出は<Link to={`/TransferApplication/borrow`}>こちら</Link>
                
            </div>
            <div>
                返品は<Link to={'/TransferApplication/returns'}>こちら</Link>
            </div>
        </div>
            
        </>
        
        
    );
    

    
}
//<Register contract={contract}/>


export default HomeSix;
//        <button id="retrieveButton" onClick={setData}>Retrieve</button>
