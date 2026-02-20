import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import Xicon from "../../assets/social/instagram.svg";
import linkedin from "../../assets/social/linkedin.svg";
import tiktok from "../../assets/social/tiktok.svg";

const Footer = ()=> {

    const socialLinks = [
        {icon:facebook, url: "https://facebook.com"},
        {icon:instagram, url: "https://instagram.com"},
        {icon:Xicon, url: "https://x.com"},
        {icon:linkedin, url: "https://linkedin.com"},
        {icon:tiktok, url: "https://tiktok.com"},
    ];
    return (
        <footer className="bg-[#0f1224] text-white pt-16 pb-6 ">
            <div className="max-w-7xl mx-auto px-6 grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg: grid-cols-4 gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold">Auto Nest</h2>
                    </div>

                    <p className="mt-4 text-sm text-gray-300">Your trusted partner for car rentals in Ethiopia</p>

                    <div className="flex gap-3 mt-5">
                        {socialLinks.map((item,index)=>(
                            <a key={index} href="item.url" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex item-center justify-center bg-gray-800 rounded-md hover: bg-gray-700 transition object-contain">
                                <img src= {item.icon} alt="social media" className="w-6 h-8 object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                     <h4 className="text-lg font-semibold mb-4">Page</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/" className="hover:text-white">Home</a></li>
                    <li><a href="/about" className="hover:text-white">About us</a></li>
                    <li><a href="/services" className="hover:text-white">Car Service</a></li>
                    <li><a href="/contacts" className="hover:text-white">Contact</a></li>
                </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/help" className="hover: text-white">Help center</a></li>
                        <li><a href="/terms" className="hover: text-white">Terms of Services</a></li>
                        <li><a href="/privacy" className="hover: text-white">Privacy Policy</a></li>
                        <li><a href="/cookies" className="hover: text-white">Cookie Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <div className="space-y-3 text-sm text-gray-300">
                        <a href="tell: +2519988462046" className="block hover:text-white">📞 +251988462046</a>
                        <a href="mailto:support@autonestrental.com" className="block hover:text-white">✉ support@autonestrental.com</a>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferreer" className="block hover: text-white">📍 Addis Ababa, Ethiopia</a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-4 px-6 max-w-7xl mx-auto flex -col md:flex-row justify-between text-xs text-gray-400">
                <p>© 2025 AutoNest. All rights reserved.</p>
                <p>Made with ❤️ in Ethiopia</p>
            </div>
        </footer>
    );
};

export default Footer;