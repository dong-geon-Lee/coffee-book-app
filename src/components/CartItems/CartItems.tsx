import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import { Section, Container } from "./styles";

const CartItems = () => {
  return (
    <Container>
      <Section>
        <h1>CartItems</h1>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default CartItems;
