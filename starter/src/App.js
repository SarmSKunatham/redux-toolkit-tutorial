import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./component/Modal";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      <h2>Redux Toolkit</h2>
    </>);
}
export default App;
