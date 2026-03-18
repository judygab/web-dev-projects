import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";

export const Header = ({ cartCount }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])

    return (
        <nav id="header" className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-lg bg-black/40 border-b border-white/10 text-white shadow-xl">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-6">
                <div className="logo-wrapper flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center gap-2 group">
                        <img src={foody} alt="logo" className="w-16 h-16 object-cover transform group-hover:scale-110 transition duration-300 drop-shadow-[0_0_15px_rgba(255,190,11,0.5)]"/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-marigold to-tomato">Foody</span>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-lg font-medium hover:text-marigold transition duration-300">Home</Link>
                    <Link to="#about" className="text-lg font-medium hover:text-marigold transition duration-300">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-6">
                    <Link to="/cart" className="relative group p-2 rounded-full hover:bg-white/10 transition duration-300">
                        <img src={cartIcon} alt="cart" className="w-7 h-7 filter invert opacity-80 group-hover:opacity-100 transition duration-300"/>
                        {cartCount > 0 ? <div className="rounded-full bg-tomato text-white inline-flex justify-center items-center w-5 h-5 text-xs font-bold absolute 0 top-0 right-0 shadow-[0_0_10px_rgba(229,9,20,0.8)]">{cartCount}</div> : null}
                    </Link>
                    {
                        isLoggedIn ? 
                        <Button onClick={handleLogout} variant="secondary">Log Out</Button> : 
                        (
                            <div className="flex space-x-4 items-center">
                             <Link to="/login" className="text-lg font-medium hover:text-marigold transition duration-300">Log In</Link>
                             <Link to="/register"><Button>Sign Up</Button></Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}