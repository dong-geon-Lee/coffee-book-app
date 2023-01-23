import { atom, selector } from "recoil";
import { cartItemProps, productProps } from "../@types/types";
import { SHIPPING__COST } from "../constants/constants";
import { coffeeLists } from "../data/coffeeItems";
import { authUserState } from "./userAuthState";
import {
  calcTotalProduct,
  findFilteredItems,
  findPaymentOrderUser,
} from "../helpers/helpers";

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

export const currentItemState = selector({
  key: "currentItemState",
  get: ({ get }) => {
    const coffeeLists = get(coffeeItemState);
    const checkedMenu = get(checkedMenuState);
    const cartStatus = get(recordedCartItemState);
    const paymentItems = get(paymentDetailState);
    const authUser = get(authUserState);
    const likeStatus = authUser.likeLists;

    const existCoffeeItems = coffeeLists.slice();
    const filteredItems = findFilteredItems(existCoffeeItems, checkedMenu);
    const homeStatus =
      filteredItems.length >= 1 ? filteredItems : existCoffeeItems;
    const profileStatus = findPaymentOrderUser(paymentItems, authUser);

    return { homeStatus, likeStatus, cartStatus, profileStatus };
  },
});

export const cartItemTotalState = selector({
  key: "cartItemTotalState",
  get: ({ get }) => {
    const recordedCartItem = get(recordedCartItemState);
    const total = calcTotalProduct(recordedCartItem) + SHIPPING__COST;
    return total;
  },
});

export const checkedMenuState = atom({
  key: "checkedMenuState",
  default: {
    espresso: false,
    coldbrew: false,
    frappuccino: false,
    blended: false,
  },
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
