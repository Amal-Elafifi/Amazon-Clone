import { Link } from "react-router-dom";
import amazonlogo from "../../assets/images/Amazon.png";
import { MapPin } from "lucide-react";
const Header =() => {
    return(
  <header className="flex items-center gap-[0.625rem]  px-[0.625rem] py-[0.649rem] bg-headerColor text-white font-Lato">
    <Link to="/" className='py-[0.625rem] px-[1.375rem]' > 
        <img src={amazonlogo} alt="logo" />
    </Link>

    <div className='px-[0.625rem] py-[0.649rem]'>
            <p>Delivering to Surat 394210</p>

            <div className="font-bold text-lg flex items-center">
              <MapPin className="w-[1.231rem] h-[1.411rem]" /> 
              <Link to="/location">Update location</Link>
            </div>

    </div>
    <div className='text-[1.392rem]'>
         <input  type="search" placeholder='Search Amazon.in' />
    </div>
    <div className=''>
        <i></i>
        <ul><li>EN</li></ul>
    </div>
    <div className="relative">
    <Link to="/login">Hello, sign in</Link>
    <div className="relative group">
        <button>
          Account &Lists 
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
    <div>
        <a>Returns & Orders</a>
    </div>
    <div>
        <i></i>
        <a>Cart</a>
    </div>
  </header>
    );
}
export default Header;