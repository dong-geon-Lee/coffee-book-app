import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { totalCashState } from "../../recoils/coffeeItemState";
import { modalState, overlayState } from "../../recoils/modalState";
import { ButtonProps } from "../../@types/types";
import { CHARGE__X, CHARGE__Y, CHARGE__Z } from "../../constants/constants";
import { formattedNumber } from "../../helpers/helpers";
import {
  accountListState,
  authUserState,
  bankAccountState,
  selectedBankState,
  updatedBankMoneyState,
} from "../../recoils/userAuthState";
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
  BtnBox,
} from "./styles";

const Modals = () => {
  const [totalCash, setTotalCash] = useRecoilState(totalCashState);
  const [bankAccount, setBankAccount] = useRecoilState(bankAccountState);
  const [, setModalState] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const selectedBank = useRecoilValue(selectedBankState);
  const { accountLists, authUser, correctUserIndex, newBankInfo, btnDisabled } =
    useRecoilValue(updatedBankMoneyState);

  const setAuthUser = useSetRecoilState(authUserState);
  const setAccountList: any = useSetRecoilState(accountListState);

  const handleTotalCash = (cash: number) => {
    setTotalCash((prevState: number) => prevState + cash);
  };

  const handleResetIcon = () => {
    setTotalCash(0);
  };

  const handleBtnReset = () => {
    setTotalCash(0);
    setModalState(false);
    setOverlays(false);
  };

  const onChange = (e: ButtonProps) => {
    setBankAccount(e.target.value);
  };

  const handleChargePoint = () => {
    setAuthUser({ ...authUser, bankInfo: newBankInfo });
    setAccountList([
      ...accountLists.slice(0, correctUserIndex),
      { ...authUser, bankInfo: newBankInfo },
      ...accountLists.slice(correctUserIndex + 1),
    ]);

    setTotalCash(0);
    setModalState(false);
    setOverlays(false);
    alert(`${formattedNumber(totalCash)}원 충전이 완료되었습니다.`);
  };

  return (
    <Container>
      <ModalBox>
        <Text className="title">포인트</Text>
        <ChargeBox>
          <Price>{formattedNumber(totalCash)}원</Price>
          <Button className="reset__btn" onClick={handleResetIcon}>
            x
          </Button>
        </ChargeBox>
        <Div>
          <Button
            onClick={() => handleTotalCash(CHARGE__X)}
            className="cash__btn"
          >
            +1만원
          </Button>
          <Button
            onClick={() => handleTotalCash(CHARGE__Y)}
            className="cash__btn"
          >
            +5만원
          </Button>
          <Button
            onClick={() => handleTotalCash(CHARGE__Z)}
            className="cash__btn"
          >
            +10만원
          </Button>
        </Div>

        <Select value={bankAccount} onChange={onChange}>
          {selectedBank && (
            <Option value={selectedBank?.accNumber} key={selectedBank.id}>
              {selectedBank?.bankName} {selectedBank?.accNumber}
            </Option>
          )}
        </Select>

        <Box>
          <Label>계좌잔액:</Label>
          <Span>
            {selectedBank &&
              `${formattedNumber(totalCash + selectedBank.money)}원`}
          </Span>
        </Box>

        <BtnBox>
          <Button className="close__btn" onClick={handleBtnReset}>
            닫기
          </Button>
          <Button
            className="pay__btn"
            onClick={handleChargePoint}
            disabled={btnDisabled}
          >
            충전하기
          </Button>
        </BtnBox>
      </ModalBox>
    </Container>
  );
};

export default Modals;
