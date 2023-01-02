import { authProps, bankProps } from "../@types/types";

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
