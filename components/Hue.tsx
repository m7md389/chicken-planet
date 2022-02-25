import React from "react";
import Image from "next/image";
import hueStyles from "../styles/Hue.module.scss";

interface Props {
  img: string;
  alt: string;
  title: string;
  description?: string;
}

const Hue: React.FC<Props> = (props) => {
  const { img, alt, title, description } = props;
  return (
    <section className={hueStyles.container}>
      <Image src={img} width="2000" height="1000" alt={alt} />
      <h1 className="m-4">{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
};

export default Hue;
