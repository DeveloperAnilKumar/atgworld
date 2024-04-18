import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className=" container-fluid ">
      <div
        className="d-flex justify-content-between align-content-center px-4 "
        style={{
          marginTop: "50px",
          borderBottom: "1px solid #E0E0E0",
          paddingBottom: "10px",
        }}
      >
        <div>
          <span
            className="me-3 fw-bold"
            style={{
              borderBottom: "1px solid #000000",
              padding: "24px",
            }}
          >
            All Posts(32)
          </span>
          <span className="me-3">Article</span>
          <span className="me-3">Event</span>
          <span className="me-3">Education</span>
          <span className="me-3"> Job</span>
        </div>

        <div className="d-flex">
          <div
            className="dropdown rounded-0"
            style={{
              background: "gray",
              marginRight: "10px",
              backgroundColor: "#EDEEF0",
            }}
          >
            <a
              className="btn btn-bg-secondary-subtle dropdown-toggle rounded-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="me-2">Write a Post</span>
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Create Post
                </a>
              </li>
            </ul>
          </div>

          <button className="btn btn-primary rounded-0">
            <span className="bi bi-person-fill-add me-2"></span> Join Group{" "}
          </button>
        </div>
      </div>

      <div
        className="d-flex justify-content-between px-4 mt-2 d-md-none d-sm-block"
        style={{
          borderBottom: "1px solid #E0E0E0",
          paddingBottom: "10px",
        }}
      >
        <p>Posts(368)</p>

        <div
          className="dropdown rounded-0"
          style={{
            background: "gray",
            marginRight: "10px",
            backgroundColor: "#EDEEF0",
          }}
        >
          <a
            className="btn btn-bg-secondary-subtle dropdown-toggle rounded-0"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="me-2">Filter All</span>
          </a>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Create Post
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
