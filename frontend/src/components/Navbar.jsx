import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import cryptocurrency from "../../images/cryptocurrency.png";

function linkToPage(title) {
  switch (title) {
    case "Cryptocurrencies":
      return '/cryptocurrencies';
    case "Exchanges":
      return '/cryptocurrencies';
    case "News":
      return '/news';
    case "Wallets":
      return '/cryptocurrencies';
    default:
      return '/';
  }
};


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = (path) => {
        console.log("path is: " + path);
        navigate(path);
    }

    const handleClickTest = () => {
      console.log("navBBarItem Clecked!");
    }

    const NavBarItem = ({ title, classprops }) => (
      <li className={`mx-4 cursor-pointer ${classprops}`} onClick={() => handleClick(linkToPage(title))}>
        {title}
      </li>
    );

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                 <img src={cryptocurrency} alt="logo" className="w-20 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Cryptocurrencies", "Exchanges", "News", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item}/>
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Cryptocurrencies", "Exchanges", "News", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
            <li className="bg-[#2952e3] my-2 text-lg mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
           </li>
          </ul>
        )}
      </div>

        </nav>
    );
}

export default Navbar;