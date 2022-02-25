import React from "react";
import ChickenCard from "./ChickenCard";
import chickensStyles from "../styles/Chickens.module.css";

const Chickens: React.FC = () => {
  const chickens = getChickens();

  return (
    <section className={chickensStyles.container}>
      {chickens.map((chicken) => (
        <ChickenCard key={chicken.name} {...chicken} />
      ))}
    </section>
  );
};

function getChickens() {
  return [
    {
      name: "Rhode Island Red",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 773",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 555",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 645",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 346",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 124",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 123",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes. All are bright red. Reddish horn beak; reddish bay eyes; rich yellow shanks and toes tinged with reddish horn. A line of red pigment running down sides of shanks and extending to tips of toes is desirable. Plumage is primarily rich, lustrous dark red. Tail is mainly black, though it may have some red near saddle or edges. Wings are mainly red with some black highlights.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 1234",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description:
        "Comb, wattles, earlobes are recognized in both single comb and rose-combed varieties. Medium-size wattles and earlobes.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "Rhode Island Red 9394",
      temperature: "Docile, but can be aggressive",
      life_time: 17,
      weight: 8.5,
      color: "Yellow",
      sound: "High",
      price: 400,
      quantity: 200,
      images: [
        "http://4.bp.blogspot.com/-7cPcC_9JZkc/UcW97EM-OCI/AAAAAAAABp4/46NPwse8brE/s1600/RIR.jpg"
      ],
      description: "Some description about the chicken.",
      origin:
        "As you might guess, the Rhode Island Red origin is the East Coast in Massachusetts and Rhode Island. Rhode Island Red chickens are as American as baseball, but were developed by breeding the Malay, a lanky Asiatic bird thought to hail from northern Pakistan, and the Cochin, from Shanghai, with the Java and brown Leghorn chicken breeds. Most Rhode Island Red chickens have single combs, but many have rose combs due to a recessive gene in the Malay ancestry. The Rhode Island Red chicken was recognized by the American Poultry Association in 1904 for the single comb then again in 1906 for the rose comb, and serves as the official Rhode Island state bird.",
      egg: {
        size: "Large",
        color: "Brown",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    },
    {
      name: "chicken_name_9",
      temperature: "normal",
      life_time: 17,
      weight: 150,
      color: "Red and Black",
      sound: "High",
      price: 400,
      quantity: 7,
      images: ["img_url"],
      description: "desc_about_chicken_here",
      origin: "Austria",
      egg: {
        size: "Medium",
        color: "White",
        quantity_per_year: 90,
        price: 50,
        eggs_in_incubator: { count: 1, hatch_data: Date.now() },
        images: ["img_url"]
      },
      vaccine: {
        name: "vaccine_name",
        vaccine_period: 90,
        amount: 12,
        price: 40,
        description: "write_some_desc_here",
        images: ["img_url"]
      }
    }
  ];
}

export default Chickens;
