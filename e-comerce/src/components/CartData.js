import { useContext } from "react";
import { dataProvider } from "./reducer's/initialreducer";

const data = {
    products: [
      {
        id: '1',
        name: 'Books',
        price: 400,
        image: './img/novel.jpg',
       
        count:1,
      },
      {
        id: '2',
        name: 'Dress',
        price: 2400,
        image: './img/dress.jpg',
        count:1,
      },
      {
        id: '3',
        name: 'Car ',
        price: 1000,
        image: './img/car-3.webp',
        count:1,
      },
      {
        id: '4',
        name: 'Head-phone',
        price: 400,
        image: './img/headphone-1.jpg',
        count:1,
      },
      {
        id: '5',
        name: 'Ear-Phone',
        price: 700,
        image: './img/headphone-2.jpg',
        count:1,
      },
      {
        id: '6',
        name: 'new headphone',
        price: 900,
        image: './img/headphone-3.jpg',
        count:1,
      },
    ],
  };


function Store() {
    const {info,setInfo,addtocart} = useContext(dataProvider)
    console.log(info);
    return(<>
    <div className="store">
    {data.products.map((product)=>{
      console.log(product);
                return (<>
                    <div className="product" key={product.id}>
                        <img src={product.image} className="product-img"/>
                        <h2>{product.name}</h2>
                        <h3>Rs.{product.price}</h3>
                        <button onClick={()=>{addtocart(product,product.price)}}>Add to cart</button>
                    </div>
                </>)
            })}
    </div>
    </>)
}

export{Store}