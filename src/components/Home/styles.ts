import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f9e9db;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 1.4rem 3rem;
  height: 70rem;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &.main {
    border: 3px solid #ddd;
    margin: 2rem 0 3.6rem 0;
  }

  &.flex {
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem;

    &:hover {
      background-color: #e6ccb2;
      color: black;
    }
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;

  &.content {
    width: 14rem;
    height: 14rem;
    cursor: pointer;
  }

  &.content-img {
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  padding: 1.6rem 2rem;
  font-size: 4rem;
  background-color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  user-select: none;
  margin-top: 1.4rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 0;
  user-select: none;
  cursor: pointer;
`;

export const Section = styled.section``;

export const Input = styled.input`
  width: 2rem;
  height: 2rem;
`;

export const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: baseline;
  align-items: baseline;
  gap: 1.6rem 4.8rem;
`;

export const Contents = styled.div``;
