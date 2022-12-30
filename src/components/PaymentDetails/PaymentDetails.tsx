import NavMenu from "../NavMenu/NavMenu";
import { Container, Section, Logo, Title, Header } from "./styles";
import back from "../../assets/back.svg";
import note from "../../assets/note.svg";
import { Link } from "react-router-dom";
import { paymentDetailState } from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";

const PaymentDetails = () => {
  const paymentDetail = useRecoilValue(paymentDetailState);
  console.log(paymentDetail);
  return (
    <Container>
      <Section>
        <Header>
          <Link to="/profiles">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>결제내역</Title>
          <Logo src={note} alt="logo" className="logo" />
        </Header>

        {paymentDetail.map((item: any) => (
          <div key={item.id}>
            <h1>Serial No:{item.id}</h1>
            <h1>size:{item.size}</h1>
            <h1>price:{item.price}</h1>
            <h1>title:{item.title}</h1>
            <h1>total:{item.total}</h1>
          </div>
        ))}
      </Section>
      <NavMenu />
    </Container>
  );
};

export default PaymentDetails;
