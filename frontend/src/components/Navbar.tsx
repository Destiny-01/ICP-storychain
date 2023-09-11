import Logo from "../assets/logo.png";
import Menu from "../assets/hamburger.png";
import { createRef } from "react";

function Navbar() {
  const ref = createRef<HTMLUListElement>();

  const handleClick = () => {
    if (ref.current) {
      ref.current.style.display =
        ref.current.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center md:pl-8 md:pr-16 px-4 py-2 justify-between uppercase">
        <div className="flex gap-x-8 items-center">
          <img src={Logo} className="h-16" alt="logo" />
          <ul className="list-none md:flex items-center hidden gap-x-6 bg-white">
            <li className="text-lg">
              <a href="/#how-to" data-te-smooth-scroll-init>
                How To
              </a>
            </li>
            <li className="text-lg">
              <a href="/#about">About</a>
            </li>
            <li className="text-lg">
              <a href="/stories">Explore</a>
            </li>
            <li className="text-lg">
              <a href="/create">Create</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden block" onClick={handleClick}>
          <img src={Menu} className="h-12" alt="menu" />
        </div>
        <button className="hidden md:block">Connect Wallet</button>
      </div>
      <ul className="list-none hidden gap-x-6 pb-4 bg-white pl-8" ref={ref}>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/#how-to" data-te-smooth-scroll-init>
            How To
          </a>
        </li>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/#about">About</a>
        </li>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/stories">Explore</a>
        </li>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/create">Create</a>
        </li>
        <button>Connect Wallet</button>
      </ul>
    </div>
  );
}

export default Navbar;
