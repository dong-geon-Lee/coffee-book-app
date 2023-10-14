import OpeningBook from "./pages/OpeningBook";
// import axios from "axios";
// import { useEffect } from "react";
// import { coffeeItemState } from "./recoils/coffeeItemState";
// import { useRecoilState } from "recoil";

const App = () => {
  // const [coffeeItems, setCoffeeItems] = useRecoilState(coffeeItemState);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:5000/coffee");
  //     const datas = await response.data;
  //     setCoffeeItems(datas);
  //   };
  //   fetchData();
  // }, []);

  return <OpeningBook />;
};

export default App;
