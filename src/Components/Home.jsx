import React from "react";
import { BookDoctor } from "./BookDoctor/BookDoctor";
import { VitalReport } from "./VitalReport/VitalReport";
import "./Home.css";
export const Home = () => {
  return (
    <div className="homeContainer">
      <h4>Welcome to Pharmacy pilot</h4>
      <VitalReport />
      <div style={{ height: 16 }}></div>
      <BookDoctor />
    </div>
  );
};
