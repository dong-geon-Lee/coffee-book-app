import { atom } from "recoil";
import { coffeeLists } from "../datas/datas";

export const dataState = atom({
  key: "dataState",
  default: coffeeLists,
});
