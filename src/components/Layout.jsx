import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";//this render the active page here so Navbar and footer stay fixed


function Layout(){
    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
        <Outlet />
        </main>
        <Footer />
        </div>
        </>
    );
};

export default Layout;