import React from "react";
const Heading = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#807b71",
          borderBottomWidth: 10,
          borderBottomColor: "#cfccc8",
          borderBottomStyle: "solid",
          padding: 20,
        }}
      >
        <div
          className="container"
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Arial",
          }}
        >
          <h1>Employee Directory</h1>
          <h4>
          Click on filter by heading or use the search box to narrow your results.
          </h4>
        </div>
      </div>
    </>
  );
};
export default Heading;