/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white rounded-lg shadow-md p-4" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 drop-shadow-2xl hover:shadow-2xl"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
