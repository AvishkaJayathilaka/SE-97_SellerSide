import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../Assets/cross_icon.png";


const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const apiUrl ="https://autopilot97-8dad7d99b556.herokuapp.com";

  const fetchInfo = () => {
    fetch(apiUrl +"/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch(apiUrl +"/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch(apiUrl +"/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Year</p>
        <p>Brand</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <div key={e.id} className="maped-item">
              <div className="listproduct-format-main listproduct-format">
                <img
                  className="listproduct-product-icon"
                  src={apiUrl + e.image}
                  alt=""
                />
                <p cartitems-product-title>{e.name}</p>
                <p>Rs: {e.new_price}</p>
                <p>{e.category}</p>
                <p>{e.model}</p>
                <p>{e.year}</p>
                <p>{e.brand}</p>
                
                <span
                  className="listproduct-remove-icon"
                  onClick={() => {
                    removeProduct(e.id);
                  }}
                  src={cross_icon}
                  alt=""
                >
                  ❌
                </span>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
