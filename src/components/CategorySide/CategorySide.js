import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import { Slider } from "@mui/material";
import Box from "./Box/Box";
import React from "react";
import Data from "../../JSON/Data.json";
import ".//style/style.css";
import BestDeals from "../BestDeals/BestDeal";
const CategorieLeft = (props) => {
  const { products } = Data;
  const { categories } = Data;

  return (
    <div className="left-side">
      {/* ************************** */}
      {/* Start A Component To Show Filter By Price */}
      <div
        style={{ display: props.isThereFilter === true ? "none" : "block" }}
        className="filter-by-price"
      >
        <h3>Filter by price</h3>
        <div className="input-container">
          <Typography id="range-slider" gutterBottom>
            Select Price Range:
          </Typography>
          {/* Slider */}
          <Slider
            className="range-filter-input"
            value={props.value} //Take the values of slider and save it in the props hook.
            onChange={props.rangeSelector}
            valueLabelDisplay="auto"
            color="secondary"
          />
          {/* Call the hook that has the value of slider */}
          <p>
            ${props.value[0]} /- ${props.value[1]}
          </p>
        </div>
      </div>
      {/* ************************** */}
      {/* A Component To Show The Categories Section of plants */}
      <div className="categories left-section">
        <h2>Categories</h2>
        <div className="plant-content-container">
          {categories.map((item, index) => {
            return (
              <Box key={index} plantName={item.plantName} icon={faPizzaSlice} />
            );
          })}
        </div>
      </div>

      {/* ====== Start Best Deals ====== */}
      <div
        className="best-deals"
        style={{ display: props.isThereDeals === true ? "none" : "block" }}
      >
        <h3>Best Deals</h3>
        {products
          .sort((a, b) => (a.rating < b.rating ? 1 : -1)) // 1- Sort the products by rating and return it as an array
          .slice(0, 3) // 2- Take the first 3 products
          // 3- Map through the products
          .map((item, id) => {
            return (
              <BestDeals
                key={id}
                small_img={require(`../../Images/${item.icon2}`)}
                title={item.foodTitle}
                rating={item.rating}
              />
            );
          })}
      </div>
      {/* ====== End Best Deals ====== */}
    </div>
  );
};

export default CategorieLeft;
