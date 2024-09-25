import React from 'react'
import { CDN_URL } from '../utils/contants';
const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img
          className="res-image"
          src={CDN_URL +resData.info.cloudinaryImageId}
          alt="Food Image"
        />
        <h3 className="res-name">{resData.info.name}</h3>
  
        <div className="res-details">
          <span className="res-rating">{resData.info.avgRating}⭐</span>
          <span className="res-cuisine">{resData.info.cuisines.join(", ")}</span>
        </div>
        <span>{resData.info.sla.deliveryTime} min</span>
      </div>
    );
}

export default RestaurantCard
