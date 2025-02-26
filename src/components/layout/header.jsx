import { Link } from "react-router-dom";
import amazonlogo from "../../assets/images/Amazon.png";
import indiaFlag from "../../assets/images/India.png";
import cartIcon from "../../assets/images/cartIcon.png";
import { MapPin ,Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getCartProducts } from "../../slices/cart.slice";
const Header =() => {

  const menuRef = useRef(null)
  const dispatch = useDispatch();
  const cartInfo = useSelector(store=>store.cartReducer.cartInfo)
  useEffect(()=>{
    dispatch(getCartProducts())
  },[])

  function handleMenu(e) {
    e.preventDefault()
    menuRef.current.classList.toggle('hidden')
  }




    return(
  <header className="w-screen relative">
    <div className="head-container flex items-center 
    justify-evenly bg-[#131921] 
    px-[25px] py-[10px] text-amber-50">
      <Link to="/" className='' > 
          <img src={amazonlogo} alt="logo" className="object-cover"/>
      </Link>
      <div className="location relative text-sm font-bold pl-6
      hover:border-amber-50 border-2 border-[#131921] py-1 pr-1 cursor-pointer">
        <p className="text-[#C0CCCC] font-normal text-xs">Delivering to Surat 394210</p>
        <h3>Update location</h3>
        <MapPin className="absolute bottom-1 left-0 h-[20px]" /> 
      </div>
      <form className="flex items-center justify-center h-[40px]">
        <button 
        onClick={handleMenu}
          className="h-full px-2 bg-[#D9D9D9] text-[#676565]
          rounded-l-md flex items-center gap-2"
        >
          All
          <FontAwesomeIcon icon={faCaretDown} className="text-inherit" />
        </button>
        <div ref={menuRef} className="menu bg-[#232F3E] text-amber-50 
        absolute top-full px-3 py-2 left-0 w-screen z-20">
          <ul className="list-none flex justify-evenly  text-sm">
            <li><Link href="#">Amazon mini TV</Link></li>
            <li><Link href="#">Sell</Link></li>
            <li><Link href="#">Best Sellers</Link></li>
            <li><Link href="#">Today’s Deals</Link></li>
            <li><Link href="#">Mobiles</Link></li>
            <li><Link href="#">Customer Service</Link></li>
            <li><Link href="#">Prime</Link></li>
            <li><Link href="#">Electronics</Link></li>
            <li><Link href="#">Fashion</Link></li>
            <li><Link href="#">New Releases</Link></li>
            <li><Link href="#">Home & Kitchen</Link></li>
            <li><Link href="#">Amazon Pay</Link></li>
          </ul>
        </div>
        <input 
          type="text" 
          placeholder="Search Amazon.in"
          className="h-full px-2 border-none outline-none text-[#131921] "
        />
        <button onClick={(e) => e.preventDefault()} className="bg-[#FFCC00] text-[#212121] h-full px-2
        rounded-r-md">
        <Search className="" />
        </button>
      </form>
      <div className="flex flex-col relative pr-4 
      hover:border-amber-50 border-2 border-[#131921] p-1">
        <p className="text-sm">Hello, sign in</p>
        <div className="lists flex gap-2 cursor-pointer font-semibold">
        <h3>Account &Lists</h3>
        <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <Link to='/allorders' className="orders hover:text-amber-50 
      hover:border-amber-50 border-2 border-[#131921] p-1">
        <p>
          Returns <br/> & Orders
        </p>
      </Link>
      <Link to="/cart" className="flex flex-col items-center hover:border-amber-50 border-2 border-[#131921] p-1 hover:text-amber-50">
          <span>{cartInfo?cartInfo.numOfCartItems:<i className="fa-solid fa-spinner fa-spin"></i>}</span>
          <FontAwesomeIcon icon={faCartShopping}
          className="text-2xl" />          
          
      </Link>
      <Link to="/wishlist" className=" hover:border-amber-50 border-2 border-[#131921] p-1 hover:text-amber-50">
              WishList
      </Link>
      <Link to='/login' className="text-red-600 hover:text-amber-50">
        Logout
      </Link>
    </div>
  </header>
    );
}
export default Header;