import React from "react";
import dataContainerStyles from "../styles/DataContainer.module.scss";

type UnknownObject = Record<string, unknown>;

interface Props {
  role: string;
  title: string;
  name?: string;
  images: string[];
  imageAlt: string;
  about: UnknownObject;
}

const DataContainer: React.FC<Props> = (props) => {
  const { role, title, images, imageAlt, about } = props;
  return (
    <article role={role} className={dataContainerStyles.container}>
      <section role="image">
        <img
          src={images[0]}
          alt={imageAlt}
          className={dataContainerStyles.shownImage}
        />
      </section>
      <section role="about" className={dataContainerStyles.about}>
        <h2>{title}</h2>
        <div className={dataContainerStyles.details}>
          {Object.keys(about).map((key, index) => (
            <div key={index}>
              <span>{key.replace(/([_])/g, " ")}:</span>
              {about[key]}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default DataContainer;
