import React, { createContext, useReducer, useContext } from "react";
const dataProvider = createContext([]);

const Initializer = (props)=>{
    const initialValue = [ ];
    const orderValue = [ ];
    const[cartInfo, setcartInfo] = useReducer(cartOperation, initialValue);
    const[placeOrder, setplaceOrder] = useReducer(orderDetails, orderValue);

    console.log("orderdata",placeOrder )
    function orderDetails(orderValue, order) {
      switch (order.type) {
        case "ADD_ORDER":
          return [...orderValue, order.payload];
        default:
          return orderValue;
      }
    }

    function addOrder(orderData) {
      setplaceOrder({ type: "ADD_ORDER", payload: orderData });
    }



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
        console.log("initial", initialvalue);
      
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
            initialvalue.push({ "id": operation.id, "count": 1, "price":operation.price });
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
        else if(operation.action=="clearCart"){
          return [];
        }
      
        console.log('asda', initialvalue);
        console.log('123', operation);
      }
      
      function addtoCart(id,price) {
        console.log("price", price)
        setcartInfo({ action: "add", id: id, "price":price });
      }
      
      function updateCount(id,count) {
        setcartInfo({ action: "updateCount","count": count,"id":id });
      }
      
      function removeFromCart(id) {
        setcartInfo({ action: "remove", id: id });
      }

      function clearCart() {
        setcartInfo({ action: "clearCart" });
      }
      
    
     

return(<>
    <dataProvider.Provider value={{addtoCart,cartInfo,removeFromCart,updateCount, addOrder,clearCart }}>
            {props.children}
    </dataProvider.Provider>
</>)
}
export{Initializer,dataProvider}