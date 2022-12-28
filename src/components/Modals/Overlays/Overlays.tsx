import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../../atoms/modalState";
import { Container } from "./styles";

const Overlays = () => {
  const [, setModalState] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const handleOverlays = () => {
    setModalState(false);
    setOverlays(false);
  };

  return <Container onClick={handleOverlays}></Container>;
};

export default Overlays;
