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

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const API = "https://fakestoreapi.com/products";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(API);
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const visibleProducts = products.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const previous = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   const next = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   return (
//     <div className="product-container">
//       {visibleProducts.map((product) => (
//         <Link to={`/product/${product.id}`} key={product.id}>
//           <div className="product-card">
//             <img src={product.image} alt={product.title} />
//             <h2>{product.title}</h2>
//             <hr />
//             <p className="price-tag">Price: ${product.price}</p>
//             <hr />
//             <p className="category">Category: {product.category}</p>
//             <hr />
//             <p className="description">Description: {product.description}</p>
//             <button>Order Now</button>
//           </div>
//         </Link>
//       ))}
//       <div className="buttons">
//         <button onClick={previous} disabled={page === 1}>
//           Previous
//         </button>
//         <button onClick={next} disabled={page === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
