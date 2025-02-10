import useCartStore from "@/hooks/useCartStore";
import { Button } from "../ui/button";
import { toaster } from "../ui/toaster";

const AddToCartButton = ({ item }) => {
  const { name } = item;
  const { addToCart } = useCartStore();
  return (
    <Button
      colorPalette="green"
      size="lg"
      onClick={() => {
        addToCart(item);
        toaster.create({
          description: `${name} was added to your cart`,
          type: "success",
        });
      }}
      w="100%"
    >
      Add to Cart
    </Button>
  );
};
export default AddToCartButton;
