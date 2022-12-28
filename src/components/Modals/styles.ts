import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const ModalBox = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 3rem 0 1rem 0;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  background-color: #00c73a;
  color: #fff;
  padding: 1.2rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  margin: 1.6rem 0;
`;

export const ChargeBox = styled.div`
  position: relative;
  border-bottom: 1px solid #000;
  padding-bottom: 0.4rem;
`;

export const Price = styled.p`
  font-size: 2rem;
  user-select: none;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  padding: 1.4rem 4rem;
  background-color: #ffedb6;
  display: inline-block;

  &.pay__btn {
    background-color: #00c73a;
    color: #fff;
    padding: 1.2rem;
    margin-top: auto;
    font-size: 1.6rem;
    border: 1px solid #2b8a3e;

    &:hover {
      filter: brightness(110%);
    }
  }

  &.reset__btn {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0, 0);
    font-size: 2.6rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    background-color: inherit;
  }

  &.cash__btn:hover {
    filter: brightness(105%);
  }

  &.cash__btn {
    border: 1px solid #868e96;
    padding: 1.4rem 2.8rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  &.close__btn {
    position: absolute;
    padding: 1rem;
    top: 0%;
    right: 0%;
    border-radius: 1rem;
    background-color: black;
    color: #fff;
    font-size: 2rem;
  }
`;

export const Select = styled.select`
  padding: 1.2rem;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  margin: auto 0;
  outline: none;
  border-color: #868e96;
`;

export const Option = styled.option``;
