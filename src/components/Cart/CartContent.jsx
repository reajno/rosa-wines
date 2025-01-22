import { Button } from "@chakra-ui/react";
import useCartStore from "../../hooks/useCartStore";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, totalItems } =
    useCartStore();

  return (
    <>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - $ {item.price} x {item.quantity}
                <Button colorPalette="red" onClick={() => removeFromCart(item)}>
                  -
                </Button>
                <Button colorPalette="green" onClick={() => addToCart(item)}>
                  +
                </Button>
              </li>
            ))}
          </ul>

          <h1>TOTAL QTY ={totalItems().quantity}</h1>

          <h1>TOTAL PRICE = {totalItems().price}</h1>
        </div>
      )}
    </>
    // <div>

    // </div>
  );
};
export default Cart;
