import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import amazonlogo from "../../assets/images/Amazon.png";
import indiaFlag from "../../assets/images/India.png";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Footer = ()=> {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return(
        <div className="font-gujarati ">
            <div className="bg-upFooter text-white  text-center  py-[1.781rem] hover:cursor-pointer" onClick={scrollToTop}>Back to Top</div>

            <footer className="bg-footerbg text-white">
                <section className="  text-[1.049rem] font-light flex items-start gap-x-[7.688rem] px-[10.388rem] pt-[3.161rem] pb-[3.934rem] border-b border-borderBottom">
                
                    <table className="col1 font-[inherit] w-[8.393rem] text-left">
                            <tr className="font-semibold text-[1.154rem]">Get to know Us</tr>
                            <tr>About Us</tr>
                            <tr>Careers</tr>
                            <tr>Press Releases</tr>
                            <tr>Amazon Science</tr>
                    </table>

              
                    <table className="col2 w-[8.393rem]">
                            <tr className="font-semibold text-[1.154rem]">Connect with Us</tr>
                            <tr>Facebook</tr>
                            <tr>Twitter</tr>
                            <tr>Instagram</tr>
                    </table>

                    <table className="col3 w-[14.688rem]">
                            <tr className="font-semibold text-[1.154rem]">Make Money with Us</tr>
                            <tr>Sell on Amazon</tr>
                            <tr>Sell under Amazon Accelerator</tr>
                            <tr>Protect and Build Your Brand</tr>
                            <tr>Amazon Global Selling</tr>
                            <tr>Supply to Amazon</tr>
                            <tr>Become an Affiliate</tr>
                            <tr>Fulfilment by Amazon</tr>
                            <tr>Advertise Your Products</tr>
                            <tr>Amazon Pay on Merchants</tr>
                    </table>

                    <table className="col4">
                            <tr className="font-semibold text-[1.154rem]">Let Us Help You</tr>
                            <tr>Your Account</tr>
                            <tr>Returns Center</tr>
                            <tr>Recalls and Products Safety Alerts</tr>
                            <tr>100% Purchase Protection</tr>
                            <tr>Amazon App Download</tr>
                            <tr>Help</tr>
                    </table>
                </section>
                
                <section className="bg-inherit flex justify-center gap-x-[3.75rem] items-center">
                    <Link to="/" className='pt-[1.594rem] pb-[2.782rem]' > 
                            <img src={amazonlogo} alt="logo" className="px-[0.483rem] py-[1.063rem] "/>
                    </Link>
                    <div className="text-footerdark  flex gap-x-[0.75rem] pt-[1.813rem] pb-[3.438rem]">
                            <div className="country flex gap-x-[0.625rem] p-[0.625rem] border rounded-[3px] border-footerdark w-[8.75rem]">
                                 <Globe></Globe>
                                <span className="pr-[1.625rem]">English</span>
                                <div className="updownicons flex flex-col items-center justify-center">
                                     <FontAwesomeIcon icon={faCaretUp} className="text-lightfont w-[0.5rem] h-[0.4rem]" /> 
                                     <FontAwesomeIcon icon={faCaretDown} className="text-lightfont  w-[0.5rem] h-[0.4rem]" />
                                </div>
                            </div>

                            <div className="language flex items-center gap-x-[0.625rem] border rounded-[3px] border-footerdark w-[6.875rem] p-[0.625rem] ">
                                 <img src={indiaFlag} alt="icon"  className="w-[1.125rem] h-[1.125rem]"/>
                                 <span>India</span>
                            </div>     
                    </div>


                    
                </section>    
                <section className="bg-Infobg">

                </section>

            </footer>
        </div>
    );
}
export default Footer ;