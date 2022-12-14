import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../../layout/App.css';

function Returns(props){

    const {contract, setContract} = props;
    const didEffect = React.useRef(false);


    useEffect(() =>{
        
        const setData = async()=> {
            if (!didEffect.current) {
                didEffect.current = true;
                
            try{
                const tblbody = document.getElementById('tblbody');

                var product_total = await contract.getCode();

        
                for(let num = 1; num <= product_total;num++){
                    if(await contract.readBelongings(num)== false){
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


    return(
        <>
        <div className='Returns'>
            <h1>???????????????</h1>
            <p>??????????????????????????????</p>
            <table align='center' border={1} id="product-table">
                <thead>
                    <tr>
                        <th>????????????</th>
                        <th>?????????</th>
                        <th>????????????</th>
                        <th>???</th>
                        <th>????????????</th>
                        <th>?????????</th>
                        <th>?????????</th>
                    </tr>
                </thead>
                <tbody id = "tblbody">
                </tbody>

                
            </table>

            <p></p>

            <Link to={'/TransferApplication/home6'}>?????????</Link>?????????



        </div>
        </>
    )


}

export default Returns;