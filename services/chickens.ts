import chickens from "../moc-data/chickensData";

export function getChickens() {
  return chickens;
}

export function getChicken(name: string) {
  return getChickens().filter((chicken) => chicken.name === name)[0];
}

export default { getChickens, getChicken };
