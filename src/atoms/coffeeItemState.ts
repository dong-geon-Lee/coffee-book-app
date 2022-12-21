import { atom } from "recoil";
import { coffeeLists } from "../data/coffeeItems";

export const coffeeItemState = atom({
  key: "dataState",
  default: coffeeLists,
});
