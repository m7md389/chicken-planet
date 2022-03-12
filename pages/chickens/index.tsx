import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hue from "../../components/Hue";
import ChickensComponent from "../../components/Chickens";

const Chickens: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Chicken Planet - {Chickens.name}</title>
      </Head>

      <ChickensComponent />
    </React.Fragment>
  );
};

export default Chickens;
