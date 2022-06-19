import React, { useState } from "react";
import HeadingLanding from "../../components/HeadingLanding/HeadingLanding";
import CategorySide from "../../components/CategorySide/CategorySide";
import "./style/style.css";
import ProductBox from "../../components/ProductBox/ProductBox";
import AddedContent from "../WishList/Box/AddedContent";
import SideBar from "../../components/SideBar/SideBar";
import JSON from "../../JSON/Data.json";
import SortingBar from "./Box/SortingBar";
import PaginationComp from "../../components/Pagination/Pagination";

const Shop = (props) => {
  // The curent page [ which page are we in right now? ]
  const [currentPage, setCurrentPage] = useState(1);
  // How many Post per page. Default as [6]
  const [postsPerPage] = useState(6);
  const indexOfLestPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLestPost - postsPerPage;

  // To determine the type of the sorting it is. def is the default sorting.
  const [state, setState] = useState("def");

  // The value will be determined in the [ rangeSelector() ] function. [ 0,10 ] as a default
  const [value, setValue] = useState([0, 10]);

  // This function takes any value as a parameter and store it in setValue.
  // This function will be excuted inside [ CategorieLeft ] component.
  const rangeSelector = (e, newValue) => {
    setValue(newValue);
    setState("price");
  };

  // Importing the data from the json file to filter.
  const { products } = JSON;

  // This Function Excuted when I want to add elements on the side bar or add elements on the cart.
  const mappingForAdding = () => {
    return props.cart.map((product, id) => (
      <>
        <AddedContent
          id={id}
          onRemove={props.onRemove}
          product={product}
          img={require(`../../Images/${product.icon}`)}
          foodTitle={product.foodTitle}
          idDiscount={product.idDiscount}
          price={product.price}
          discountPrice={product.discountPrice}
        />
      </>
    ));
  };

  // 2- Here is the main sorting function, which takes the mapping function:
  const mappingCard = () => {
    // Setting up my condition:
    let condition = state.toLocaleLowerCase();
    switch (condition) {
      case "def":
        return products
          .sort((a, b) => a.foodTitle.localeCompare(b.foodTitle))
          .map(mapping());
      case "lth":
        return products
          .sort((a, b) => (a.price > b.price ? 1 : -1))
          .map(mapping());
      case "htl":
        return products
          .sort((a, b) => (a.price < b.price ? 1 : -1))
          .map(mapping());
      case "best":
        return products
          .sort((a, b) => (a.rating < b.rating ? 1 : -1))
          .map(mapping());
      case "price":
        // The price should be between the range of the min price and the max price.
        // That means the price should be greater than the first index of the variable [ value ]
        // And the price should be less than the second index of the variable [ value ]
        // Note: filter() takes one parameter.
        return products
          .filter((a) => a.price >= value[0] && a.price <= value[1])
          .map(mapping());
      default:
        return (
          <div>
            There are no items <span>&#128533;</span>
          </div>
        );
    }
  };

  // 3- Mapping through the products
  const mapping = () => {
    return (product, id) => (
      <ProductBox
        id={id}
        foodTitle={product.foodTitle}
        isWhite={product.isWhite}
        img2={require(`../../Images/${product.icon3}`)}
        img={require(`../../Images/${product.icon4}`)}
        isDiscount={product.idDiscount}
        prevPrice={product.price}
        price={product.price * (product.discountPrice / 100)}
        discountPrice={product.discountPrice}
        product={product}
        rating={product.rating}
        cart={props.cart}
        onAdd={props.onAdd}
      />
    );
  };

  return (
    <section className="section shop-section">
      {/* ************************** */}
      {/* Side bar is activated everytime I add an element */}
      <SideBar
        cartLength={props.cartLength}
        mappingForAdding={mappingForAdding}
        cart={props.cart}
      />
      {/* ************************** */}
      <HeadingLanding title={"Shop"} isThereList={true} />
      <div className="main-content">
        {/* ************************** */}
        {/* Category side contains best deal section, filter section */}
        <CategorySide
          value={value}
          rangeSelector={rangeSelector}
          isThereDeals={false}
          isThereFilter={false}
          isThereRecent={true}
        />
        {/* ************************** */}
        <div className="rightSide">
          {/* This row contains the sorting settings and the products boxes */}
          <div className="row">
            {/* ************************** */}
            <SortingBar // This is the sorting settings.
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setState={setState}
              resultNumber={props.resultNumber}
            />
            {/* ************************** */}
            {/* This is the product boxes. */}
            <div className="box-wrapper">
              {mappingCard().slice(indexOfFirstPost, indexOfLestPost)}
            </div>
          </div>
          {/* ************************** */}
          {/* This row contains the pagination */}
          <PaginationComp // This is the pagination bar.
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={products.length}
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;
