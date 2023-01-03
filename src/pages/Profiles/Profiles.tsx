import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import back from "../../assets/back.svg";
import profile from "../../assets/profile2.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, overlayState } from "../../recoil/modalState";
import Overlays from "../../components/Modals/Overlays/Overlays";
import Modals from "../../components/Modals/Modals";
import { authUserState, bankOptionState } from "../../recoil/userAuthState";
import { bankProps } from "../../@types/types";
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
import { findSelectedBank } from "../../helpers/helpers";

const Profiles = () => {
  const [openModals, setOpenModals] = useRecoilState(modalState);
  const [overlays, setOverlays] = useRecoilState(overlayState);
  const [bankOption, setBankOption] = useRecoilState(bankOptionState);
  const authUser = useRecoilValue(authUserState);

  const navigate = useNavigate();

  const handleModals = () => {
    setOpenModals(true);
    setOverlays(true);
  };

  const onChange = (e: { target: { value: any } }) => {
    setBankOption(e.target.value);
  };

  const filteredBank = findSelectedBank(authUser, bankOption);

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
                    <Option value="계좌 선택">계좌 선택</Option>
                    {authUser?.bankInfo?.map((bank: bankProps) => (
                      <Option key={bank.id} value={bank.bankName}>
                        {bank?.bankName}
                      </Option>
                    ))}
                  </Select>
                </SubBox>
                {filteredBank === undefined ? (
                  <Span className="choice__bank">
                    -- 계좌를 선택해주세요 --
                  </Span>
                ) : (
                  <Span key={filteredBank?.id}>{filteredBank?.accNumber}</Span>
                )}
              </Box>
              <Box>
                <Label>Pay머니</Label>
                {filteredBank === undefined ? (
                  <Span className="choice__bank">
                    -- 계좌를 선택해주세요 --
                  </Span>
                ) : (
                  <Span key={filteredBank?.id}>
                    {new Intl.NumberFormat("ko-KR", {
                      maximumSignificantDigits: 3,
                    }).format(filteredBank?.money)}
                    원
                  </Span>
                )}
              </Box>
            </UserInfo>
          )}

          <BtnBox>
            <Button
              onClick={() => handleModals()}
              disabled={filteredBank === undefined ? true : false}
            >
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
