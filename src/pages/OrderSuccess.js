import React from "react";
import "../styles/pages/OrderSuccess.css";
import Container from "@material-ui/core/Container";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
function OrderSuccess() {
  return (
    <>
      <div className="order-success" style={{ marginTop: "100px" }}>
        <Container>
          <h1>
            <CheckCircleIcon />
          </h1>
          <h1>Order Placed Successfully</h1>
          <p>
            Order is placed! you will be notified soon with the delivery
            detials.
          </p>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </Container>
      </div>
    </>
  );
}

export default OrderSuccess;
