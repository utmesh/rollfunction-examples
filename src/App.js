import React from "react";
import "./styles.css";

export default function App() {
  function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
  }

  let possibleProducts = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r"
  ];
  /* ...(sread operator) provides multiple elements for array */
  /** _ maeans we don't need any values*/

  let products = [...Array(5)].map((_, i) => {
    return {
      index: i,
      title: possibleProducts[roll(0, possibleProducts.length)],
      price: roll(1, 10, 1).toFixed(2),
      count: roll(1, 6)
    };
  });
  console.log(products);

  let productsElement = document.getElementById("Products");
  let cartHtml = "";
  products.forEach(function(product) {
    cartHtml += `<div class="product">
              <div>${product.title}</div>
              <div>$${product.price}</div>
              <div>x${product.count}</div>
    </div>`;
  });

  productsElement.innerHTML = cartHtml;

  return (
    <div className="App">
      <header>Shopping Cart</header>
      <main id="ShoppingCart">
        <div id="Products" />
      </main>
      <footer>Course by Radical-Coder and You!</footer>
    </div>
  );
}
