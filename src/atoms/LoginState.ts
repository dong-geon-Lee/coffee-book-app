import { atom } from "recoil";

export const openBookState = atom<boolean>({
  key: "openBookState",
  default: false,
});
