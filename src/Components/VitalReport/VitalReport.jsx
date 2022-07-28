import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
export const VitalReport = () => {
  return (
    <div>
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
        to="/vitalform"
      >
        Create vital report
      </Link>
    </div>
  );
};
