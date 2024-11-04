import React from "react";
import { jsx } from "theme-ui";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as GatsbyLink, navigate } from "gatsby"; // Import Gatsby's Link and navigate
import Logo from "components/logoHeader";
import "../../i18n/config";
import Subitem from "../cards/Subitem";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuItems = [
    { name: "Home", anchor: "/", subItem: false, isHome: true },
    { name: "product", anchor: "", subItem: true },
    { name: "How it work", anchor: "HowUseIt", subItem: false },
    { name: "FAQs", anchor: "FAQs", subItem: false },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const initialLang = i18n.language;
    document.documentElement.setAttribute("lang", initialLang);
    document.body.style.direction = initialLang === "ar" ? "rtl" : "ltr";
  }, []);

  const changeLanguage = async () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    await i18n.changeLanguage(newLang);

    document.documentElement.setAttribute("lang", newLang);
    document.body.style.direction = newLang === "ar" ? "rtl" : "ltr";
    setCurrentLang(newLang);
  };

  const handleScrollLinkClick = (anchor) => {
    if (window.location.pathname !== "/") {
      // Navigate to the homepage first if on a different page
      navigate("/");

      // Add a short delay to ensure the navigation completes before scrolling
      setTimeout(() => {
        scroller.scrollTo(anchor, {
          smooth: true,
          duration: 500,
        });
      }, 300);
    } else {
      // Scroll directly if already on the homepage
      scroller.scrollTo(anchor, {
        smooth: true,
        duration: 500,
      });
    }
  };

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <li
        key={item.anchor}
        className="relative group"
        onMouseEnter={() => setHoveredItem(item.anchor)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {item.isHome ? (
          <GatsbyLink
            to={item.anchor}
            className="transition duration-300 cursor-pointer"
          >
            <span className="flex items-center text-gray-700 hover:text-[#5253B9]">
              {t(item.name)}
            </span>
          </GatsbyLink>
        ) : (
          <span
            onClick={() => handleScrollLinkClick(item.anchor)}
            className="transition duration-300 cursor-pointer"
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

            {item.subItem && hoveredItem === item.anchor && (
              <div className="">
                <Subitem />
              </div>
            )}
          </span>
        )}
      </li>
    ));

  return (
    <div className="fixed w-full z-50 backdrop-blur-md bg-transparent">
      <nav className="flex justify-between  lg:mx-24 mx-6 py-5">
        <GatsbyLink to={"/"} className="cursor-pointer">
          <Logo />
        </GatsbyLink>

        <button className="block   lg:hidden text-2xl" onClick={toggleSidebar}>
          &#9776;
        </button>

        <ul
          id="main-menu"
          className={`hidden lg:flex  flex-grow ps-12 items-center gap-6 justify-start`}
        >
          {renderMenuItems()}
        </ul>

        <div className="button-group hidden lg:flex gap-5 items-center">
          {/* <button className="bg-[#5253B9] shadow-custom border-[1px] border-blue-500 text-white  px-4 py-1 rounded-3xl">
            <a href="https://m26ulnzthn4.typeform.com/to/LgVAbyBc">
              {t("Signup")}
            </a>
          </button> */}
          <button
            onClick={changeLanguage}
            className="rounded-3xl w-[100px] py-1 shadow-lg border-[#00000099] bg-[#5253B917] outline-0 border"
          >
            {currentLang === "en" ? "Arabic" : "English"}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden min-h-[100vh]    fixed inset-0 bg-black bg-opacity-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className="bg-white  flex flex-col w-64 h-full p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <ul
            id="main-menu-mobile"
            className={`flex flex-col w-full flex-grow gap-3`}
          >
            {renderMenuItems()}
          </ul>

          <div className="button-group flex flex-col gap-5 items-start mt-5">
            {/* <button className="bg-[#5253B9] shadow-custom border-[1px] border-blue-600 text-white lg:w-[100px] w-full py-1 rounded-3xl">
            <a href="https://m26ulnzthn4.typeform.com/to/LgVAbyBc">
              {t("Signup")}
            </a>
            </button> */}
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
