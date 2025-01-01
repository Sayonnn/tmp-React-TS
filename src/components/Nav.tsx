import { icons } from "../utilities/icons";
import Logo from "../assets/images/Logo_2.png";
import { useCallback, useEffect,  useRef, useState } from "react";

function Nav() {
  const [position, setPosition] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsExpanded(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (isExpanded) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsExpanded(!isExpanded);
  };

  const changeActiveMenu = (menu: string): void => {
    setActiveMenu(menu);
  };

  const loadMenus = useCallback(() => {
    const menus: string[] = ["Home", "Explore", "Knights", "About"];
    return menus.map((menu, index) => (
      <li
        key={index}
        onClick={() => changeActiveMenu(menu)}
        className={`transition ease-in duration-200 cursor-pointer  p-2 hover:text-gray-50  rounded-md ${
          activeMenu === menu ? "font-bold text-gray-50 bg-emerald-900/90 " : ""
        }`}
      >
        {menu}
      </li>
    ));
  }, [activeMenu]);

  return (
    <>
      <nav
        className={`md:px-40 md:gap-4 md:h-[100px] h-[70px] px-4 w-full z-50 transition ease-linear duration-150 fixed flex items-center justify-between ${
          position && "bg-gray-900/60 backdrop-blur-lg"
        }`}
        ref={navRef}
      >
        <span>
          <img
            alt="logo"
            src={Logo}
            className="object-contain md:w-[150px] md:h-[100px] w-[120px] h-[100px]"
          />
        </span>

        <span className="md:hidden" onClick={toggleSidebar}>
          {icons.iMenuFill}
        </span>
        <ul className="md:flex gap-4 hidden">{loadMenus()}</ul>
      </nav>

      <section
        className={`fixed w-full h-[100vh] bg-gray-900 top-0 z-40 mt-[60px] transition ease-in duration-200 p-4 ${
          isExpanded ? "translate-x-0" : "translate-x-[-2000px]"
        }`}
      >
        <ul className="flex gap-4 flex-col text-xl">
          <li>Explore</li>
          <li>Knights</li>
          <li>About</li>
        </ul>
      </section>
    </>
  );
}

export default Nav;
