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

export const Section = styled.div`
  padding: 2rem 6rem;
  height: 70rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 23rem;
  height: 20rem;
  cursor: pointer;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

interface props {
  fill?: string;
}

export const StarImg = styled.img<props>`
  width: 2.2rem;
  height: 2.2rem;
  object-fit: cover;
  display: inline-block;

  & svg {
    fill: blue;
  }
`;

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20rem;
  overflow: hidden;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 1rem;
`;

export const Stars = styled.div`
  margin-top: auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  letter-spacing: 1px;
  margin: auto 0 0 0;
`;
