import { Container, Logo } from "./styles";
import spinner from "../../assets/spinner5.gif";

const Spinner = () => {
  return (
    <Container>
      <Logo src={spinner} />
    </Container>
  );
};

export default Spinner;
