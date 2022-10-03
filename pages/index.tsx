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
        description="The plateform every farmer needs, this website was built to make things easier for us to shop online!"
      />
    </React.Fragment>
  );
};

export default Home;
