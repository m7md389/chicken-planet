import React from "react";
import ChickenCard from "./ChickenCard";
import chickensStyles from "../styles/Chickens.module.scss";

import chickensService from "../services/chickens";

const Chickens: React.FC = () => {
  const chickens = chickensService.getChickens();

  return (
    <section className={chickensStyles.container}>
      {chickens.map((chicken) => (
        <ChickenCard key={chicken.name} {...chicken} />
      ))}
    </section>
  );
};

export default Chickens;
