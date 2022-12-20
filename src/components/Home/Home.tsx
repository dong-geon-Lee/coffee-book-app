import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState } from "../../atoms/loginState";
import {
  Button,
  Container,
  Div,
  Header,
  Img,
  ImgBox,
  Input,
  Label,
  Logo,
  Section,
  Wrapper,
  Title,
  ContentBox,
  Contents,
  MenuIcons,
} from "./styles";
import img from "../../assets/logo5.png";
import logo6 from "../../assets/coffee6.svg";
import logo7 from "../../assets/coffee7.svg";
import logo3 from "../../assets/coffee3.svg";
import logo4 from "../../assets/coffee4.svg";
import home from "../../assets/home.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import { dataState } from "../../atoms/dataState";

interface Props {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  size: string[];
  price: number[];
}

const Home = () => {
  const [, setAuthActive] = useRecoilState(authActiveState);
  const coffeeLists = useRecoilValue(dataState);
  const navigate = useNavigate();

  console.log(coffeeLists);

  const handleLogout = () => {
    navigate("/login");
    setAuthActive(false);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateLikes = () => {
    navigate("/likes");
  };

  const handleNavigateCartItems = () => {
    navigate("/cartItems");
  };

  const handleNavigateProfiles = () => {
    navigate("/profiles");
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <ImgBox>
            <Img src={img} alt="logo" />
          </ImgBox>

          <Button onClick={handleLogout}>🔙</Button>
        </Header>

        <Section>
          <Div className="main">
            <Div className="flex">
              <Logo src={logo3} className="logo__svg" />
              <Label htmlFor="espresso">에스프레소</Label>
              <Input type="checkbox" id="espresso" name="espresso" />
            </Div>
            <Div className="flex">
              <Logo src={logo7} />
              <Label htmlFor="cold__brew">콜드 브루</Label>
              <Input type="checkbox" id="cold__brew" name="cold__brew" />
            </Div>
            <Div className="flex">
              <Logo src={logo4} />
              <Label htmlFor="frappuccino">푸라푸치노</Label>
              <Input type="checkbox" id="frappuccino" name="frappuccino" />
            </Div>
            <Div className="flex">
              <Logo src={logo6} />
              <Label htmlFor="blended">블렌디드</Label>
              <Input type="checkbox" id="blended" name="blended" />
            </Div>
          </Div>

          <ContentBox>
            {coffeeLists.map((item: Props) => (
              <Contents key={item.id}>
                <ImgBox className="content">
                  <Img src={item.image} alt="logo" />
                </ImgBox>

                <Title>{item.title}</Title>
              </Contents>
            ))}
          </ContentBox>
        </Section>
      </Wrapper>

      <MenuIcons>
        <ImgBox className="icon__box" onClick={handleNavigateHome}>
          <Img src={home} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateLikes}>
          <Img src={heart} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateCartItems}>
          <Img src={cart} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateProfiles}>
          <Img src={profile} className="icons" />
        </ImgBox>
      </MenuIcons>
    </Container>
  );
};

export default Home;
