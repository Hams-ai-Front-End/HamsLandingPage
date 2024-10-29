import React from "react";
import { useTranslation } from "react-i18next";
import Product1 from "../assets/images/product1.svg";
import { FaCircle } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import line from "../assets/images/line.svg";

function ProductHeader() {
  const { t } = useTranslation();

  // Define the items in an array to map through them
  const featureItems = [
    {
      key: "faster",
      label: t("faster_text"),
      description: t("faster_desc"),
    },
    {
      key: "latency",
      label: t("latency_text"),
      description: t("latency_desc"),
    },
    {
      key: "accuracy",
      label: t("accuracy_text"),
      description: t("accuracy_desc"),
    },
  ];

  return (
    <section className="gradient-bg-header flex flex-col justify-center items-center ">
      <div className="mx-auto w-[80%] flex-grow">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col pe-6 gap-4 justify-start items-start text-black pt-24">
            <span className="text-[#5253B9] bg-white rounded-3xl border-[1px] border-[#5253B9] flex items-center p-3 py-2">
              <BsSoundwave />
              {t("badge__Product_header")}
            </span>
            <h1 className="gradient-text-header lg:text-[2.4em] font-bold text-[36px] text-start">
              {t("title_Product_header")}
            </h1>
            <p className="text-[#8485E6]  lg:w-[75%] xl:w-[89%] text-[1em] text-start">
              {t("description_Product_header")}
            </p>

            <div className="flex flex-col justify-start items-start gap-2">
              {featureItems.map((item) => (
                <div
                  key={item.key}
                  className="grid grid-cols-[18px_1fr] gap-1 items-start"
                >
                  <FaCircle
                    color="#5556BB"
                    className="w-[16px] border-[3px] rounded-full border-[#8384E5] h-[16px] mt-1"
                  />
                  <p className="text-[#7D7D7D] ">
                    <span className="font-bold text-black ">
                      {item.label} :{" "}
                    </span>
                    {item.description}
                  </p>
                </div>
              ))}
              <button className="rounded-3xl px-2 bg-[#3132A9] text-white hover:border-[1px] cursor-pointer transition-colors ease-in-out duration-300 hover:border-[#3132A9] hover:text-[#3132A9] hover:bg-[white] min-w-[120px] h-10">
                <a href="https://m26ulnzthn4.typeform.com/to/LgVAbyBc">
                  {t("button_Product_Header")}
                </a>
              </button>
            </div>
          </div>

          <div className="flex justify-center h-full mt-12 items-center slide-up">
            <img src={Product1} alt="text_speach_Ai" />
          </div>
        </div>
      </div>

      <img src={line} className="mt-12 w-full" />
    </section>
  );
}

export default ProductHeader;
