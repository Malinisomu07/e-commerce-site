import { useContext, useEffect, useState } from "react"
import { dataProvider } from "./reducer's/initialreducer"


function Cart() {
    const {info,removeItem,setInfo}= useContext(dataProvider);
    // const cartTotal = info.reduce((total, { price = 0 }) => total + price, 0);
    
    const[totalamt,setTotalamt]= useState(0)

    function handle() {
        let multiply = 0;
        info.forEach((item)=>{
            multiply += item.price * item.count;
        })
        setTotalamt(multiply);
    }

    useEffect(()=>{
        handle();
    })

    function increase(item,d) {
        const ind = info.indexOf(item);
        const arr = info;
        arr[ind].count += d;
    
        if (arr[ind].count === 0) arr[ind].count = 1;
        setInfo({type:"count increase",value:arr})
    }

    function decrease(item,d) {
        const ind = info.indexOf(item);
        const arr = info;
        arr[ind].count += d;
    
        if (arr[ind].count === 0) arr[ind].count = 1;
        setInfo({type:"count increase",value:arr})
    }


    return(<>
    
<div className="cart-page">
    
 {info.map((cart) => { 
    console.log(cart);
    return <div className="cart"  key={Math.round(Math.random()*1000)}>
        <div className="cart-img">
            <img src={cart.image} />
            <h2>{cart.name}</h2>
        </div>
        
        <div className="cart-btns">
            <button onClick={()=>{increase(cart,1)}}>+</button>
            <span>{cart.count}</span>
            <button onClick={()=>{decrease(cart,-1)}}>-</button>
        </div>
        <h2>Price:{cart.price}</h2>
        <button className="remove-btn" onClick={() => { removeItem(cart) }}>Remove</button>


    </div>
    
})}
<div className="total">
    <h2>Total : Rs. {totalamt}</h2>
</div>  
</div>
    </>)
}

export{Cart}