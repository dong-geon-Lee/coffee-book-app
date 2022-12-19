import styled from "styled-components";

interface Props {
  img?: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-color: #e6ccb2;
  background-image: url(${(props) => props.img});
  background-size: 400% 200%;
  background-repeat: no-repeat;
  z-index: 1;
  padding: 2.6rem;
`;

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  &.main {
    padding: 4rem 2rem;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  padding: 1.8rem 2.4rem;
  font-size: 1.6rem;
  background-color: #7f553a;
  color: #fff;
  border-radius: 2rem;
  letter-spacing: 2px;

  &:hover {
    background-color: #855f46;
  }
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;

export const Text = styled.h2`
  font-size: 1.8rem;
`;
