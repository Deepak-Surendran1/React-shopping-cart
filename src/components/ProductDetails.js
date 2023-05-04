import React from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Rating from "./Rating";
import { Button } from "react-bootstrap";
const ProductDetails = () => {
  const { id } = useParams();
  const {
    state: { products, cart },
    dispatch,
  } = CartState();
  console.log(products);
  const prod = products.find((item) => item.id === id);
  console.log("peod=>", prod);
  console.log("peodName=>", prod.name);
  let cartItem = cart.find((p) => p.id === prod.id);
  return (
    <div className="product-details">
      <div className="image">
        <img src={prod.image} alt="image" />
      </div>
      <div className="details">
        <h3>{prod.name}</h3>
        <div className="rating">
          <Rating rating={prod.ratings} />
        </div>
        <p className="price">₹ {prod.price}</p>
        {cartItem ? (
          <div>
            <Button
              className="qty-button"
              onClick={() => {
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: cartItem.qty - 1,
                  },
                });
              }}
            >
              -
            </Button>
            <span style={{ display: "inline-block", width: "20px",textAlign:'center' }}>
              {cartItem.qty}
            </span>
            <Button
              className="qty-button"
              onClick={() => {
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: cartItem.qty + 1,
                  },
                });
              }}
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
            disabled={!prod.inStock}
          >
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        )}
        <div className="description">
          <h5>Description</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. officia deserunt mollit anim id est
          laborum.
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
