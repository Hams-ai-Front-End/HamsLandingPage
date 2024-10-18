import React from "react";
import { useTranslation } from "react-i18next"; // Correct hook for translation
import how01 from "../../assets/images/speech-to-text.svg";
import how02 from "../../assets/images/text-to-speech.svg";
import how03 from "../../assets/images/AI-to-speech.svg";

function Subitem() {
  const { t } = useTranslation(); // Use useTranslation instead of useTransition
  const steps = [
    {
      imgSrc: how01,
      titleKey: "How-work-Title-01",
      descriptionKey: "How-work-Description-01",
    },
    {
      imgSrc: how02,
      titleKey: "How-work-Title-02",
      descriptionKey: "How-work-Description-02",
    },
    {
      imgSrc: how03,
      titleKey: "How-work-Title-03",
      descriptionKey: "How-work-Description-03",
    },
  ];

  return (
    <div className=" ">
      <div className="lg:block hidden  bg-white shadow-md rounded-md ">
        <div className="flex flex-col absolute z-50 top-[90%] start-[3%]  font-light text-sm bg-white border border-[#2121211a]  rounded-xl min-w-[450px] ">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center  text-gray-700 hover:text-[#5253B9] hover:bg-[#cfcece28] px-6 rounded-xl cursor-pointer  p-3 transition-all duration-300 ease-in-out hover:text-[16px]" // Add transition
            >
              <div>
                <img src={item.imgSrc} alt={item.titleKey} />
              </div>
              <div>
                <h1 className="font-semibold ">{t(item.titleKey)}</h1>
                <p className="text-xs text-[#929292]">{t(item.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" lg:hidden block shadow-none">
<ul className="shadow-none ">

{steps.map((item, index) => (
<li className=" py-2 border-b-[1px] border-[#00000056]">{t(item.titleKey)}</li>
))}

</ul>


      </div>
    </div>
  );
}

export default Subitem;
