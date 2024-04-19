import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="banner ">
        <div className="d-sm-block d-md-none d-flex  justify-content-between align-items-center px-2 py-2  ">
          <div>
            <span className="bi bi-arrow-left text-white px-2 fw-bold "></span>
          </div>

          <div>
            <button
              className="btn btn-btn-outline-light text-white rounded-0 "
              style={{
                border: "0.8px solid #FFFFFF",
              }}
              data-bs-toggle="modal"
              data-bs-target="#mobileLogin"
            >
              Join Group
            </button>
          </div>
        </div>

        <div className="banner-content">
          <span>Computer Engineering</span>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>

      <div
        className="modal fade "
        id="mobileLogin"
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
              <p className="modal-title    " id="exampleModalLabel">
                Welcome Back
              </p>
              <button
                type="button"
                className="btn-close rounded-pill "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <div className="loginCard w-100">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                    style={{
                      background: " #F7F8FA",
                    }}
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-0 "
                    style={{
                      background: " #F7F8FA",
                      height: "40px",
                    }}
                  />
                  <span
                    className="bi bi-eye input-group-text     "
                    style={{
                      background: " #F7F8FA",
                      height: "40px",
                    }}
                  ></span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary  rounded-5   py-1 px-5 m-0  mb-2  ">
                    Sign In
                  </button>

                  <p
                    className="btn btn-link text-secondary text-capitalize "
                    data-bs-toggle="modal"
                    data-bs-target="#mobilSignUp"
                  >
                    {" "}
                    or create Account
                  </p>
                </div>

                <div>
                  <button className="btn btn-outline-secondary w-100 mb-2 rounded-0 ">
                    {" "}
                    <img
                      src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ubhr2TJv6qxs1jplnOHRKFVmYoIfA7uPzWGOxPo2sY~hhWC8wyd6r5nrdDs4Fa6fMGnJdyViPLK7Zm1dY-awGEDADJmiMCUiv8tJ7czJlIAOVCLPDXjbmc~x3R4RAIklWoXenLD~lHatGrWbhelwkanQh5gw3kzleHF6NPnNFHKtaMIyucsj0YwiQ1ddSKysnx1Xwa0oWBBF0nPvTIrNPDcTfL9pBEKj6PaRP9kJZX1UpfwCqpCIIyL3pYvT06TeWs3MF330xSEvdzvGpfNsI927prlV5KmIBFc9TC3GKPcXPhi9Mtj7a3K1PxfdqUiEhQCSmNU3wFWTy0WwIzkg3w__"
                      width="16"
                      height="16"
                      alt="icon"
                    />{" "}
                    <span className="ms-3">Sign in with Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary w-100 mb-2 rounded-0 ">
                    <img
                      src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                      alt="icon"
                      width="16"
                      height="16"
                    />
                    <span className="ms-3">Sign in with Google </span>
                  </button>
                </div>

                <p className="text-center fw-bold mt-3">Forgot Password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade "
        id="mobilSignUp"
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
                Create Account
              </p>
              <button
                type="button"
                className="btn-close rounded-pill  "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <div className="loginCard w-100 h-100">
                <h3 className="mb-3">Create Account</h3>

                <div className="d-flex">
                  <div>
                    <input
                      type="text"
                      placeholder="FirstName"
                      className="form-control rounded-0"
                      style={{
                        background: " #F7F8FA",
                        height: "40px",
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="LastName"
                      className="form-control rounded-0"
                      style={{
                        background: " #F7F8FA",
                        height: "40px",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                    style={{
                      background: " #F7F8FA",
                      height: "40px",
                    }}
                  />
                </div>
                <div className="input-group  ">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-0 "
                    style={{
                      background: " #F7F8FA",
                      height: "40px",
                    }}
                  />
                  <span
                    className="bi bi-eye input-group-text     "
                    style={{
                      background: " #F7F8FA",
                      height: "40px",
                    }}
                  ></span>
                </div>

                <div className="input-group mb-3 ">
                  <input
                    type="password"
                    placeholder="conformPassword"
                    className="form-control rounded-0 "
                    style={{
                      background: " #F7F8FA",
                      height: "40px",
                    }}
                  />
                  <span
                    className="bi bi-eye input-group-text     "
                    style={{
                      background: " #F7F8FA",
                    }}
                  ></span>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <button className="btn btn-primary  rounded-5 mb-2  ">
                    Create Account
                  </button>

                  <p
                    className="btn btn-link text-secondary text-capitalize"
                    data-bs-toggle="modal"
                    data-bs-target="#mobileLogin"
                  >
                    or, Sign In
                  </p>
                </div>

                <div>
                  <button className="btn btn-outline-secondary w-100 mt-3 mb-2 rounded-0 ">
                    {" "}
                    <img
                      src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ubhr2TJv6qxs1jplnOHRKFVmYoIfA7uPzWGOxPo2sY~hhWC8wyd6r5nrdDs4Fa6fMGnJdyViPLK7Zm1dY-awGEDADJmiMCUiv8tJ7czJlIAOVCLPDXjbmc~x3R4RAIklWoXenLD~lHatGrWbhelwkanQh5gw3kzleHF6NPnNFHKtaMIyucsj0YwiQ1ddSKysnx1Xwa0oWBBF0nPvTIrNPDcTfL9pBEKj6PaRP9kJZX1UpfwCqpCIIyL3pYvT06TeWs3MF330xSEvdzvGpfNsI927prlV5KmIBFc9TC3GKPcXPhi9Mtj7a3K1PxfdqUiEhQCSmNU3wFWTy0WwIzkg3w__"
                      width="16"
                      height="16"
                      alt="icon"
                    />{" "}
                    <span className="ms-3">Sign in with Facebook</span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary w-100 mb-2 rounded-0 ">
                    <img
                      src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                      alt="icon"
                      width="16"
                      height="16"
                    />
                    <span className="ms-3">Sign in with Google </span>
                  </button>
                </div>

                <p
                  className="text-center "
                  style={{
                    fontSize: "11px",
                    color: "#212529",
                  }}
                >
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
