import React, { useEffect } from "react";
import { Text } from "theme-ui";
import { useTranslation } from "react-i18next";
import AccordionList from "../components/accordion/AccordionList";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

function PremiumFeature() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);

  // Function to split the text and return styled components
  const renderStyledText = (text) => {
    const words = text.split(" ");
    const firstTwoWords = words.slice(0, 2).join(" ");
    const remainingText = words.slice(2).join(" ");

    return (
      <>
        <span style={{ color: "black" }}>{firstTwoWords} </span>
        <span
          style={{
            background: "linear-gradient(90deg, #3132A9 41.17%, #8485E6 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {remainingText}
        </span>
      </>
    );
  };

  const items = [
    {
      number: "01",
      title: <div>{t("Solutions-work-Title-04")}</div>,
      contents: <div>{t("Solutions-work-Description-04")}</div>,
    },
    {
      number: "02",
      title: <div>{t("Solutions-work-Title-05")}</div>,
      contents: <div>{t("Solutions-work-Description-05")}</div>,
    },
    {
      number: "03",
      title: <div>{t("Solutions-work-Title-06")}</div>,
      contents: <div>{t("Solutions-work-Description-06")}</div>,
    },
    {
      number: "04",
      title: <div>{t("Solutions-work-Title-07")}</div>,
      contents: <div>{t("Solutions-work-Description-07")}</div>,
    },
    {
      number: "05",
      title: <div>{t("Solutions-work-Title-08")}</div>,
      contents: <div>{t("Solutions-work-Description-08")}</div>,
    },
    {
      number: "06",
      title: <div>{t("Solutions-work-Title-09")}</div>,
      contents: <div>{t("Solutions-work-Description-09")}</div>,
    },
  ];

  return (
    <section className="py-12 bg-[#5253B90A]" id="HowUseIt">
      <Text as="h2" sx={styles.heading}>
        {renderStyledText(t("How it work"))}
        <div className="w-full flex flex-col items-center justify-center">
          <hr className="h-[5px] w-[25px] bg-[#5253B9]" />
          {/* <p className="text-[16px] py-5 font-light px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lsed do eiusmod tempor
          </p> */}
        </div>
      </Text>
      <div className="grid lg:grid-cols-6">
        <div
          className="lg:col-span-2 lg:mx-0 md:mx-12 mx-6 md:h-[500px] lg:h-[445px] h-[300px] my-14"
       
        >
          <iframe
            src="https://www.youtube.com/embed/CWgbphDtJJQ?autoplay=1&loop=1&playlist=CWgbphDtJJQ&mute=1"
            title={"hams_solution"}
            className="border-[10px] border-[#8485E6] rounded-lg w-full"
           
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div
          className="lg:col-span-4 lg:mx-24 mx-8"

        >
          <AccordionList
            sections={items}
            iconUp={<GoPlus />}
            iconDown={<LuMinus />}
          />
        </div>
      </div>
    </section>
  );
}

export default PremiumFeature;

const styles = {
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "40px"],
    textAlign: "center",
  },
};
