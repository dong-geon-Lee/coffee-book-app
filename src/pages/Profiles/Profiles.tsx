import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, overlayState } from "../../atoms/modalState";
import { authUserState, bankOptionState } from "../../atoms/userAuthState";
import { bankProps, ButtonProps } from "../../@types/types";
import { findSelectedBank, formattedNumber } from "../../helpers/helpers";
import {
  CHOICE__ACCOUNT,
  CHOICE__BANK__MESSAGE,
} from "../../constants/constants";
import NavMenu from "../../components/NavMenu/NavMenu";
import back from "../../assets/back.svg";
import profile from "../../assets/profile2.svg";
import Overlays from "../../components/Overlays/Overlays";
import Modals from "../../components/Modals/Modals";
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

const Profiles = () => {
  const [openModals, setOpenModals] = useRecoilState(modalState);
  const [overlays, setOverlays] = useRecoilState(overlayState);
  const [bankOption, setBankOption] = useRecoilState(bankOptionState);

  const authUser = useRecoilValue(authUserState);
  const filteredBank = findSelectedBank(authUser, bankOption);
  const disabledBtn = filteredBank === undefined ? true : false;

  const navigate = useNavigate();

  const handleModals = () => {
    setOpenModals(true);
    setOverlays(true);
  };

  const onChange = (e: ButtonProps) => {
    setBankOption(e.target.value);
  };

  useEffect(() => {
    if (!authUser) setBankOption("계좌 선택");
  }, [authUser]);

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
            <Img src={authUser.avartar} alt="avartar" />
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
                    <Option value={CHOICE__ACCOUNT}>계좌 선택</Option>
                    {authUser?.bankInfo?.map((bank: bankProps) => (
                      <Option key={bank.id} value={bank.bankName}>
                        {bank?.bankName}
                      </Option>
                    ))}
                  </Select>
                </SubBox>
                {disabledBtn ? (
                  <Span className="choice__bank">{CHOICE__BANK__MESSAGE}</Span>
                ) : (
                  <Span key={filteredBank?.id}>{filteredBank?.accNumber}</Span>
                )}
              </Box>
              <Box>
                <Label>Pay머니</Label>
                {disabledBtn ? (
                  <Span className="choice__bank">{CHOICE__BANK__MESSAGE}</Span>
                ) : (
                  <Span key={filteredBank?.id}>
                    {formattedNumber(filteredBank?.money)}원
                  </Span>
                )}
              </Box>
            </UserInfo>
          )}

          <BtnBox>
            <Button onClick={() => handleModals()} disabled={disabledBtn}>
              Pay충전
            </Button>
            <Button
              onClick={() => navigate("/details")}
              className="pay__recorded"
            >
              결제내역
            </Button>
          </BtnBox>
        </UserBox>
      </Section>

      <NavMenu />
    </Container>
  );
};

export default Profiles;
