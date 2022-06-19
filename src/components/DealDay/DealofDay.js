import React from "react";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import Data from "../../JSON/Data.json";
import "./style/style.css";
import Box from "./Box/BoxDeal";
import "react-awesome-slider/dist/styles.css";

const DealofDay = (props) => {
  const { products } = Data;

  return (
    <section className="deal-of-day">
      <div className="container">
        <HeadingTitle title="Deal of The Day" />
        <div className="dealSection">
          {
            // Mapping through the Deals only.
            products.slice(0, 1).map((deal, id) => {
              return (
                <Box
                  id={id}
                  foodTitle={deal.foodTitle}
                  isWhite={deal.isWhite}
                  img={require(`./media/${deal.icon}`)}
                  img2={require(`./media/${deal.icon2}`)}
                  isDiscount={deal.idDiscount}
                  prevPrice={deal.price}
                  price={deal.price * (deal.discountPrice / 100)}
                  discountPrice={deal.discountPrice}
                  description={deal.description}
                  cart={props.cart}
                  onAdd={props.onAdd}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default DealofDay;
