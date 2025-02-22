import { Link } from "react-router-dom";
import amazonlogo from "../../assets/images/Amazon.png";
import indiaFlag from "../../assets/images/India.png";
import cartIcon from "../../assets/images/cartIcon.png";
import { MapPin ,Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Header =() => {
    return(
  <header className="flex items-center gap-[0.625rem]  px-[1.563rem] py-[0.649rem] bg-headerColor text-white font-Lato text-[1.13rem]">

    <Link to="/" className='py-[0.625rem] px-[1.375rem]' > 
        <img src={amazonlogo} alt="logo" className="px-[0.519rem]"/>
    </Link>

    <div className=' px-[0.636rem] py-[0.649rem]'>
        <p className="text-lightfont text-[0.989rem]">Delivering to Surat 394210</p>
          <div className="font-bold text-lg flex items-center">
              <Link to="/location" className="flex relative">
              <MapPin className="w-[1.231rem] h-[1.411rem] absolute translate-x-[-20px]" /> 
              Update location</Link>
           </div>
    </div>
    <form className='flex text-[1.392rem] px-[0.625rem]' onSubmit={(e)=>{e.preventDefault();}}>
         <button className="relative flex items-center gap-x-[0.707rem] py-[0.994rem] px-[0.848rem] bg-searchCategory text-searchCategoryColor rounded-l-[0.283rem]">
                All <FontAwesomeIcon icon={faCaretDown} className="text-inherit" />
         </button>
         <input  type="text" placeholder='Search Amazon.in' className="w-[21.201rem] text-[1.392rem] py-[0.992rem] pl-[0.706rem] text-black" />
         <button type="submit" className="px-[0.848rem] py-[1.201rem] bg-searchbtn rounded-r-[0.283rem] " >
              <Search className="w-[1.272rem] text-searchicon " />
         </button>
    </form>

    <div className='flex items-center gap-x-[0.314rem] px-[1.206rem] text-[1.223rem]'>
        <img src={indiaFlag} alt="icon" />
        <span>EN</span>
        <FontAwesomeIcon icon={faCaretDown} className="text-lightfont " />
    </div>

    <div className="px-[0.856rem]">
      <Link to="/login" className="text-[0.989rem]">Hello, sign in</Link>
    <div className="relative group">
        <button className="flex items-center gap-x-[0.353rem]  font-bold">
          Account &Lists 
        <FontAwesomeIcon icon={faCaretDown} className="text-lightfont pr-[1.163rem]" />
        </button>
        <div className="absolute right-0 mt-2 w-40 bg-white text-black border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Link to="/signUp" className="block px-4 py-2 hover:bg-gray-200">
            Sign Up
          </Link>
          <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-200">
            WishList
          </Link>
        </div>
      </div>
    
    </div>
    <Link to=" " className="px-[1.219rem] w-[7.063rem]">Returns & Orders</Link>
  
    <Link to="/cart" className="flex items-end gap-x-[0.353rem] px-[0.625rem] font-bold">
        <img src={cartIcon} alt="icon" className="w-[3.039rem]" />
        <a >Cart</a>
    </Link>
  </header>
    );
}
export default Header;