import "./style/style.css";
import React from "react";
import Box from "./Box/Box";
import HeadingLanding from "../../components/HeadingLanding/HeadingLanding";
import Data from "../../JSON/Data.json";
const FAQ = () => {
  const { FAQ } = Data;
  return (
    <section className="section faq-section">
      <HeadingLanding title={"FAQ"} isThereList={false} />
      <div className="container">
        {FAQ.map((item, index) => {
          return (
            <Box
              key={index}
              question={item.question}
              hiddenContent={item.answer}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
