import React from "react";
import "./Signin.css";

function SignIn() {
  return (
    <div className="d-flex gap-4 ">
      <div className="loginCard">
        <h3 className="mb-3">Sign In</h3>

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
            }}
          />
          <span
            className="bi bi-eye input-group-text     "
            style={{
              background: " #F7F8FA",
            }}
          ></span>
        </div>
        <div>
          <button className="btn btn-primary w-100 rounded-5 mb-2  ">
            Sign In
          </button>
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

      <div className="">
        <div
          className="mb-3"
          style={{
            fontSize: "13px",
            textAlign: "right",
          }}
        >
          Don’t have an account yet?{" "}
          <span className="text-info">Create new for free!</span>
        </div>

        <div className="img-card">
          <img
            src="./images/v1.png"
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
