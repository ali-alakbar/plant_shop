import React from "react";
import "./style/style.css";
import Table from "./Box/Table";
import Shareon from "./Box/Shareon";
import Data from "../../JSON/Data.json";
import SideBar from "../../components/SideBar/SideBar";
import AddedContent from "./Box/AddedContent";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

const Wishlist = (props) => {
  const { products } = Data;
  const { cart, cartLength } = props;

  const mapping = () => {
    return products.map((product, id) => (
      <Table
        key={id}
        foodTitle={product.foodTitle}
        isWhite={product.isWhite}
        img={require(`./media/${product.icon}`)}
        isDiscount={product.idDiscount}
        prevPrice={product.price}
        price={product.price * (product.discountPrice / 100)}
        discountPrice={product.discountPrice}
        date={product.date}
        product={product}
        cart={cart}
        onAdd={props.onAdd}
      />
    ));
  };

  const mappingForAdding = () => {
    return cart.map((product, id) => (
      <>
        <AddedContent
          key={id}
          onRemove={props.onRemove}
          product={product}
          img={require(`./media/${product.icon}`)}
          foodTitle={product.foodTitle}
          idDiscount={product.idDiscount}
          price={product.price}
          discountPrice={product.discountPrice}
        />
      </>
    ));
  };

  return (
    <section className="section wishlist-section">
      <HeadingTitle title="Wishlist"/>
      <SideBar
        cart={cart}
        cartLength={cartLength}
        mappingForAdding={mappingForAdding}
      />
      <div className="food-table-section">
        <table>{mapping()}</table>
      </div>
      <Shareon />
    </section>
  );
};

export default Wishlist;
