import styled from "styled-components";

interface props {
  open?: boolean;
}

export const Container = styled.div<props>`
  width: 60rem;
  height: 80rem;
  position: relative;
`;

export const Wrapper = styled.div<props>`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1.4rem 0;
`;

export const Label = styled.label`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  padding: 1.4rem 2rem;
  font-size: 2.4rem;
  font-weight: 500;
  background-color: #f3d5b5;
  border-radius: 2.4rem;
`;

export const Button = styled.button`
  padding: 1.6rem 1.6rem;
  background-color: #7f553a;
  color: #fff;
  border: none;
  border-radius: 2rem;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;
  margin-top: 3rem;
`;
