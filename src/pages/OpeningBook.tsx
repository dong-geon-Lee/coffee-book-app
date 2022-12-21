import {
  ImageBox,
  Container,
  Div,
  Img,
  Wrapper,
  Button,
  Title,
  Strong,
  LoginBox,
} from "./styles";
import image from "../assets/coffee.jpg";
import image2 from "../assets/login3.jpg";
import image4 from "../assets/login3.jpg";
import Login from "../components/Login/Login";
import { authActiveState, openBookState } from "../atoms/userAuthState";
import { useRecoilState, useRecoilValue } from "recoil";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import CartItems from "../components/CartItems/CartItems";
import Profiles from "../components/Profiles/Profiles";
import Likes from "../components/Likes/Likes";

const OpeningBook = () => {
  const [openBook, setOpenBook] = useRecoilState(openBookState);
  const authActive = useRecoilValue(authActiveState);

  const handleBookPage = () => {
    setOpenBook((prevState) => !prevState);
  };

  return (
    <Container>
      <Wrapper open={openBook}>
        <LoginBox loginImg={image2} open={openBook}>
          {openBook && (
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="likes" element={<Likes />} />
                <Route path="cartItems" element={<CartItems />} />
                <Route path="profiles" element={<Profiles />} />
              </Routes>
            </Router>
          )}

          {!authActive && (
            <Div className="back" open={openBook}>
              <Button onClick={handleBookPage} className="back__btn">
                ⬅ 나가기
              </Button>
            </Div>
          )}
        </LoginBox>

        <ImageBox className="book" open={openBook}>
          <Title>
            <Strong>Coffee</Strong> Book
          </Title>

          <Img src={image} />
          <Img src={image4} className="back__image"></Img>

          <Div className="start">
            <Button onClick={handleBookPage}>시작하기</Button>
          </Div>
        </ImageBox>
      </Wrapper>
    </Container>
  );
};

export default OpeningBook;
