import React from "react";
import { useTranslation } from "react-i18next";
import { Link as GatsbyLink } from "gatsby"; // Import Gatsby's Link for internal links
import how01 from "../../assets/images/speech-to-text.svg";
import how02 from "../../assets/images/text-to-speech.svg";
import how03 from "../../assets/images/AI-to-speech.svg";

function Subitem() {
  const { t } = useTranslation();

  const steps = [
    {
      imgSrc: how01,
      titleKey: "How-work-Title-01",
      descriptionKey: "How-work-Description-01",
      link: "/product", // Internal link
      new: false,
    },

    {
      imgSrc: how03,
      titleKey: "How-work-Title-03",
      descriptionKey: "How-work-Description-03",
      link: "/", // External link
      new: false,
    },
    {
      imgSrc: how02,
      titleKey: "How-work-Title-02",
      descriptionKey: "How-work-Description-02",
      link: "/", // Internal link
      new: true,
    },
  ];

  return (
    <div className="">
      {/* Desktop version */}
      <div className="lg:block hidden bg-white shadow-md rounded-md">
        <div className="flex flex-col absolute z-50 top-[90%] start-[3%] font-light text-sm bg-white border border-[#2121211a] rounded-xl min-w-[450px]">
          {steps.map((item, index) => {
            const isExternal = item.link.startsWith("http");

            return isExternal ? (
              // For external links, use <a> directly
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center text-gray-700 hover:text-[#5253B9] hover:bg-[#cfcece28] px-6 rounded-xl cursor-pointer p-3 transition-all duration-300 ease-in-out hover:text-[16px]"
              >
                <div>
                  <img src={item.imgSrc} alt={item.titleKey} />
                </div>
                <div>
                  <h1 className="font-semibold">{t(item.titleKey)}</h1>
                  <p className="text-xs text-[#929292]">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </a>
            ) : (
              // For internal links, use GatsbyLink
              <GatsbyLink
                key={index}
                to={item.link}
                className="flex gap-2 items-start  text-gray-700 hover:text-[#5253B9] hover:bg-[#cfcece28] px-6 rounded-xl cursor-pointer p-3 transition-all duration-300 ease-in-out hover:text-[16px]"
              >
                <div>
                  <img
                    src={item.imgSrc}
                    alt={item.titleKey}
                    className=" mt-3"
                  />
                </div>
                <div>
                  <h1 className="font-semibold py-2 flex gap-3 ">
                    {t(item.titleKey)}

                    {item.new ? (
                      <span className=" rounded-lg bg-red-500 p-[3px] px-5 text-xs text-white">
                        {t("soon")}
                      </span>
                    ) : (
                      ""
                    )}
                  </h1>
                  <p className="text-xs text-[#929292]">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </GatsbyLink>
            );
          })}
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden block shadow-none">
        <ul className="shadow-none">
          {steps.map((item, index) => {
            const isExternal = item.link.startsWith("http");

            return (
              <li
                key={index}
                className="py-2 border-b-[1px] border-[#00000056]"
              >
                {isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#5253B9] transition-all duration-300"
                  >
                    {t(item.titleKey)}
                  </a>
                ) : (
                  <GatsbyLink
                    to={item.link}
                    className=" flex items-center gap-3"
                  >
                    {t(item.titleKey)}
                    {item.new ? (
                      <span className=" rounded-lg bg-red-500 p-[3px] px-5 text-xs text-white">
                        {t("soon")}
                      </span>
                    ) : (
                      ""
                    )}
                  </GatsbyLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Subitem;
