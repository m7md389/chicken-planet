import React from "react";
import { useRouter } from "next/router";
import DataContainer from "./../../components/DataContainer";
import chickensService from "../../services/chickens";

const ChickenDetails = () => {
  const router = useRouter();
  const { name: chickenName } = router.query;
  const chicken = chickensService.getChicken(chickenName);

  if (!chicken) return null;
  const { egg, vaccine } = chicken;

  return (
    <>
      <DataContainer
        role="chicken"
        title={chicken.name}
        images={chicken.images}
        imageAlt={"chicken image"}
        about={{
          temperature: chicken.temperature,
          life_time: chicken.life_time,
          weight: chicken.weight,
          color: chicken.color,
          sound: chicken.sound,
          price: chicken.price,
          quantity: chicken.quantity,
        }}
      />
      <DataContainer
        role="egg"
        title="EGG"
        images={egg.images}
        imageAlt={"egg image"}
        about={{
          size: egg.size,
          color: egg.color,
          quantity_per_year: egg.quantity_per_year,
          price: egg.price,
          eggs_in_incubator: egg.eggs_in_incubator.count,
        }}
      />
      <DataContainer
        role="vaccines"
        title="Vaccines"
        images={vaccine[0].images}
        imageAlt={"vaccine[0] image"}
        about={{
          name: vaccine[0].name,
          vaccine_period: vaccine[0].vaccine_period,
          amount: vaccine[0].amount,
          price: vaccine[0].price,
          description: vaccine[0].description,
        }}
      />
    </>
  );
};

export default ChickenDetails;
