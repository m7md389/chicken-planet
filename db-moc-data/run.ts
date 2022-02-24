import { Mongoose } from "mongoose";
import Chicken from "../server/models/chicken";
import Egg from "../server/models/egg";
import Vaccine from "../server/models/vaccine";

import chickenData from "./moc-data.ts/chickenData";
import eggData from "./moc-data.ts/eggData";
import vaccineData from "./moc-data.ts/vaccineData";

for (let index = 0; index < chickenData.length; index++) {
  const egg = addEgg([index]);
  const vaccine = addVaccine(vaccineData[index]);
  addChicken(chickenData[index], egg, vaccine);
}

function addChicken(chicken: {}, egg: {}, vaccine: {}) {
  const c = new Chicken({ ...chicken, egg, vaccine });
  c.save();
  return c;
}

function addEgg(egg: {}) {
  const e = new Chicken(egg);
  e.save();
  return e;
}

function addVaccine(vaccine: {}) {
  const v = new Chicken(vaccine);
  v.save();
  return v;
}
