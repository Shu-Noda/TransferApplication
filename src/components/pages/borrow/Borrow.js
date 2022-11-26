import React, {useState,useEffect} from'react'
import { Link } from "react-router-dom";
import '../../layout/App.css';

function Borrow(props){

  const protable = document.getElementById('product-table');
  const tblbody = document.getElementById('tblbody');
  const didEffect = React.useRef(false);
  const {contract, setContract} = props;
  const [newOwner, setNewOwner] = useState(null);



  useEffect(() =>{
        
    const setData = async()=> {
        if (!didEffect.current) {
            didEffect.current = true;

            
          try{
              const tblbody = document.getElementById('tblbody');

    
              var product_total = await contract.getCode();

              for(let num = 1; num <=product_total;num++){
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
              const selectProduct = document.getElementById('product-select');

              for(let num2=1;num2<=product_total;num2++){
                if(await contract.readFlag(num2)== true){
                  continue;
                }
                const option1 = document.createElement('option');
                option1.value = num2
                option1.textContent = num2+ "," + await contract.readProductName(num2);

                selectProduct.appendChild(option1);


              }
          }catch(error){
            console.error(error);
          }
        } 

        
    }
    setData();

}, []);
  const clickBorrow = async() =>{
    const selection = document.getElementById('product-select').value;
    setNewOwner(newOwner);

    await contract.changeOwner(selection,newOwner);

    setTimeout(function(){
      window.location.href = 'http://localhost:3000/cor';
    }, 2*1000);



  }


  return (
    <>
    <div className='Borrow'>
      <h1>商品貸出</h1>
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

      <select id="product-select"></select>
      <form>
        <label>名前:</label>
        <input type="text" value={newOwner} onChange={(event) => setNewOwner(event.target.value)}/>
      </form>
      <p></p>
      <button onClick={clickBorrow}>借りる</button>



      <div>
        新規登録は<Link to={`/TransferApplication/register`}>こちら</Link>
      </div>
      <div>
        <Link to={"/TransferApplication/home6"}>ホームに戻る</Link>
      </div>
    </div>
    </>
  );
};

export default Borrow;