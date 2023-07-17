import React, { createContext, useEffect, useReducer, useState } from "react";

const dataProvider = createContext([]);


const Supplier = (props)=>{
    const[warn,setwarn]=useState(false);
    const initialvalue = [
    ]

    const[info,setInfo] = useReducer(myfun,initialvalue);
   

    function myfun(state,action) {
        switch (action.type) {
            case "add":
                // let isPresent = false;
                // state.forEach((s)=>{
                //     console.log(s);
                // })
                // return(state.forEach((s)=>{
                    
                // }),
                let isPresent = false;
		state.forEach((pro)=>{
			if (pro.id === action.value.id)
			isPresent = true;
		})
		if (isPresent){
            setwarn(true);
            setTimeout(()=>{
                setwarn(false)
            },2000)
            return([...state]);
		}
                   return( [...state,action.value])
                break;
            case "delete":
                const ans = state.filter((it)=>it.id !== action.value.id);
                return(ans);
            case "count increase":
                // console.log('action.value');
                return([...action.value])
        
            default:
                return state;
        }
    }

    const value = {info,setInfo}

    function addtocart(product) {
        setInfo({type:"add",value:product})
    }
    
    function removeItem(product) {
        setInfo({type:"delete",value:product})

        // console.log(product.id);
    }


    return(<>
        <dataProvider.Provider value={{info,setInfo,addtocart,removeItem,warn,setwarn}}>
                {props.children}
        </dataProvider.Provider>
    </>)


}

export{Supplier,dataProvider}