import React from'react'
import { useNavigate } from 'react-router-dom'

function COR(){

    const navigate = useNavigate()




    return(
        <>
        <div>
            <p>登録完了</p>
            <button onClick={() => navigate('/TransferApplication/home6')}>ホームへ戻る</button>

        </div>
        </>
    )
    


}
export default COR;