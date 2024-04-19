import React, { useEffect, useState } from "react";

import "./Navbar.css";
import SignIn from "../Signin/SignIn";
import SignUp from "../SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/redux/authSlice";

function Navbar() {
  const { user, isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <>
      <header
        className="  d-flex justify-content-between align-items-center   px-3 py-2 shadow-sm     "
        style={{
          height: "72px",
        }}
      >
        <div className="  px-3 py-2">
          <span className="site-title"> ATG.</span>
          <span className=" site-sub ">
            W<img src="images/log.png" />
            RLD
          </span>
        </div>

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

        {!isLogin == true ? (
          <div className="d-flex align-content-center mt-3  ">
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
        ) : (
          <div className="d-flex align-content-center mt-3  ">
            <div className="dropdown">
              <a
                href="#"
                className="btn dropdown-toggle  border-0 p-0  ms-2 mb-3 text-black "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.avatar_img}
                  width="36"
                  height="36"
                  className="rounded-pill object-fit-cover"
                  alt="ico"
                />
                <span
                  className="ms-2"
                  style={{
                    fontSize: "14px",
                    color: "#000000",
                  }}
                >
                  {" "}
                  {user?.username}{" "}
                </span>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MyAccount
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => dispatch(logoutUser())}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>

      {isLogin == true ? (
        " "
      ) : (
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
                  computer engineering.{" "}
                  <button
                    style={{
                      color: "#008A45",
                      fontSize: "14px",
                      backgroundColor: "#effff4",
                    }}
                    className="bt btn-link  text-decoration-none border-0 "
                    data-bs-toggle="modal"
                    data-bs-target="#signUp"
                  >
                    Sign up now 🤘🏼
                  </button>
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
      )}

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
                computer engineering.
                <button
                  style={{
                    color: "#008A45",
                    fontSize: "14px",
                    backgroundColor: "#effff4",
                  }}
                  className="bt btn-link  text-decoration-none border-0 "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Sign in now 🤘🏼
                </button>
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
