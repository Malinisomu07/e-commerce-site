import  product1Image from "../assets/Gaming Accessories.png";
import product2Image from "../assets/Fashion trends you like.png";
import product3Image from "../assets/Home & Kitchen.png";
import  product4Image from "../assets/For your Fitness Needs.png";
import  product5Image from "../assets/Toys.png";
import product6Image from "../assets/Care Products.png";
import  product7Image from "../assets/books.png";
import  product8Image from "../assets/Electronics.png";
import  product9Image from "../assets/Cloths.png";
import product10Image from "../assets/water bottles.png";


const ProductslistData = 
  [
    {
      "ID": 234545,
      "Picurl": [
        "https://www.flipkart.com/",
        "https://www.flipkart.com/",
        "https://www.flipkart.com/",
        "https://www.flipkart.com/"
      ],
      "Name": "Powerbank",
      "Price": {
        "Original Price": 12000,
        "Offer Price": 2000
      },
      "Description": "gsgdfgfgsdf",
      "Rating": {
        "Star": "1-5",
        "Description": {
          "1": "asdfasdf",
          "2": "Sdfsdfsdf"
        }
      },
      "Stock": 89
    },
    {
      "ID": 123456,
      "Picurl": [
        "https://www.example.com/product1_image1.jpg",
        "https://www.example.com/product1_image2.jpg"
      ],
      "Name": "Product 1",
      "Price": {
        "Original Price": 5000,
        "Offer Price": 3500
      },
      "Description": "This is the description for Product 1.",
      "Rating": {
        "Star": "4.5",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 20
    },
    {
      "ID": 987654,
      "Picurl": [
        "https://www.example.com/product2_image1.jpg",
        "https://www.example.com/product2_image2.jpg",
        "https://www.example.com/product2_image3.jpg"
      ],
      "Name": "Product 2",
      "Price": {
        "Original Price": 8000,
        "Offer Price": 6000
      },
      "Description": "This is the description for Product 2.",
      "Rating": {
        "Star": "3.8",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 15
    },
    {
      "ID": 456789,
      "Picurl": [
        "https://www.example.com/product3_image1.jpg"
      ],
      "Name": "Product 3",
      "Price": {
        "Original Price": 3500,
        "Offer Price": 2500
      },
      "Description": "This is the description for Product 3.",
      "Rating": {
        "Star": "4.2",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 8
    },
    {
      "ID": 987123,
      "Picurl": [
        "https://www.example.com/product4_image1.jpg",
        "https://www.example.com/product4_image2.jpg"
      ],
      "Name": "Product 4",
      "Price": {
        "Original Price": 6000,
        "Offer Price": 4000
      },
      "Description": "This is the description for Product 4.",
      "Rating": {
        "Star": "4.7",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 12
    },
    {
      "ID": 789456,
      "Picurl": [
        "https://www.example.com/product5_image1.jpg"
      ],
      "Name": "Product 5",
      "Price": {
        "Original Price": 4500,
        "Offer Price": 3000
      },
      "Description": "This is the description for Product 5.",
      "Rating": {
        "Star": "4.9",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 5
    },
    {
      "ID": 654321,
      "Picurl": [
        "https://www.example.com/product6_image1.jpg",
        "https://www.example.com/product6_image2.jpg",
        "https://www.example.com/product6_image3.jpg"
      ],
      "Name": "Product 6",
      "Price": {
        "Original Price": 7000,
        "Offer Price": 5500
      },
      "Description": "This is the description for Product 6.",
      "Rating": {
        "Star": "3.5",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 18
    },
    {
      "ID": 321654,
      "Picurl": [
        "https://www.example.com/product7_image1.jpg"
      ],
      "Name": "Product 7",
      "Price": {
        "Original Price": 2500,
        "Offer Price": 1800
      },
      "Description": "This is the description for Product 7.",
      "Rating": {
        "Star": "4.3",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 10
    },
    {
      "ID": 789123,
      "Picurl": [
        "https://www.example.com/product8_image1.jpg",
        "https://www.example.com/product8_image2.jpg",
        "https://www.example.com/product8_image3.jpg"
      ],
      "Name": "Product 8",
      "Price": {
        "Original Price": 5500,
        "Offer Price": 4000
      },
      "Description": "This is the description for Product 8.",
      "Rating": {
        "Star": "4.6",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 7
    },
    {
      "ID": 456789,
      "Picurl": [
        "https://www.example.com/product9_image1.jpg",
        "https://www.example.com/product9_image2.jpg"
      ],
      "Name": "Product 9",
      "Price": {
        "Original Price": 4800,
        "Offer Price": 3500
      },
      "Description": "This is the description for Product 9.",
      "Rating": {
        "Star": "4.2",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 14
    },
    {
      "ID": 987321,
      "Picurl": [
        "https://www.example.com/product10_image1.jpg"
      ],
      "Name": "Product 10",
      "Price": {
        "Original Price": 3000,
        "Offer Price": 2500
      },
      "Description": "This is the description for Product 10.",
      "Rating": {
        "Star": "3.9",
        "Description": {
          "1": "Poor",
          "2": "Average",
          "3": "Good",
          "4": "Very Good",
          "5": "Excellent"
        }
      },
      "Stock": 9
    }
  ]
  



export default ProductslistData;