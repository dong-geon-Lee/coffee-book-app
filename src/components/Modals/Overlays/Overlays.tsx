import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../../recoil/modalState";
import { Container } from "./styles";

const Overlays = () => {
  const [, setModalState] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const handleOverlays = () => {
    setModalState(false);
    setOverlays(false);
  };

  return <Container onClick={handleOverlays} />;
};

export default Overlays;
