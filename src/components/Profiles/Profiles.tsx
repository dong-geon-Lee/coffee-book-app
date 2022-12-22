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
  Section,
  Span,
  Title,
  UserBox,
  UserInfo,
} from "./styles";
import back from "../../assets/back.svg";
import profile from "../../assets/profile2.svg";
import avartar from "../../assets/avarta.jpg";

const Profiles = () => {
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

        <UserBox>
          <ImgBox>
            <Img src={avartar} alt="" />
          </ImgBox>

          <UserInfo>
            <Box>
              <Label>아이디</Label>
              <Span>guest1</Span>
            </Box>
            <Box>
              <Label>이름</Label>
              <Span>이수호</Span>
            </Box>
            <Box>
              <Label>주소</Label>
              <Span>서울특별시 송파구</Span>
            </Box>
            <Box>
              <Label>계좌번호</Label>
              <Span>487602-04-2539952</Span>
            </Box>
            <Box>
              <Label>Pay머니</Label>
              <Span>135,000원</Span>
            </Box>
          </UserInfo>

          <BtnBox>
            <Button>Pay충전</Button>
            <Button>결제내역</Button>
          </BtnBox>
        </UserBox>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Profiles;
