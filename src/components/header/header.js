/** @jsx jsx */
import { jsx } from "theme-ui";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-scroll"; // Importing Link from react-scroll
import Logo from "components/logoHeader";
import "../../i18n/config";
import Subitem from "../cards/Subitem";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("ar");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // State for hovered menu item

  const changeLanguage = async () => {
    const mainMenu = document.getElementById("main-menu");
    const newLang = currentLang === "en" ? "ar" : "en";

    await i18n.changeLanguage(newLang);

    if (mainMenu) {
      mainMenu.style.direction = newLang === "ar" ? "rtl" : "ltr";
    }
    document.documentElement.setAttribute("lang", newLang);
    document.body.style.direction = newLang === "ar" ? "rtl" : "ltr";
    setCurrentLang(newLang);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: "Home", anchor: "home", subItem: false },
    { name: "Why hjz", anchor: "", subItem: true },
    { name: "OUR_MISSION", anchor: "OUR_MISSION", subItem: false },
    { name: "FAQs", anchor: "FAQs", subItem: false },
    { name: "How it work", anchor: "HowUseIt", subItem: false },
  ];

  const renderMenuItems = (isMobile = false) =>
    menuItems.map((item) => (
      <li
        key={item.anchor}
        className="relative group"
        onMouseEnter={() => setHoveredItem(item.anchor)} // Set hovered item
        onMouseLeave={() => setHoveredItem(null)} // Reset hovered item on leave
      >
        <Link
          to={item.anchor}
          smooth
          duration={500}
          activeClass="active"
          className="  transition duration-300 cursor-pointer "
        >
        <span className="flex items-center text-gray-700 hover:text-[#5253B9]">
        {t(item.name)}
          {item.subItem ? (
            hoveredItem === item.anchor ? (
              <MdOutlineKeyboardArrowUp className="ml-2" />
            ) : (
              <MdOutlineKeyboardArrowDown className="ml-2" />
            )
          ) : null}
        </span>

              {/* Display Subitem on hover */}
        {item.subItem && hoveredItem === item.anchor && (
          <div className="">
            <Subitem />
          </div>
        )}
        </Link>

    
      </li>
    ));

  return (
    <div className="fixed w-full z-50 backdrop-blur-md bg-white/60">
      <nav className="flex justify-between lg:mx-24 mx-6 py-5">
        <Logo />

        {/* Mobile menu button */}
        <button className="block lg:hidden text-2xl" onClick={toggleSidebar}>
          &#9776; {/* Menu icon */}
        </button>

        {/* Desktop menu */}
        <ul
          id="main-menu"
          className={`hidden lg:flex items-center gap-12 justify-center`}
        >
          {renderMenuItems()}
        </ul>

        {/* Desktop button group */}
        <div className="button-group hidden lg:flex gap-5 items-center">
          <button className="bg-[#5253B9] shadow-xl text-white w-[100px] py-1 rounded-3xl">
            {t("Signup")}
          </button>
          <button
            onClick={changeLanguage}
            className="rounded-3xl w-[100px] py-1 shadow-lg border-[#00000099] bg-[#5253B917] outline-0 border"
          >
            {currentLang === "en" ? "Arabic" : "English"}
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`lg:hidden h-[100vh] fixed inset-0 bg-black bg-opacity-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleSidebar}
        
      >
        <div
          className="bg-white flex  flex-col w-64 h-full p-5"
          onClick={(e) => e.stopPropagation()} // Prevent sidebar close on click inside
        >
          {/* Sidebar menu */}
          <ul
            id="main-menu-mobile"
            className={`flex flex-col w-full    flex-grow gap-3 `}
          >
            {renderMenuItems(true)}
          </ul>

          {/* Sidebar button group */}
          <div className="button-group flex flex-col gap-5 items-start mt-5">
            <button className="bg-[#5253B9] shadow-xl text-white lg:w-[100px] w-full py-1 rounded-3xl">
              {t("Signup")}
            </button>
            <button
              onClick={changeLanguage}
              className="rounded-3xl lg:w-[100px] w-full py-1 shadow-lg border-[#00000099] bg-[#5253B917] outline-0 border"
            >
              {currentLang === "en" ? "Arabic" : "English"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
