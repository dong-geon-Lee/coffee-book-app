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
  likes?: boolean;
}

export interface likeProps {
  id: number | undefined;
}

export const coffeeItemState = atom<coffeeProps[]>({
  key: "dataState",
  default: coffeeLists,
});

export const likeItemState = atom<any>({
  key: "likeItemState",
  default: [],
});

export const selectedSizeState = atom({
  key: "selectedSizeState",
  default: 0,
});

export const quantityState = atom({
  key: "quantityState",
  default: 0,
});

export const totalPriceState = atom({
  key: "totalPriceState",
  default: 0,
});

export const sumProductState = atom({
  key: "sumProductState",
  default: false,
});
