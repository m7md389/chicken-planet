import chickensJSON from "../moc-data/chickens";

function Chicken() {
  let chickens = chickensJSON.chickens;

  function getChickens() {
    return chickens;
  }

  function getChicken(chickenName) {
    return getChickens().find((chicken) => chicken.name === chickenName);
  }

  function addChicken(chicken) {
    chickens.push(chicken);
  }

  return { getChickens, getChicken, addChicken };
}

export default Chicken();
