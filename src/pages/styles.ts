import styled, { css, keyframes } from "styled-components";

const openBook = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const closeBook = keyframes`
  from {
    opacity: 1
  }

  to {
    opacity: 0
  }
`;

interface props {
  src?: "string";
  image4?: "string";
  loginImg?: "string";
  open?: boolean;
}

interface openProps {
  open?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div<openProps>`
  width: 60rem;
  height: 80rem;
  box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.25);
  position: relative;
  transition: all 1s ease;
  perspective: 60cm;
  transform-style: preserve-3d;
  transform: translateX(0%);
  z-index: 5;
  will-change: transition;

  & {
    transform: ${(props) =>
      props.open ? "translateX(50%)" : "translateX(0%)"};
  }

  & .book {
    transform: ${(props) => props.open && "rotateY(-180deg)"};
    transform-origin: ${(props) => props.open && "left"};
  }
`;

export const ImageBox = styled.div<props>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 1s ease;
  transform-style: preserve-3d;
  background-color: #000;
`;

export const Img = styled.div<props>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.src});
  transform-style: preserve-3d;
  backface-visibility: hidden;

  & + .back__image {
    z-index: 2;
    transform: rotateY(180deg);
    filter: brightness(200%);
    background-size: cover;
    background-position: left;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Div = styled.div<openProps>`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 100%;
  opacity: 0;

  &.start {
    opacity: 1;
  }

  &.back {
    position: absolute;
    bottom: 30%;
    left: 50%;
    z-index: 0;
    opacity: ${(props) => (props.open ? 1 : 0)};
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  color: #ffb167;
  font-size: 7.2rem;
  width: 100%;
  text-align: center;
  z-index: 1;
  letter-spacing: 1px;
`;

export const Strong = styled.strong`
  color: #fff;
`;

export const Button = styled.div`
  padding: 1.4rem 2rem;
  background-color: #7f553a;
  color: #fff;
  border: none;
  border-radius: 2rem;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #855f46;
  }

  &.back__btn {
    padding: 1.4rem 1.6rem;
    font-size: 1.8rem;
    width: 50%;
  }
`;

export const LoginBox = styled.div<props>`
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.loginImg});
  background-size: cover;
  background-position: right;

  ${(props) =>
    props.open
      ? css`
          animation: ${openBook} 2s alternate;
        `
      : css`
          animation: ${closeBook} 1s alternate;
        `}
`;
