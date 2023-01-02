import { atom } from "recoil";
import { authProps } from "../@types/types";
import { accounts } from "../data/userItems";

export const openBookState = atom({
  key: "openBookState",
  default: false,
});

export const authActiveState = atom({
  key: "authActiveState",
  default: false,
});

export const authUserState = atom<authProps>({
  key: "authUser",
  default: undefined,
});

export const bankAccountState = atom({
  key: "bankAccountState",
  default: "은행을 선택해주세요",
});

export const accountListState = atom({
  key: "accountUserState",
  default: accounts,
});

export const bankOptionState = atom({
  key: "bankOptionState",
  default: "",
});
