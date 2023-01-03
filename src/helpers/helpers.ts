import {
  authProps,
  bankProps,
  cartItemProps,
  filterItemProps,
  productProps,
} from "../@types/types";

export const formattedNumber = (data: number) => {
  return new Intl.NumberFormat("ko-KR", {
    maximumSignificantDigits: 3,
  }).format(data);
};

export const findAuthUser = (
  accounts: authProps[],
  authUser: authProps
): number => {
  return accounts.findIndex((x: authProps) => x.userId === authUser.userId);
};

export const findSelectedBank = (authUser: authProps, bankOption: string) => {
  const filteredBank = authUser.bankInfo.find((bank: bankProps) => {
    return bank.bankName === bankOption;
  });

  return filteredBank;
};

export const calcBankMoney = (
  authUser: authProps,
  bankOption: string,
  totalCash: number
) => {
  const chargedMoney = authUser.bankInfo.map((bank: bankProps) => {
    if (bank.bankName === bankOption) {
      return {
        id: bank.id,
        bankName: bank.bankName,
        accNumber: bank.accNumber,
        money: totalCash + bank.money,
      };
    } else {
      return bank;
    }
  });

  return chargedMoney;
};

export const calcTotalProduct = (recordedCartItem: cartItemProps[]) => {
  return recordedCartItem.reduce((acc, cur) => acc + cur.total, 0);
};

export const findFilteredItems = (
  existCoffeeItems: productProps[],
  checkedMenu: filterItemProps
) => {
  const { espresso, coldbrew, frappuccino, blended } = checkedMenu;

  return existCoffeeItems.filter(
    (coffeeItem) =>
      (espresso && coffeeItem.type === "espresso") ||
      (coldbrew && coffeeItem.type === "coldbrew") ||
      (frappuccino && coffeeItem.type === "frappuccino") ||
      (blended && coffeeItem.type === "blended")
  );
};

export const findPaymentOrderUser = (
  paymentItems: cartItemProps[],
  authUser: authProps
) => {
  return paymentItems.filter(
    (item: cartItemProps) => item.orderUser === authUser.userId
  );
};

export function itemStatus(
  homeItemStatus: number,
  likeItemStatus: number,
  cartItemStatus: number,
  profileItemStatus: number
) {
  return {
    home: homeItemStatus,
    like: likeItemStatus,
    cart: cartItemStatus,
    profile: profileItemStatus,
  };
}
