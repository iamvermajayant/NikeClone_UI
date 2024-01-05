import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
import { searchIcon } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 absolute w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="flex justify-center items-center shadow appearance-none rounded-full py-2 px-3 
        text-gray-700 leading-tight focus:outline-none 
        focus:shadow-outline bg-slate-100"
        >
          <img
            className="cursor-pointer"
            src={searchIcon}
            alt=""
            height={25}
            width={25}
          />
          <input
            className="bg-slate-100 focus:outline-none px-2"
            id="username"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
