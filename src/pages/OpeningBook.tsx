import Login from "./Login/Login";
import Home from "./Home/Home";
import CartItems from "./CartItems/CartItems";
import Profiles from "./Profiles/Profiles";
import Likes from "./Likes/Likes";
import Product from "./Product/Product";
import Checkout from "./CheckOut/Checkout";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import StartPage from "../components/StartPage/StartPage";
import image2 from "../assets/login3.jpg";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState, openBookState } from "../recoils/userAuthState";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Div, Wrapper, Button, LoginBox } from "./styles";

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
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="home/:id" element={<Product />} />
                <Route path="likes" element={<Likes />} />
                <Route path="cartItems" element={<CartItems />} />
                <Route path="profiles" element={<Profiles />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="details" element={<PaymentDetails />} />
              </Routes>
            </Router>
          )}
          {!authActive && (
            <Router>
              <Link to="/">
                <Div className="back" open={openBook}>
                  <Button onClick={handleBookPage} className="back__btn">
                    ⬅ 나가기
                  </Button>
                </Div>
              </Link>
            </Router>
          )}
        </LoginBox>

        <StartPage handleBookPage={handleBookPage} openBook={openBook} />
      </Wrapper>
    </Container>
  );
};

export default OpeningBook;
