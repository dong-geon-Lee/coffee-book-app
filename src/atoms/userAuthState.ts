import { atom } from "recoil";

export interface authProps {
  name: string;
  userId: string;
  password: string | number;
  createdDate: Object | object;
  address: string;
  bankInfo: {
    id: number;
    bankName: string;
    accNumber: string;
    money?: number;
  }[];
}

export interface bankProps {
  id: number;
  bankName: string;
  accNumber: string;
  money: number;
}

export const openBookState = atom({
  key: "openBookState",
  default: false,
});

export const authActiveState = atom({
  key: "authActiveState",
  default: false,
});

export const authUserState = atom<null | authProps>({
  key: "authUser",
  default: null,
});

export const bankAccountState = atom({
  key: "bankAccountState",
  default: "",
});
