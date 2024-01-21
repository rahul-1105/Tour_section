import React, { useState } from "react";

const Card = ({ id, name, info, image, price, removeCard }) => {
  const [readMore, setReadMore] = useState(true);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  

  return (
    <div className="tour-card">
      <img src={image} alt="" />
      <div className="tour-details">
        <h3 className="tour-price">{price}</h3>
        <h3 className="tour-title">{name}</h3>
      </div>
      <div className="tour-description">
        {readMore === true ? info.substring(0, 200) + "..." : info}
        <span className="read-more" onClick={readMoreHandler}>
          {readMore === true ? "Read More" : "Show Less"}
        </span>
      </div>
      <button className="btn" onClick={() => removeCard(id)}>Not Interested</button>
    </div>
  );
};

export default Card;
