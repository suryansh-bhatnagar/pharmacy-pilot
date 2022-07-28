import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

export const BookDoctor = () => {
  return (
    <Link
      style={{
        color: "white",
        textDecoration: "none",
        backgroundColor: "blue",
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 25,
        display: "inline-block",
        width: "50vh",
        textAlign: "center",
      }}
      to="./consultingcharges"
    >
      BookDoctor
    </Link>
  );
};
