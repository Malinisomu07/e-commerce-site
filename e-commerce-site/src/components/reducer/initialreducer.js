import React, { createContext, useReducer, useContext } from "react";
const dataProvider = createContext([]);

const Initializer = (props)=>{
    const initialValue = [
         {
           "id": "987123",
            "count": 1
        },   
           {
            "id": "234545",
             "count": 2
         }
    ]
    const[cartInfo, setcartInfo] = useReducer(cartOperation, initialValue);

    function CheckID(items, id) {
        if (!Array.isArray(items)) {
          console.log("Error: 'items' is not an array.");
          return false;
        }
      
        // Use Array.some to check if any item has the provided 'id'
        const hasId = items.some(item => item.id === id);
      
        // Log the 'items' array
        console.log(items);
      
        // Return the result (true if a match was found, false otherwise)
        return hasId;
      }
      
    

      function cartOperation(initialvalue, operation) {
        console.log("op", initialvalue);
      
        if (operation.action === 'add') {
          if (CheckID(initialvalue, operation.id)) {
            console.log("Before", initialvalue);
            return initialvalue.map(item => {
              if (item.id === operation.id) {
                return { ...item, count: item.count + 1 };
              }
              return item;
            });
          } else {
            initialvalue.push({ "id": operation.id, "count": 1 });
            alert('Item Added Successfully');
            return initialvalue;
          }
        } else if (operation.action === "remove") {
          console.log("before remove", initialvalue);

          const updatedValue = initialvalue.filter(item => item.id !== operation.id);
          console.log("after remove", updatedValue);
          console.log("Item removed successfully");
          return updatedValue;
        } else if (operation.action === "updateCount") {
            console.log("updateCount", initialvalue);
            console.log("oprg",operation.id,operation.count)
            return initialvalue.map(item => {
                console.log(item.id === operation.id)
              if (item.id === operation.id) {
                return { ...item, count: operation.count }; // Update the count with the new value
              }
              return item;
            });
        }
      
        console.log('asda', initialvalue);
        console.log('123', operation);
      }
      
      function addtoCart(id) {
        setcartInfo({ action: "add", id: id });
      }
      
      function updateCount(id,count) {
        setcartInfo({ action: "updateCount","count": count,"id":id });
      }
      
      function removeFromCart(id) {
        setcartInfo({ action: "remove", id: id });
      }
      
    
     

return(<>
    <dataProvider.Provider value={{addtoCart,cartInfo,removeFromCart,updateCount }}>
            {props.children}
    </dataProvider.Provider>
</>)
}
export{Initializer,dataProvider}