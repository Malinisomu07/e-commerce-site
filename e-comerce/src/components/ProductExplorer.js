import product1Image from "../assets/explore-img/earbuds.png";
import product2Image from "../assets/explore-img/headphone.png";
import product3Image from "../assets/explore-img/keyboard.png";
import product4Image from "../assets/explore-img/macbook.png";
import product5Image from "../assets/explore-img/remote.png";
import product6Image from "../assets/explore-img/smartwatch.png";

const ProductExplorer = {
  products: [
    {
      "ID": 234545,
      className: "product-item",
      imgSrc: product1Image,
      imgAlt: "Product 1",
      title: "Bluetooth Earbuds",
      content: "Wireless earbuds with Bluetooth connectivity.",
      buttonText: "View More"
    },
    {
      "ID": 123456,
      className: "product-item",
      imgSrc: product2Image,
      imgAlt: "Product 2",
      title: "Headphone Wireless",
      content: " headphones for a tangle-free listening experience.",
      buttonText: "View More"
    },
    {
      "ID": 987654,
      className: "product-item",
      imgSrc: product3Image,
      imgAlt: "Product 3",
      title: "Keyboard",
      content: "A standard keyboard for typing and inputting commands.",
      buttonText: "View More"
    },
    {
      "ID": 456789,
      className: "product-item",
      imgSrc: product4Image,
      imgAlt: "Product 4",
      title: "MacBook",
      content: "A portable and powerful laptop computer designed by Apple.",
      buttonText: "View More"
    },
    {
      "ID": 987123,
      className: "product-item",
      imgSrc: product5Image,
      imgAlt: "Product 5",
      title: "Remote",
      content: "A device for controlling electronic devices from a distance.",
      buttonText: "View More"
    },
    {
      "ID": 789456,
      className: "product-item",
      imgSrc: product6Image,
      imgAlt: "Product 6",
      title: "Smart Watch",
      content: "Device with various functionalities like tracking fitness and notifications.",
      buttonText: "View More"
    },
  ],
};

export default ProductExplorer;
