import { atom } from "recoil";
import { accounts } from "../data/userItems";

export interface authProps {
  name: string;
  userId: string;
  password: string | number;
  createdDate: Object | object;
  address: string;
  bankInfo?: {
    id: number;
    bankName: string;
    accNumber: string;
    money?: number;
  }[];
}

export interface bankProps {
  map?: any;
  id?: number;
  bankName?: string;
  accNumber?: string;
  money?: number;
}

export const openBookState = atom({
  key: "openBookState",
  default: false,
});

export const authActiveState = atom({
  key: "authActiveState",
  default: false,
});

export const authUserState = atom<null | authProps | any>({
  key: "authUser",
  default: null,
});

export const bankAccountState = atom({
  key: "bankAccountState",
  default: "은행을 선택해주세요",
});

export const choiceBankState = atom<bankProps | null | any>({
  key: "choiceBankState",
  default: null,
});

export const accountListState = atom<any>({
  key: "accountUserState",
  default: accounts,
});

export const bankOptionState = atom<string>({
  key: "bankOptionState",
  default: "",
});

export const totalState = atom({
  key: "totalState",
  default: 0,
});
