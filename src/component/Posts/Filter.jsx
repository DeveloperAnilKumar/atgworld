import React from "react";
import "./Filter.css";
import { useSelector } from "react-redux";

function Filter() {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <div className=" container-fluid ">
      <div
        className="d-flex justify-content-between align-content-center flex-wrap px-4 "
        style={{
          marginTop: "50px",
          borderBottom: "1px solid #E0E0E0",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
          }}
        >
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

        <div className="d-flex   ">
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
              style={{
                fontSize: "15px",
              }}
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

          {isLogin === true ? (
            <button
              className="btn  rounded-0"
              style={{
                fontSize: "15px",
                border: "0.8px solid #989899",
              }}
            >
              <span className="bi bi-box-arrow-in-right me-2"></span> Leave
              Group{" "}
            </button>
          ) : (
            <button
              className="btn btn-primary rounded-0"
              style={{
                fontSize: "15px",
              }}
            >
              <span className="bi bi-person-fill-add me-2"></span> Join Group{" "}
            </button>
          )}
        </div>
      </div>

      <div
        className="d-flex justify-content-between  align-items-center mt-2 d-md-none d-sm-block"
        style={{
          borderBottom: "1px solid #E0E0E0",
          paddingBottom: "10px",
        }}
      >
        <p
          style={{
            color: "#212529",
            fontWeight: "600",
            marginTop: "20px",
          }}
        >
          Posts(368)
        </p>

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
