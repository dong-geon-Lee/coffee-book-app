import {
  Container,
  ModalBox,
  Div,
  Price,
  Button,
  Text,
  Select,
  Option,
  ChargeBox,
  Label,
  Span,
  Box,
} from "./styles";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { totalCashState } from "../../atoms/coffeeItemState";
import {
  accountListState,
  authProps,
  authUserState,
  bankAccountState,
  bankOptionState,
  bankProps,
} from "../../atoms/userAuthState";
import { modalState, overlayState } from "../../atoms/modalState";

const Modals = () => {
  const [totalCash, setTotalCash] = useRecoilState(totalCashState);
  const [bankAccount, setBankAccount] = useRecoilState(bankAccountState);
  const [, setModalState] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const authUser = useRecoilValue(authUserState);
  const accountLists = useRecoilValue(accountListState);
  const bankOption = useRecoilValue(bankOptionState);

  const setAuthUser = useSetRecoilState(authUserState);
  const setAccountList = useSetRecoilState(accountListState);

  const handleTotalCash = (x: number) => {
    setTotalCash((prevState: number) => prevState + x);
  };

  const handleResetPoint = () => {
    setTotalCash(0);
  };

  const handleChargePoint = () => {
    setTotalCash(0);
    setModalState(false);
    setOverlays(false);
  };

  const onChange = (e: {
    target: { value: string | ((currVal: string) => string) };
  }) => {
    setBankAccount(e.target.value);
  };

  const handleDeleteBanks = () => {
    const newBankInfo = authUser?.bankInfo?.map((bank: bankProps) => {
      if (bank.bankName === bankOption) {
        return {
          id: bank.id,
          bankName: bank.bankName,
          accNumber: bank.accNumber,
          money: totalCash + bank.money,
        };
      }

      return bank;
    });

    const index = accountLists.findIndex(
      (x: authProps) => x.userId === authUser?.userId
    );

    setAuthUser({ ...authUser, bankInfo: newBankInfo });
    setAccountList([
      ...accountLists.slice(0, index),
      { ...authUser, bankInfo: newBankInfo },
      ...accountLists.slice(index + 1),
    ]);
    setTotalCash(0);
    setModalState(false);
    setOverlays(false);
  };

  const filteredBank = authUser?.bankInfo.find(
    (x: any) => x.bankName === bankOption
  );

  const x = 10000;
  const y = 50000;
  const z = 100000;

  return (
    <Container>
      <Button className="close__btn" onClick={handleChargePoint}>
        x
      </Button>
      <ModalBox>
        <Text className="title">포인트</Text>
        <ChargeBox>
          <Price>
            {new Intl.NumberFormat("ko-KR", {
              maximumSignificantDigits: 4,
            }).format(totalCash)}
            원
          </Price>
          <Button className="reset__btn" onClick={handleResetPoint}>
            x
          </Button>
        </ChargeBox>
        <Div>
          <Button onClick={() => handleTotalCash(x)} className="cash__btn">
            +1만원
          </Button>
          <Button onClick={() => handleTotalCash(y)} className="cash__btn">
            +5만원
          </Button>
          <Button onClick={() => handleTotalCash(z)} className="cash__btn">
            +10만원
          </Button>
        </Div>

        <Select value={bankAccount} onChange={onChange}>
          <Option value={filteredBank?.accNumber} key={filteredBank.id}>
            {filteredBank?.bankName} {filteredBank?.accNumber}
          </Option>
        </Select>

        <Box key={filteredBank.id}>
          <Label>계좌잔액:</Label>
          <Span>{totalCash + filteredBank.money}원</Span>
        </Box>

        <Button className="pay__btn" onClick={handleDeleteBanks}>
          Pay 충전하기
        </Button>
      </ModalBox>
    </Container>
  );
};

export default Modals;
