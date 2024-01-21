import React from "react";
import Card from "./Card";

const Tours = ({ datas, removeCard }) => {
  return (
    <div className="container">
      <h1 className="heading">Plan With Rahul</h1>
      <div className="cards">
        {datas.map((data) => {
          return <Card key={data.id} {...data} removeCard={removeCard} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
