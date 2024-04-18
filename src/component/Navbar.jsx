import React from "react";
import SignIn from "./Signin/SignIn";
import "/Navbar.css";
import SignUp from "./SignUp/SignUp";

function Navbar() {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center px-3 py-2 shadow-sm     " 
      
      style={{
        height:"72px"
      }}
      >
        <div className="  px-3 py-2">ATG WORLD</div>

        <div className="position-relative w-360 h-42">
          <span
            className="bi bi-search position-absolute translate-middle-y p-2"
            style={{
              width: "22px",
              height: "22px",

              left: "11px",
              top: "32%",
            }}
          ></span>
          <input
            type="text"
            className="form-control ps-5 rounded-pill    "
            placeholder="Search for your favorite groups in ATG"
            style={{
              backgroundColor: "#F2F2F2",
              height: "42px",
              width: "360px",
              color: " #5C5C5C",
            }}
          />
        </div>

        <div className="d-flex align-content-center  ">
          <span className="fs-6 me-2">Create account.</span>
          <div className="dropdown">
            <a
              href="#"
              className="btn dropdown-toggle border-0 p-0  ms-2 mb-3 text-primary "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              It's free!
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#signUp"
                >
                  Sing Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center">
          <div
            className="modal-content"
            style={{
              width: "736px",
              boxShadow: " 0px 8px 24px 0px #00000040",
            }}
          >
            <div className="modal-header border-0 ">
              <p
                className="modal-title    "
                id="exampleModalLabel"
                style={{
                  color: "#008A45",
                  fontSize: "14px",
                }}
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
              <button
                type="button"
                className="btn-close rounded-pill  "
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  position: "relative",
                  left: "20px",
                  top: "-55px",
                  backgroundColor: "#FFFFFF",

                  fontSize: "10px",
                }}
              ></button>
            </div>
            <div className="modal-body p-4">
              <SignIn />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade "
        id="signUp"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center">
          <div
            className="modal-content"
            style={{
              width: "736px",
              boxShadow: " 0px 8px 24px 0px #00000040",
            }}
          >
            <div className="modal-header border-0 ">
              <p
                className="modal-title    "
                id="exampleModalLabel"
                style={{
                  color: "#008A45",
                  fontSize: "14px",
                }}
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
              <button
                type="button"
                className="btn-close rounded-pill  "
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  position: "relative",
                  left: "20px",
                  top: "-55px",
                  backgroundColor: "#FFFFFF",

                  fontSize: "10px",
                }}
              ></button>
            </div>
            <div className="modal-body p-4">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
