import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import PageNavigation from "./PageNavigation";
import FormatPrice from "./helpers/FormatPrice";
import Myimage from "./Myimage";

import "./SingleProduct.css";
import AddToCart from "./AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="page">
        <div className="grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <Myimage imgs={image} />
          </div>

          {/* product data  */}
          <div className="product-data">
            <h2>{name}</h2>

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p className="des">{description}</p>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>

              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
