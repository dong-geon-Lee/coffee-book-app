import { atom } from "recoil";

export const openBookState = atom({
  key: "openBookState",
  default: false,
});

export const authActiveState = atom({
  key: "authActiveState",
  default: false,
});

export const bankAccountState = atom({
  key: "bankAccountState",
  default: "",
});
