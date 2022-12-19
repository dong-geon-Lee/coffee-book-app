import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authActiveState } from "../../atoms/LoginState";
import {
  Button,
  Container,
  Div,
  Header,
  Img,
  ImgBox,
  Logo,
  Text,
  Wrapper,
} from "./styles";
import img from "../../assets/logo5.png";
import img2 from "../../assets/login4.jpg";
import logo6 from "../../assets/coffee6.svg";
import logo7 from "../../assets/coffee7.svg";
import logo3 from "../../assets/coffee3.svg";
import logo4 from "../../assets/coffee4.svg";

const Home = () => {
  const [, setAuthActive] = useRecoilState(authActiveState);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    setAuthActive(false);
  };

  return (
    <Container img={img2}>
      <Wrapper>
        <Header>
          <ImgBox>
            <Img src={img} alt="logo" />
          </ImgBox>

          <Div>
            <Button onClick={handleLogout}>로그아웃</Button>
          </Div>
        </Header>

        <Div className="main">
          <h1>카테고리</h1>
          <div>
            <div>
              <Logo src={logo3} />
              <Text>에스프레소</Text>
            </div>
            <div>
              <Logo src={logo7} />
              <Text>콜드 브루</Text>
            </div>
            <div>
              <Logo src={logo4} />
              <Text>푸라푸치노</Text>
            </div>
            <div>
              <Logo src={logo6} />
              <Text>블렌디드</Text>
            </div>
          </div>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Home;
