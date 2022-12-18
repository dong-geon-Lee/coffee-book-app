import {
  ImageBox,
  Container,
  Div,
  Img,
  Wrapper,
  Button,
  Title,
  Strong,
} from "./styles";
import image from "../assets/coffee3.jpg";
import image2 from "../assets/coffee2.jpg";
import { useState } from "react";

const OpeningBook = () => {
  const [openBook, setOpenBook] = useState(false);

  const handleBookPage = () => {
    setOpenBook((prevState) => !prevState);
  };

  return (
    <Container>
      <Wrapper open={openBook}>
        <Div className="back" open={openBook}>
          <Button onClick={handleBookPage} className="back__btn">
            ← 돌아가기
          </Button>
        </Div>

        <ImageBox className="book">
          <Title>
            <Strong>Coffee</Strong> Book
          </Title>

          <Img src={image} />
          <Img src={image2} className="img2" />

          <Div className="start">
            <Button onClick={handleBookPage}>시작하기</Button>
          </Div>
        </ImageBox>
      </Wrapper>
    </Container>
  );
};

export default OpeningBook;
