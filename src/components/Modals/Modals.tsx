import {
  Container,
  ModalBox,
  Div,
  Price,
  Title,
  Button,
  Text,
  Select,
  Option,
  ChargeBox,
} from "./styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalCashState } from "../../atoms/coffeeItemState";
import { bankAccountState } from "../../atoms/userAuthState";
import { modalState, overlayState } from "../../atoms/modalState";

const Modals = () => {
  const [totalCash, setTotalCash] = useRecoilState(totalCashState);
  const [bankAccount, setBankAccount] = useRecoilState(bankAccountState);

  const [, setModalState] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const x = 10000;
  const y = 50000;
  const z = 100000;

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

  console.log(bankAccount);

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
          <Option value="282402-04-1316111">국민은행: 282402-04-1316111</Option>
          <Option value="402321-11-2769440">신한은행: 402321-11-2769440</Option>
        </Select>

        <Button className="pay__btn" onClick={handleChargePoint}>
          Pay 충전하기
        </Button>
      </ModalBox>
    </Container>
  );
};

export default Modals;
