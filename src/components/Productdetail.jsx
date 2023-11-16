/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Access the 'id' parameter from the route
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail flex flex-row">
      <img src={product.image} alt={product.title} className="w-90 p-10" />
      <div className="inside">
        <h2 className="pt-5 pb-1 text-gray-500 mb-12">{product.title}</h2>
        <p className="pb-5">Category: {product.category}</p>
        <text>{<br></br>} </text>{" "}
        {/* Used to Break a line. text tag along with */}
        <p className="price-tag text-2xl font-bold pb-10">
          Price: ${product.price}
        </p>
        <p className="description pb-10">Description: {product.description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Order Now
        </button>
        &nbsp;
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
