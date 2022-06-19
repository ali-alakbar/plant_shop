import React, { useState } from "react";
import "./style/style.css";
import ThHead from "./Box/TdHead";
import TdBody from "./Box/TdBody";
import RightSide from "./Box/RightSide/RightSide";
import HeadingLanding from "../../components/HeadingLanding/HeadingLanding";
function Cart(props) {
  const { cart } = props;

  const tax = 5;

  const itemsPrice = props.cart.reduce(
    (a, c) => a + c.price * (c.discountPrice / 100),
    0
  );

  const [switcher, setSwitcher] = useState(false);

  const [qty, setQty] = useState(1);

  const getQty = (e) => {
    return setQty(e.target.value);
  };

  return (
    <section className="section cart-section">
      <HeadingLanding title={"Cart"} isThereList={false} />
      <div className="tabel-container">
        <div
          style={{ display: props.cartLength === 0 ? "block" : "none" }}
          className="content-warn"
        >
          There is no Items
        </div>
        <div
          style={{ display: props.cartLength === 0 ? "none" : "block" }}
          className="left-side"
        >
          <table>
            <thead>
              <tr>
                <ThHead />
              </tr>
            </thead>
            <tbody>
              <>
                {cart.map((p, id) => {
                  return (
                    <>
                      <TdBody
                        key={id}
                        cartLength={cart.length}
                        productName={p.foodTitle}
                        productPrice={p.price * (p.discountPrice / 100)}
                        productQuantity={3}
                        // "../../Images"
                        img={require(`../../Images/${p.icon}`)}
                        onRemove={props.onRemove}
                        product={p}
                        getQty={getQty}
                        qty={qty}
                        itemsPrice={itemsPrice}
                      />
                    </>
                  );
                })}
              </>
            </tbody>
          </table>
        </div>
        {/* ======================= */}
        {/* ======================= */}
        {/* ======================= */}
        <RightSide
          cartLength={props.cartLength}
          qty={qty}
          tax={tax}
          itemsPrice={itemsPrice}
          setSwitcher={setSwitcher}
          switcher={switcher}
        />
      </div>
    </section>
  );
}

export default Cart;
