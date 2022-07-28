import React from "react";
import { BookDoctor } from "./BookDoctor/BookDoctor";
import { VitalReport } from "./VitalReport/VitalReport";
import "./Home.css";
export const Home = () => {
  return (
    <div className="homeContainer">
      <VitalReport />
      <div style={{ height: 16 }}></div>
      <BookDoctor />
    </div>
  );
};
