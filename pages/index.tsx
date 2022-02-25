import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hue from "../components/Hue";
import Chickens from "../components/Chickens";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Chicken Planet - {Home.name}</title>
      </Head>

      <Hue
        img="/chicken_home.bmp"
        alt="Hue title background"
        title="Chicken Planet"
      />
      <Chickens />
    </React.Fragment>
  );
};

export default Home;
