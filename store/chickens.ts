import ChickenInterface from "./interfaces/chicken";

export default class Chicken {
  data: [ChickenInterface] | [];

  constructor() {
    this.data = [];
  }

  getChicken() {
    return this.data[0];
  }
}
