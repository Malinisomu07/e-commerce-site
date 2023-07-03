import product1Image from "../assets/explore-img/earbuds.png";
import product2Image from "../assets/explore-img/headphone.png";
import product3Image from "../assets/explore-img/keyboard.png";
import product4Image from "../assets/explore-img/macbook.png";
import product5Image from "../assets/explore-img/remote.png";
import product6Image from "../assets/explore-img/smartwatch.png";

const ProductExplorer = {
  products: [
    {
      className: "product-item",
      imgSrc: product1Image,
      imgAlt: "Product 1",
      title: "Bluetooth Earbuds",
      content: "Wireless earbuds with Bluetooth connectivity.",
    },
    {
      className: "product-item",
      imgSrc: product2Image,
      imgAlt: "Product 2",
      title: "Headphone Wireless",
      content: "Wireless headphones for a tangle-free listening experience.",
    },
    {
      className: "product-item",
      imgSrc: product3Image,
      imgAlt: "Product 3",
      title: "Keyboard",
      content: "A standard keyboard for typing and inputting commands.",
    },
    {
      className: "product-item",
      imgSrc: product4Image,
      imgAlt: "Product 4",
      title: "MacBook",
      content: "A portable and powerful laptop computer designed by Apple.",
    },
    {
      className: "product-item",
      imgSrc: product5Image,
      imgAlt: "Product 5",
      title: "Remote",
      content: "A device for controlling electronic devices from a distance.",
    },
    {
      className: "product-item",
      imgSrc: product6Image,
      imgAlt: "Product 6",
      title: "Smart Watch",
      content: "A wearable device with various functionalities like tracking fitness and receiving notifications.",
    },
  ],
};

export default ProductExplorer;
