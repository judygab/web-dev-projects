import Search from "../../assets/icons/search.svg";
import User from "../../assets/icons/user.svg";
import Cart from "../../assets/icons/cart.svg";
import { NavButton } from "./NavButton";
import { NavLink } from "./NavLink";

export const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <div className="flex flex-col">
                <nav className="flex justify-around bg-white/80
                    backdrop-blur-md shadow-md w-full
                    fixed top-0 left-0 right-0 z-10">
                    <div className="navbar__menu-left flex h-100 items-center hidden space-x-8 lg:flex">
                        <ul>
                            <NavLink 
                                url="/women"
                                label="Women"
                                />
                        </ul>
                    </div>
                    <div className="flex items-center">
                        LOGO
                    </div>
                    <div className="flex items-center space-x-5">
                        <a className="flex text-gray-600 hover:text-blue-500
                            cursor-pointer transition-colors duration-300">
                        </a>
                        <NavButton url="/search"><Search /></NavButton>
                        <NavButton url="/user"><User /></NavButton>
                        <NavButton url="/cart"><Cart /></NavButton>
                    </div>
                </nav>
            </div>
            </div>
    )
}