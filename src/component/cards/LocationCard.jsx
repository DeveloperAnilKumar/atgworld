import React from "react";
import { useSelector } from "react-redux";

function LocationCard() {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <div>
      <div
        className="position-relative input-group  "
        style={{
          borderBottom: "1px solid black",
          width: "243px",
        }}
      >
        <span
          className="bi bi-geo-alt input-group-text bg-white border-0 "
          style={{
            marginLeft: "-10px",
          }}
        ></span>
        <input
          type="text"
          className="form-control   border-start-0 border-top-0 border-end-0 "
          placeholder={`${
            !isLogin === true ? "Noida, India" : "Enter your location"
          }`}

          style={{
            fontSize:"14px"
          }}
        />
        <span
          className={`${
            isLogin === true ? "bi bi-x-lg" : "bi bi-pencil"
          }   bg-white border-0     input-group-text  `}
        ></span>
      </div>

      <div
        className="mt-5"
        style={{
          fontSize: "12px",
        }}
      >
        <span className="bi bi-info-circle"> </span>{" "}
        <span className="ms-1">Your location will help us serve better </span>
        <div className="ms-4">and extend a personalised experience.</div>
      </div>

      {isLogin && (
        <div className=" mt-5">
          <div
            style={{
              fontSize: "14px",
            }}
          >
            <span className="bi bi-hand-thumbs-up-fill ">
              {" "}
              <span className="text-uppercase ">REcommended Groups</span>{" "}
            </span>
          </div>

          <div
            className="d-flex justify-content-between mt-3 mb-3"
            style={{
              width: "240px",
            }}
          >
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fop1v-tsr0E-zMkZaGmjaIp5uD89UvbP4~fGfMRpACs6Ttt7HATQF5Ksu-7boMRuJU7ctzYNt6JpViG3Ppx0e3732sV~inssgQm9iPgCuTRlBfJ-wwZcoz8skCCUMK3TgplDVFKi5XvoXfprEo01qjznNZtsZSd3KZUWaYR~L3mtnkYhSyO3SS6k3ReYaCVSmjITMV2W6vxIenKvKH0V54t~Avhii~XfoCbtZj~MMnvP~TMEl~CZKBAy4PTnt-YqpLSCsvvL-~WjB2jTW-pS7MFqj1UwzeQ2FUgIXBefFlQvoLS6X8MGcBnu6wRAUEW7XOpzpVWwWRo5xQ6hhqDHLQ__"
                alt="avt"
                width="36"
                height="36"
                className="rounded-pill object-fit-cover"
              />{" "}
              <span
                className="ms-2"
                style={{
                  fontSize: "14px",
                }}
              >
                {" "}
                Leisure
              </span>
            </div>

            <div>
              <button
                className="text-decoration-none border-0 px-3 "
                style={{
                  background: "#EDEEF0",
                  textAlign: "center",
                  fontSize: "12px",
                  height: "24px",
                  borderRadius: "20px",
                }}
              >
                Follow
              </button>
            </div>
          </div>

          <div
            className="d-flex justify-content-between mb-3"
            style={{
              width: "240px",
            }}
          >
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qLkOJOs1rg97LGAAddeiPlDW7oEPGE6UwpaUtzS3NbFINsV3JqtXoRM6s1BQHsif7G0h7M9LNjd4rF9N~4dCCL6cMnlvht540-aAqJ1Emd~fCgRV95~q3pfJkJ4dEd8vrcoRK9qcEwNkKin-Oe06nE-klPhsCZXc5vdhJwmIKpB5dNpuBvWuToFo6s0o8pzO1RyqD-kmUBd~vjybVgZWbjkb36PqRSLVXzcrC5Dc~v9lW3e40qgW2WdaJbgTfPcqhFi6hPbvlxAF3qh31J2pHuF8xNGIXrOxncDw9QaTIUVUrPboFjVfez6-P8-8f7O4MybVnl0piwH~DyypPdQ~Kw__"
                alt="avt"
                width="36"
                height="36"
                className="rounded-pill object-fit-cover"
              />{" "}
              <span
                className="ms-2"
                style={{
                  fontSize: "14px",
                }}
              >
                {" "}
                Activism
              </span>
            </div>

            <div>
              <button
                className="text-decoration-none border-0 px-3 "
                style={{
                  background: "#EDEEF0",
                  textAlign: "center",
                  fontSize: "12px",
                  height: "24px",
                  borderRadius: "20px",
                }}
              >
                Follow
              </button>
            </div>
          </div>

          <div
            className="d-flex justify-content-between mb-3"
            style={{
              width: "240px",
            }}
          >
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohy8quGsjlc0kvxTL9mGa4HBufooyTgcBAjDxEg1ATxxTkKw4cxa5bFP3M8eXC97BQtOEmWtDkhPeEbFs2ong1Ec-G0deyBMeWdmUj6Rif9T9xnDGDcint4-XEMia1G-jW8hzK~tNvB1TcLHTbXq2xX6-3v4djbJu2Uz~R-RxNEaMYqd68l-I7z-6GY~w9rHZCNkynW3Rtk-ekvF2FEcnzUyUJ8cudE1chTm-wgEbv2wzboB6zEOUh1SeOTfVESiCjHH~Kyh03mFjJaDpsM6hSMRfjLAtmG-OmRZCRUMdi2pkDHTpXWrnETKo6xT9fgZWMR9dI0U9xJviTARjHz86A__"
                alt="avt"
                width="36"
                height="36"
                className="rounded-pill object-fit-cover"
              />{" "}
              <span
                className="ms-2"
                style={{
                  fontSize: "14px",
                }}
              >
                {" "}
                MBA
              </span>
            </div>

            <div>
              <button
                className="text-decoration-none border-0 px-3 "
                style={{
                  background: "#EDEEF0",
                  textAlign: "center",
                  fontSize: "12px",
                  height: "24px",
                  borderRadius: "20px",
                }}
              >
                Follow
              </button>
            </div>
          </div>

          <div
            className="d-flex justify-content-between mb-3"
            style={{
              width: "240px",
            }}
          >
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3wrCyXRADehu1OtRoDIG2-qsdXqDQRvowwq-POeQlTA2DeeufE3TZUZJPEns-rxWJ6pwA-6pfeu8n3NkgEJF4A0MaPgvH3FkLiAw0PZCTOamUGdgfmLMruroNzMLRLGP7bSbGuNwD1hu7d2owfGMLHkNoMNdlfzzuNWQMihExESSutcA7I~5-eMtMs~q3j21GNR201V2XRZnVyRZsF8AcEHQTE-qIVY89IM~ub28sg20JnsvdTm2q274l9G1ghf2bHH~6a3wM5iH-KsQXVsM0JqpC7H8r59CXDtDQm34BPyBT51Y4DMCBDJUKAivF90Pnrszlqix6kcs-cuhQiZng__"
                alt="avt"
                width="36"
                height="36"
                className="rounded-pill object-fit-cover"
              />{" "}
              <span
                className="ms-2"
                style={{
                  fontSize: "14px",
                }}
              >
                {" "}
                Philosophy
              </span>
            </div>

            <div>
              <button
                className="text-decoration-none border-0 px-3 "
                style={{
                  background: "#EDEEF0",
                  textAlign: "center",
                  fontSize: "12px",
                  height: "24px",
                  borderRadius: "20px",
                }}
              >
                Follow
              </button>
            </div>
          </div>

          <div
            style={{
              width: "240px",
              color: " #2F6CE5",
              fontSize: "12px",
            }}
          >
            <p className=" d-flex justify-content-end ">See More...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationCard;
