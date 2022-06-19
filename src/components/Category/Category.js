import React from "react";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import PlantsProducts from "./Box/PlantProducts/PlantsProducts";
import "./style/style.css";
import Btn from "./Box/Button/Btn";

const Category = () => {
  return (
    <section className="catregory">
      <div className="container">
        <HeadingTitle title="Delicious Category" />
        <PlantsProducts />
        <Btn title= "See all"/>
      </div>
    </section>
  );
};

export default Category;
