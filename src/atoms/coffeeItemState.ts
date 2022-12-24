import { atom } from "recoil";
import { coffeeLists } from "../data/coffeeItems";

export interface coffeeProps {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  size: string[];
  price: number[];
  stars: number[];
}

export const coffeeItemState = atom<coffeeProps[]>({
  key: "dataState",
  default: coffeeLists,
});

export const likeItemState = atom<any>({
  key: "likeItemState",
  default: [],
});
