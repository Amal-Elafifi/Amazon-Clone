import { useDispatch } from "react-redux";
import { addProductToCart } from "../slices/cart.slice";

const Button = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(addProductToCart(productId));
      }}
      className="button bg-[#FFCC00] py-[7px] px-[18px] text-center rounded-[20px] w-fit h-fit text-sm font-light cursor-pointer transition-all duration-300 hover:scale-110 active:scale-90 "
    >
      Add to cart
    </div>
  );
};

export default Button;
