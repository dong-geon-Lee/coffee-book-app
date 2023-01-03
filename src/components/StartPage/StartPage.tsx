import { HashRouter as Router, Link } from "react-router-dom";
import { Div, Button, Title, Strong, Img, ImageBox } from "./styles";
import { openBookProps } from "../../@types/types";
import image from "../../assets/coffee.jpg";
import image4 from "../../assets/login3.jpg";

const StartPage = ({ handleBookPage, openBook }: openBookProps) => {
  return (
    <ImageBox className="book" open={openBook}>
      <Title>
        <Strong>Coffee</Strong> Book
      </Title>
      <Img src={image} />
      <Img src={image4} className="back__image" />
      <Router>
        <Link to="/login">
          <Div className="start">
            <Button onClick={() => handleBookPage()}>시작하기</Button>
          </Div>
        </Link>
      </Router>
    </ImageBox>
  );
};

export default StartPage;
