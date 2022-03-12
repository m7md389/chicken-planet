import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hue from "../components/Hue";

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
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dolore non optio eveniet quam, pariatur quo eius laboriosam voluptatem ipsum?"
      />
    </React.Fragment>
  );
};

export default Home;
