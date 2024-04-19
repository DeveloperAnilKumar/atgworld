import React from "react";
import { userData } from "../data/data";
import Card from "../cards/Card";
import LocationCard from "../cards/LocationCard";
import Filter from "../Posts/Filter";
import Banner from "../Banner/Banner";
import Navbar from "../nav/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="navbar-div">
        <Navbar />
      </div>

      <div>
        <Banner />
      </div>

      <div className="container-fluid row-cols-1">
        <Filter />
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 ">
        <div className="container-fluid col-lg-7">
          {userData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
              text={item.text}
              avatar_img={item.avatar_img}
              username={item.username}
              views={item.views}
              btn_title={item.btn_title}
              date={item.date}
              card_location={item.card_location}
              icon_Loc={item.icon_Loc}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="col-lg-4 card-location">
          <LocationCard />
        </div>
      </div>
      <div className="logo d-sm-none">
        <span className="bi bi-pencil-fill icon"></span>
      </div>
    </div>
  );
}

export default Home;
