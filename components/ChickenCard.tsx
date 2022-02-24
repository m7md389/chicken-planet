import React from "react";
import Image from "next/image";
import chickenCardStyle from "../styles/ChickenCard.module.css";

interface Props {
  name: string;
  price: number;
  quantity: number;
  images: string[];
  description: string;
}

const ChickenCard: React.FC<Props> = (props) => {
  const { name, images, description, quantity, price } = props;
  return (
    <div className={`card m-2 p-2 ${chickenCardStyle.container}`}>
      <img
        className={`card-img-top ${chickenCardStyle.image}`}
        src={images[0]}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className={`card-title ${chickenCardStyle.name}`}>{name}</h5>
        <p className={`card-text ${chickenCardStyle.description}`}>
          {description}
        </p>
        <p className={`card-text ${chickenCardStyle.price}`}>
          <span className="me-1">Price:</span>
          {price}₪
        </p>
        <p className={`card-text ${chickenCardStyle.quantity}`}>
          <span className="me-1">In stock:</span>
          {quantity} chicken
        </p>
        <a href={`/chickens/${name}`} className="btn btn-info">
          More Details
        </a>
      </div>
    </div>
  );
};

export default ChickenCard;
