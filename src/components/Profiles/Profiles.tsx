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
import {
  accountListState,
  authUserState,
  bankOptionState,
} from "../../atoms/userAuthState";
import { bankProps } from "../../atoms/userAuthState";

const Profiles = () => {
  const [openModals, setOpenModals] = useRecoilState(modalState);
  const [overlays, setOverlays] = useRecoilState(overlayState);
  const authUser = useRecoilValue(authUserState);
  const [bankOption, setBankOption] = useRecoilState(bankOptionState);
  const accountLists = useRecoilValue(accountListState);

  console.log(accountLists, "전체 리스트");
  console.log(authUser, "변경된 데이터3 ");

  const handleModals = () => {
    setOpenModals(true);
    setOverlays(true);
  };

  const onChange = (e: { target: { value: any } }) => {
    setBankOption(e.target.value);
  };

  const filteredBank = authUser?.bankInfo.find(
    (x: bankProps) => x.bankName === bankOption
  );

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
                    {authUser?.bankInfo?.map((bank: bankProps) => (
                      <Option key={bank.id} value={bank.bankName}>
                        {bank?.bankName}
                      </Option>
                    ))}
                  </Select>
                </SubBox>
                {filteredBank === undefined ? (
                  <Span className="choice__bank">은행을 선택해주세요</Span>
                ) : (
                  <Span key={filteredBank?.id}>{filteredBank?.accNumber}</Span>
                )}
              </Box>
              <Box>
                <Label>Pay머니</Label>
                {filteredBank === undefined ? (
                  <Span className="choice__bank">은행을 선택해주세요</Span>
                ) : (
                  <Span key={filteredBank?.id}>{filteredBank?.money}원</Span>
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
