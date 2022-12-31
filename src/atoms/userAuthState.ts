import { atom } from "recoil";
import { accounts } from "../data/userItems";

export const openBookState = atom({
  key: "openBookState",
  default: false,
});

export const authActiveState = atom({
  key: "authActiveState",
  default: false,
});

export const authUserState = atom<any>({
  key: "authUser",
  default: null,
});

export const bankAccountState = atom({
  key: "bankAccountState",
  default: "은행을 선택해주세요",
});

export const accountListState = atom<any>({
  key: "accountUserState",
  default: accounts,
});

export const bankOptionState = atom({
  key: "bankOptionState",
  default: "",
});
