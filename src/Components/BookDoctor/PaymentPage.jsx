import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
  console.log(state, ">>>Payment page");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <a
        className="webcastBtn"
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "blue",
          padding: "8px",
          fontWeight: "500",
        }}
        href={state.paymentUrl}
        target="_blank"
        rel="noreferrer"
      >
        Make payment
      </a>
    </div>
  );
};

export default PaymentPage;
