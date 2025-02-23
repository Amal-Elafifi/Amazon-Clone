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
        <div className="">
            <div className="font-gujarati  bg-upFooter text-white  text-center  py-[1.781rem] hover:cursor-pointer" onClick={scrollToTop}>Back to Top</div>

            <footer className="bg-footerbg text-white font-gujarati ">
                <section className="  text-[1.049rem] font-light flex items-start gap-x-[7.688rem] px-[10.388rem] pt-[3.161rem] pb-[3.934rem] border-b border-borderBottom hover:cursor-pointer ">
                
                    <table className="col1 w-[8.393rem] text-left">
                            <thead className="font-semibold text-[1.154rem]">Get to know Us</thead>
                            <tr>About Us</tr>
                            <tr>Careers</tr>
                            <tr>Press Releases</tr>
                            <tr>Amazon Science</tr>
                    </table>

              
                    <table className="col2 w-[8.393rem]">
                            <thead className="font-semibold text-[1.154rem]">Connect with Us</thead>
                            <tr>Facebook</tr>
                            <tr>Twitter</tr>
                            <tr>Instagram</tr>
                    </table>

                    <table className="col3 w-[14.688rem]">
                            <thead className="font-semibold text-[1.154rem]">Make Money with Us</thead>
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
                            <thead className="font-semibold text-[1.154rem]">Let Us Help You</thead>
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
                    <section className=" bg-Infobg  pt-[1.932rem] pb-[1.563rem] text-[0.917rem]  font-light hover:cursor-pointer">
                        <div className="flex gap-x-[8.125rem]  justify-center pr-[25.298rem] pl-[9.313rem]"> 
                        {/*  */}
                            <table className="w-[7.438rem]">
                                    <thead className="font-medium">AbeBooks</thead>
                                    <td className="text-light ">Books, art <br />& collectibles</td>
                            </table>
                            
                            <table className="w-[9.394rem]"> 
                                    <thead className="font-medium">Amazon web Services</thead>
                                    <td className="text-light">Scalable Cloud<br /> Computing Services</td>
                            </table>
                      
                            <table className="w-[8.028rem]">
                                    <thead className="font-medium">Audible</thead>
                                    <td className="text-light ">Download<br /> Audio Books</td>
                            </table>

                            <table className="w-[6.875rem]">
                                    <thead className="font-medium">IMDb</thead>
                                    <td className="text-light ">Movies, TV<br /> & Celebrities</td>
                            </table>
                        </div>
                        <div className="flex gap-x-[8.125rem] pt-[1.251rem] justify-center pl-[9.313rem] pr-[17.81rem]  ">
                        {/*  */}
                            <table className="w-[7.438rem]"> 
                                    <thead className="font-medium">Shop bop</thead>
                                    <td className="text-light ">Designer<br />Fashion Brands</td>
                            </table>
                            <table  className="w-[9.394rem]">
                                    <thead className="font-medium">Amazon Business</thead>
                                    <td className="text-light">Everything For<br /> Your Business</td>
                            </table>
                            <table className="w-[8.028rem]"> 
                                    <thead className="font-medium">Prime Now</thead>
                                    <td className="text-light ">2-Hour Delivery<br /> on Everyday Items</td>
                            </table>
                            <table className="w-[14.364rem]">
                                    <thead className="font-medium">Amazon Prime Music</thead>
                                    <td className="text-light">100 million sings, ad-free <br /> Over 15 million podcast episodes</td>
                            </table>

                        </div>
                        <table className="flex flex-col    text-center  mt-[1.693rem] text-[0.775rem] font-medium">
                        {/*ml-[33.188rem] */}
                                <tr className="flex justify-center gap-x-[1.625rem]  ">
                                    <td>Conditons of Use & Sale</td>
                                    <td>Privacy Notice</td>
                                    <td>Interset-Based Ads</td>
                                </tr>
                                <tfoot>1996-2024, Amazon.com, Inc. or its affiliates</tfoot>
                        </table>
                </section>
             

            </footer>
        </div>
    );
}
export default Footer ;