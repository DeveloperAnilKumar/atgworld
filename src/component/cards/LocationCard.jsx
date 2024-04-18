import React from "react";

function LocationCard() {
  return (
    <div>
      <div
        className="position-relative input-group  "
        style={{
          borderBottom: "1px solid black",
          width: "243px",
        }}
      >
        <span className="bi bi-geo-alt input-group-text bg-white border-0 " style={{
          marginLeft:"-10px"
        }} ></span>
        <input
          type="text"
          className="form-control   border-start-0 border-top-0 border-end-0 "
          placeholder="Noida, India"
        />
        <span className=" bi bi-pencil bg-white border-0     input-group-text  "></span>
      </div>

      <div className="mt-4">
        <span className="bi bi-info-circle"> </span>{" "}
        <span className="ms-1">Your location will help us serve better </span>
        <div className="ms-4">and extend a personalised experience.</div>
      </div>
    </div>
  );
}

export default LocationCard;
