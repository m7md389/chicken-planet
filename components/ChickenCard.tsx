import React from "react";
import Image from "next/image";
import chickenCardStyle from "../styles/ChickenCard.module.css";
import Link from "next/link";

interface Props {
  name: string;
  price: number;
  quantity: number;
  images: string[];
  description: string;
}

const ChickenCard: React.FC<Props> = (props) => {
  const { name, images, description, quantity, price } = props;
  const detailedChickenLink = `/chickens/${name}`;
  return (
    <article className={`card m-2 p-2 ${chickenCardStyle.container}`}>
      <img
        className={`card-img-top ${chickenCardStyle.image}`}
        src={images[0]}
        alt="Card image cap"
      />
      <section className="card-body">
        <Link href={detailedChickenLink}>
          <h5 className={` ${chickenCardStyle.name}`}>{name}</h5>
        </Link>
        <p className={` ${chickenCardStyle.description}`}>{description}</p>
        <p className={` ${chickenCardStyle.price}`}>
          <span className="me-1">Price:</span>
          {price}₪
        </p>
        <p className={` ${chickenCardStyle.quantity}`}>
          <span className="me-1">In stock:</span>
          {quantity} chicken
        </p>
        <a href={detailedChickenLink} className="btn btn-info">
          More Details
        </a>
      </section>
    </article>
  );
};

export default ChickenCard;
