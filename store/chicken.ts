import ChickenInterface from "./interfaces/chicken";

export default class Chicken {
  chicken: [ChickenInterface] | [];

  constructor() {
    this.chicken = [];
  }
}
