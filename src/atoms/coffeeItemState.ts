import { atom } from "recoil";
import { cartItemProps, productProps } from "../@types/types";
import { coffeeLists } from "../data/coffeeItems";

export const coffeeItemState = atom<productProps[]>({
  key: "dataState",
  default: coffeeLists,
});

export const likeItemState = atom<productProps[]>({
  key: "likeItemState",
  default: [],
});

export const recordedCartItemState = atom<cartItemProps[]>({
  key: "recoredCartItemState",
  default: [],
});

export const paymentDetailState = atom<cartItemProps[]>({
  key: "paymentDetailState",
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

export const recordedQtyState = atom({
  key: "recordedQtyState",
  default: 0,
});

export const totalCashState = atom({
  key: "totalCashState",
  default: 0,
});
