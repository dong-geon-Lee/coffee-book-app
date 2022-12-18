import styled, { css, keyframes } from "styled-components";

interface props {
  src?: "string";
}

interface openProps {
  open?: boolean;
}

const rotating = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(-180deg);
  }
`;

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

  /* &:hover {
    transform: ${(props) =>
    props.open ? css` translateX(50%)` : css` translateX(0%)`};
  }

  &:hover .book {
    transform: ${(props) => (props.open ? `rotateY(-180deg)` : "")};
    transform-origin: ${(props) => (props.open ? "left" : "")};
  } */

  & {
    transform: ${(props) =>
      props.open ? "translateX(50%)" : "translateX(0%)"};
  }

  & .book {
    /* transform: ${(props) =>
      props.open ? `rotateY(-180deg)` : "rotateY(0deg)"}; */
    transform: ${(props) => props.open && "rotateY(-180deg)"};
    transform-origin: ${(props) => props.open && "left"};
  }
`;

export const ImageBox = styled.div`
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

  & + .img2 {
    backface-visibility: hidden;
    transform: rotateY(180deg);
    z-index: 2;
  }
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
    bottom: 5%;
    left: 40%;
    z-index: 0;
    width: 50%;
    opacity: ${(props) => (props.open ? 1 : 0)};
    transition: opacity 0.3s ease;
    transition-delay: 0.2s;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  color: #ffb167;
  font-size: 6.2rem;
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
    padding: 1rem 1.6rem;
    font-size: 1.8rem;
  }
`;
