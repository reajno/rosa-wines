import useCartStore from "@/hooks/useCartStore";
import { Button } from "../ui/button";
import { toaster } from "../ui/toaster";

const AddToCartButton = ({ product, productName }) => {
  const { addToCart } = useCartStore();
  return (
    <Button
      colorPalette="green"
      size="lg"
      onClick={() => {
        addToCart(product);
        toaster.create({
          description: `${productName} was added to your cart`,
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
