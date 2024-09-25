import React from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resList);

  const filterResList = () => {
    const filterList = resList.filter((res) => res.info.avgRating >4.2);
    setList(filterList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="button-10" role="button" onClick={() => filterResList()}>
          <span className="text">Top-Restaurent</span>
        </button>
      </div>

      <div className="res-container">
        {list.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
