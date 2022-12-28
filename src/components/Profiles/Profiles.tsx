import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import {
  Box,
  BtnBox,
  Button,
  Container,
  Header,
  Img,
  ImgBox,
  Label,
  Logo,
  Option,
  Section,
  Select,
  Span,
  SubBox,
  Title,
  UserBox,
  UserInfo,
} from "./styles";
import back from "../../assets/back.svg";
import profile from "../../assets/profile2.svg";
import avartar from "../../assets/avarta.jpg";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, overlayState } from "../../atoms/modalState";
import Overlays from "../Modals/Overlays/Overlays";
import Modals from "../Modals/Modals";
import { authUserState } from "../../atoms/userAuthState";
import { useState } from "react";
import { bankProps } from "../../atoms/userAuthState";

const Profiles = () => {
  const [openModals, setOpenModals] = useRecoilState(modalState);
  const [overlays, setOverlays] = useRecoilState(overlayState);
  const authUser = useRecoilValue(authUserState);
  const [bankOption, setBankOption] = useState("");
  const [bankAccNumber, setBankAccNumber] = useState<any>("");

  console.log(authUser);
  console.log(bankAccNumber);
  const handleModals = () => {
    setOpenModals(true);
    setOverlays(true);
  };

  const onChange = (e: { target: { value: any } }) => {
    setBankOption(e.target.value);
    const banks = findBankName(e.target.value);
    setBankAccNumber(banks);
  };

  const findBankName = (bank: string) => {
    const bankLists = authUser?.bankInfo;
    const selectedBank = bankLists?.filter(
      (bankList) => bankList.bankName === bank
    );

    return selectedBank;
  };

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/home">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>프로필</Title>
          <Logo src={profile} alt="logo" className="logo" />
        </Header>

        {openModals && <Modals />}
        {overlays && <Overlays />}
        <UserBox>
          <ImgBox>
            <Img src={avartar} alt="" />
          </ImgBox>

          {authUser && (
            <UserInfo>
              <Box>
                <Label>아이디</Label>
                <Span>{authUser.userId}</Span>
              </Box>
              <Box>
                <Label>이름</Label>
                <Span>{authUser.name}</Span>
              </Box>
              <Box>
                <Label>주소</Label>
                <Span>{authUser.address}</Span>
              </Box>
              <Box>
                <SubBox>
                  <Label>계좌번호</Label>
                  <Select value={bankOption} onChange={onChange}>
                    {authUser.bankInfo.map((bank) => (
                      <Option key={bank.id} value={bank.bankName}>
                        {bank.bankName}
                      </Option>
                    ))}
                  </Select>
                </SubBox>
                {bankAccNumber.length === 0 ? (
                  <Span>은행을 선택해주세요</Span>
                ) : (
                  bankAccNumber?.map((bank: bankProps) => (
                    <Span key={bank.id}>{bank.accNumber}</Span>
                  ))
                )}
              </Box>
              <Box>
                <Label>Pay머니</Label>
                {bankAccNumber.length === 0 ? (
                  <Span>은행을 선택해주세요</Span>
                ) : (
                  bankAccNumber?.map((bank: bankProps) => (
                    <Span key={bank.id}>{bank.money}원</Span>
                  ))
                )}
              </Box>
            </UserInfo>
          )}

          <BtnBox>
            <Button onClick={() => handleModals()}>Pay충전</Button>
            <Button>결제내역</Button>
          </BtnBox>
        </UserBox>
      </Section>

      <NavMenu />
    </Container>
  );
};

export default Profiles;
