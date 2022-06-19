import React, { useState } from "react";
import "./style/style.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import ProductBox from "../ProductBox/ProductBox";
import MenuList from "../MenuList/MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import JSON from "../../JSON/Data.json";
import Btn from "../Category/Box/Button/Btn";
import AddedContent from "../../routes/WishList/Box/AddedContent";
import SideBar from "../SideBar/SideBar";

const Products = (props) => {
  const { products } = JSON;

  // Setting the default name for sorting as def
  const [foodName, setFoodName] = useState("def");

  // 1- Here is the main sorting function, which takes the mapping function:
  const mappingCard = () => {
    switch (foodName.toLowerCase()) {
      // --------------------------------------------
      case "featured":
        return products
          .filter(
            (itemName) =>
              itemName.foodTitle.toLowerCase() === "black umbrella in handle"
          )
          .map(mapping());
      // --------------------------------------------
      case "latest":
        return products
          .filter(
            (itemName) =>
              itemName.foodTitle.toLowerCase() === "after decaf phone case"
          )
          .map(mapping());
      // --------------------------------------------

      case "best":
        return products
          .filter(
            (itemName) =>
              itemName.foodTitle.toLowerCase() === "backpack double strap"
          )
          .map(mapping());
      // --------------------------------------------

      case "def":
        return products.map(mapping());
      // --------------------------------------------
      default:
        return (
          <div>
            No Items{" "}
            <FontAwesomeIcon color="#FFC222" size="lg" icon={faFrown} />
          </div>
        );
      // --------------------------------------------
    }
  };

  // 2- This Function is Excuted when I want to add elements on the side bar or add elements on the cart.
  const mappingForAdding = () => {
    return props.cart.map((product, id) => (
      <>
        <AddedContent
          id={id}
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

  // 3- Mapping through the products
  const mapping = () => {
    return (product, id) => (
      <ProductBox
        id={id}
        foodTitle={product.foodTitle}
        isWhite={product.isWhite}
        img={require(`./media/${product.icon}`)}
        img2={require(`./media/${product.icon2}`)}
        isDiscount={product.idDiscount}
        prevPrice={product.price}
        price={product.price * (product.discountPrice / 100)}
        discountPrice={product.discountPrice}
        product={product}
        cart={props.cart}
        onAdd={props.onAdd}
      />
    );
  };

  return (
    <section className="products">
      <div className="container">
        <SideBar
          cartLength={props.cartLength}
          mappingForAdding={mappingForAdding}
          cart={props.cart}
        />
        <HeadingTitle title="TRENDING PRODUCTS" />
        <MenuList
          title="Menu of The Day"
          foodName={foodName}
          setFoodName={setFoodName}
        />
        <div className="item-box-wrapper">{mappingCard().slice(0, 6)}</div>
        <Btn title="See all" />
      </div>
    </section>
  );
};

export default Products;
