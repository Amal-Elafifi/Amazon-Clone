import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getWishlist,
  removeProductFromWishlist,
} from "../slices/wishlist.slice";
import { addProductToCart } from "../slices/cart.slice";
export default function Wishlist() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.wishlistReducer.isLoading);
  const wishlistInfo = useSelector(
    (store) => store.wishlistReducer.wishlistInfo
  );
  console.log(wishlistInfo);

  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getWishlist());
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return <h1>Loading....................</h1>;
  }
  return (
    <>
      <section className="my-10 font-Encode">
        {wishlistInfo?.count === 0 ? (
          <div className="text-center">
            <img
              src="/empty_wishlist.svg"
              className="mx-auto w-1/3"
              alt="empty wishlist"
            />
            <p className="text-center text-3xl font-extrabold my-4 ">
              Your Wishlist Is Empty
            </p>
            <Link
              to="/"
              className="bg-[red] text-white font-bold px-4 py-3 rounded-lg hover:text-white border border-[red] active:scale-95"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center flex items-center  justify-center gap-2 relative before:absolute before:bottom-0 before:left-[50%] before:w-24 before:rounded-lg before:h-1 before:top-full before:-translate-x-1/2 before:bg-[red]">
              <i className="fa-solid fa-heart text-2xl text-[red]"></i>
              <h2 className="font-bold text-2xl">Your Wishlist</h2>
            </div>
            <div className="rounded-lg overflow-hidden w-full md:w-8/12  border-[1px] mt-4 border-b-[0px] border-[red] mx-auto">
              <table className="w-full text-center font-bold table-fixed">
                <thead className="items-center  bg-[red] text-white">
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="">
                  {wishlistInfo?.data?.map((product) => (
                    <tr key={product.id} className="border-b border-[red]">
                      <td
                        onClick={() => {
                          // hn3ml navigate le el product details
                          // navigate(``)
                        }}
                        className="cursor-pointer"
                      >
                        <img
                          className="w-16 md:ml-10 p-1 rounded-lg"
                          src={product.imageCover}
                          alt=""
                        />
                      </td>
                      <td
                        onClick={() => {
                          // hn3ml navigate le el product details
                          // navigate(``)
                        }}
                        className="cursor-pointer"
                      >
                        {product?.title?.split(" ").slice(0, 5).join(" ")}
                      </td>
                      <td>EGP {product.price}</td>
                      <td className="flex gap-2 flex-col items-center md:flex-row md:justify-center md:mt-5">
                        <div
                          className="w-10 h-10 rounded-full bg-[red] text-lg text-white flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-12"
                          onClick={(e) => {
                            dispatch(addProductToCart(product.id));
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div
                          className="w-10 h-10 rounded-full bg-red-600 text-lg text-white flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-12"
                          onClick={(e) => {
                            dispatch(removeProductFromWishlist(product.id));
                            setTimeout(() => {
                              dispatch(getWishlist());
                            }, 1200);
                          }}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
}
