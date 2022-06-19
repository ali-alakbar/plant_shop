import React from "react";
import "./style/style.css";
import Data from "../../JSON/Data.json";
const Support = () => {
  const { support } = Data;
  return (
    <section className="support-section">
      <div className="container">
        {support.map((item, id) => {
          return (
            <div key={id} className={"box"}>
              <div className="icon-container">
                <img src={require("./media/" + item.img)} alt="" />
              </div>
              <div className="other-content">
                <h2>{item.h2}</h2>
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Support;
