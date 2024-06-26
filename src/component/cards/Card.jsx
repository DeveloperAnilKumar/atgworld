import React from "react";
import "./Card.css";
import LocationCard from "./LocationCard";

function Card({
  image,
  category,
  title,
  text,
  avatar_img,
  username,
  views,
  btn_title,
  date,
  card_location,
  icon,
  icon_Loc,
}) {
  return (
    <>
      <div className="card mb-3   ">
        {image && (
          <img
            src={image}
            alt="image1"
            className="card-img-top  w-100 "
            height="220"
            style={{ objectFit: "cover" }}
          />
        )}

        <div className="card-body">
          <p className="card-subtitle ">{category}</p>

          <div className="d-flex justify-content-between ">
            <p className="card-title  title-size ">{title}</p>{" "}
            <p>
              <div className="dropdown ">
                <button
                  type="button"
                  className="btn  border-0 rounded-0 "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="dots-icon">&#8230; </span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </p>
          </div>

          <p className="card-text description">{text}</p>

          {date && card_location && (
            <div className="date-location">
              <span className={`${icon} icon2   `}>
                <span className=" m-lg-2    ms-3">{date} </span>
              </span>
              <span className={`${icon_Loc} icon2`}>
                <span className="m-lg-2   ms-3"> {card_location}</span>
              </span>
            </div>
          )}

          <div className="mt-3">
            {btn_title && (
              <button className=" btn btn-outline-secondary w-100">
                {" "}
                <span
                  style={{
                    fontSize: "13px",
                    color:
                      btn_title === "Visit Website" ? "#E56135" : "#02B875",
                  }}
                >
                  {btn_title}
                </span>{" "}
              </button>
            )}
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between border-0 bg-white  ">
          <div>
            <img
              src={avatar_img}
              width="48"
              className="rounded-pill"
              height="48"
              alt="avatar"
              style={{ objectFit: "cover" }}
            />{" "}
            <span
              className=" fw-bold  ms-1"
              style={{
                fontSize: "18px",
              }}
            >
              {username}
            </span>
          </div>
          <div>
            <span className="bi bi-eye me-4  hide-views">
              {" "}
              <span style={{ fontSize: "14px" }}>{views} </span>{" "}
            </span>

            <button
              className="btn btn-secondary rounded-0 border-0  "
              style={{
                background: "#EDEEF0",
              }}
            >
              <span className="bi bi-share-fill text-black  "></span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
