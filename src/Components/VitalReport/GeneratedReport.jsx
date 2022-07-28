import React from "react";
import { useLocation } from "react-router-dom";

const GeneratedReport = () => {
  const { state } = useLocation();
  console.log(state, ">>>>STATE");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const id = first;
  //     const url = `https://staging.medbikri.com/consultation/generateReadingsReport?readingsId=62e00442641bb1f2e43409b4`;
  //     const response = await fetch(url, {
  //       method: "GET",
  //     });
  //     const json = await response.json();
  //     console.log(json, ">>>GET RESPONSE");
  //     setfirst(json.reportURL);
  //   };
  //   fetchData();
  // }, [state]);

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
        href={state.pdfUrl}
        target="_blank"
        rel="noreferrer"
      >
        Open Report pdf
      </a>
    </div>
  );
};

export default GeneratedReport;
