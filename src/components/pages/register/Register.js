import { Link } from "react-router-dom";
import React, {useState} from'react'


function Register(props){
  const [productname, setProductName] = useState(null);
  const [classnum, setClassNum] = useState(null);
  const [color, setColor] = useState(null);
  const [company, setCompany] = useState(null);
  const [manudate, setManuDate] = useState(null);
  const [purdate, setPurDate] = useState(null);
  const [name, setName] = useState(null);
  const [errorMessage,setErrorMessage] = useState(null);
  const {contract, setContract} = props;


  const setHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				//accountChangedHandler(result[0]);
                //console.log("window.ethereum is called to check if wallet is installed in your browser, and connects to this page");
                //console.log("Address obtained from wallet - " + result[0]);
				//setConnButtonText('Wallet Connected');
          //      allowStepTwo(true);
			})
			.catch(error => {
				//setErrorMessage(error.message);
			});
    }
    setProductName(productname);
    setClassNum(classnum);
    setColor(color);
    setCompany(company);
    setManuDate(manudate);
    setPurDate(purdate);
    setName(name);
    
    await contract.register(classnum,productname,color,company,manudate,purdate,name);

    setErrorMessage("finish");
  };

  return (
    <>
      <h1>譲渡品登録ページ</h1>
      <div>
        <Link to={`/TransferApplication/home6`}>ホームに戻る</Link>
      </div>

      <div>
                <p></p>
                <label for="register">登録</label>
                <form>
                <label>商品名:</label>
                <input type="text" value={productname} onChange={(event) => setProductName(event.target.value)}/>
                <label>商品分類:</label>
                <input type="text" value={classnum}  onChange={(event) => setClassNum(event.target.value)}/>
                <label>色:</label>
                <input type="text" value={color}  onChange={(event) => setColor(event.target.value)}/>
                <label>企業名:</label>
                <input type="text" value={company} onChange={(event) => setCompany(event.target.value)}/>
                <label>製造日:</label>
                <input type="text" value={manudate}  onChange={(event) => setManuDate(event.target.value)}/>
                <label>購入日:</label>
                <input type="text" value={purdate} onChange={(event) => setPurDate(event.target.value)}/>
                <label>名前:</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </form>
                <button onClick={setHandler}>Register</button>

                {errorMessage}
      </div>

    
    </>
  );
};
/*<div>
                <p></p>
                <label for="register">登録</label>
                <form>
                <label>商品名:</label>
                <input type="text" value={productname} onChange={(event) => setProductName(event.target.value)}/>
                <label>商品分類:</label>
                <input type="text" value={classnum}  onChange={(event) => setClassNum(event.target.value)}/>
                <label>色:</label>
                <input type="text" value={color}  onChange={(event) => setColor(event.target.value)}/>
                <label>企業名:</label>
                <input type="text" value={company} onChange={(event) => setCompany(event.target.value)}/>
                <label>製造日:</label>
                <input type="text" value={manudate}  onChange={(event) => setManuDate(event.target.value)}/>
                <label>購入日:</label>
                <input type="text" value={purdate} onChange={(event) => setPurDate(event.target.value)}/>
                <label>名前:</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </form>
                <button onClick={setHandler}>Register</button>
      </div>
*/
export default Register;