import React, { useState } from "react";
import SideFour from "./Boxes/Side Four/SideFour";
import SideOne from "./Boxes/SideOne/SideOne";
import SideThree from "./Boxes/SideThree/SideThree";
import SideTwo from "./Boxes/SideTwo/SideTwo";
import "./style/style.css";

const NavBar = (props) => {
  // 1- Changing state for displaying the list on small screens,
  // These will be props in <SideFour/> component.
  const [state, setState] = useState();
  // 2- state will go to side one and display the list if it's true

  // This state is to change color of nav bar on scrolling.
  const [navBar, setNavBar] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <section
      className={
        navBar ? "navBar-section navBar-section-active" : "navBar-section"
      }
    >
      <div className={state ? "side-1 side-activated" : "side-1"}>
        <SideOne newState={state} newSetState={setState} />
      </div>
      <div className="side-2">
        <SideTwo
        // Props of the how many products and how many items in cart.
          productsLength={props.productsLength}
          cartLength={props.cartLength}
        />
      </div>
      <div className="side-3">
        <SideThree />
      </div>
      <SideFour state={state} setState={setState} />
    </section>
  );
};

export default NavBar;
