/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React, { useState, useEffect } from "react";
import "../assets/styles/banner.scss";
import { useTranslation } from "react-i18next";

import SliderComponent from "./SliderComponent";

import { rgba } from "polished";
import { TypeAnimation } from "react-type-animation";
import blurimg from "../assets/images/blur.png";
import SliderBanner from "../components/SliderBanner";

const Banner = () => {
  const { i18n, t } = useTranslation();
  const [languageChangeCount, setLanguageChangeCount] = useState(0);

  const subHeaderText = t("ONE-STOP-SHOP"); // Assuming you are using i18n for translations

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguageChangeCount((prevCount) => prevCount + 1);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange); // Clean up the event listener
    };
  }, [i18n]);

  return (
    <section id="home" sx={styles.section} >
      <div className="lg:mx-24 py-12 lg:py-2  ">
        <div className="grid justify-center h-full items-center lg:grid-cols-2 grid-cols-1  p-12">
          <Box sx={styles.bannerContent} className="relative  lg:min-h-[70vh] flex flex-col justify-center items- ">
            {" "}
            {/* Add relative here */}
            <div className=" my-2 shadow-custom px-1 py-2 text-center  rounded-3xl bg-white text-sm ">
              {t("sub-title-banner")}{" "}
            </div>
            {/* Text container */}
            <div className="ar" style={{ position: "relative", zIndex: 1 }}>
              {" "}
              {/* Ensure text is above image */}
              <h1 id="main-title" style={{ lineHeight: "1" }}>
                <span
                  className=" text-black gradient-text"
                  style={{ fontWeight: "800" }}
              
                >

                <span className=" px-2 lg:text-[32px]   leading-10">  {subHeaderText}</span>
              
             
           <span className="text-[#8485E6] lg:text-[32px]   leading-10">{ t('banner_word1')} </span>
           
                
              
                </span>
              </h1>
              <p
                className="hjz-introduction"
                style={{
                  fontSize: "1em",
                  margin: "0",
                  paddingTop: "30px",
                  lineHeight: "1.5",
                }}
              >
                {t("Description-hjz")}
              </p>
              <button className="bg-gradient-to-r from-[#5253B9] to-[#8485E6] text-white py-2 px-4 w-[120px] mt-6 rounded-2xl shadow-lg">
             {t("Join-us")}  
              </button>
            </div>
            {/* Background image */}
            <img
              src={blurimg}
              alt="blur"
              className="absolute top-[-90px] start-[-120px] h-[300px] w-[300px] opacity-50"
              style={{ zIndex: 0 }} // Ensure the image is behind the text
            />
          </Box>

          <div className="  relative   h-full">
            <SliderBanner />

          </div>
        </div>
        <div>
          <h3 className="title-know-more">{t("know-more-title")}</h3>
        </div>
       
      </div>
      <SliderComponent />
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: "#FFF",
  },

  bannerContent: {
    margin: [null, null, null, "0 auto", 0],
    maxWidth: [null, null, null, 600, "none"],
    textAlign: [null, null, null, "center", "left"],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "textSecondary",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "textSecondary",
      maxWidth: [470],
      m: [null, null, null, "30px auto", 0],
      mt: [3, null, null, null, 5],
    },
  },
  subscriptionForm: {
    justifyContent: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    input: {
      outLine: "none",
      backgroundColor: "#FFFFFF",
      border: "0 none",
      borderColor: "#FFFFFF",
      borderRadius: "0",
      borderBottom: "2px solid rgba(0, 0, 51, 0.7)",
      fontFamily: "body",
      fontSize: [1, null, null, null, 2],
      px: [5],
      "::placeholder": {
        color: rgba("#02073E", 0.4),
        opacity: 1,
      },
      "::input:focus": {
        outLine: "none",
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    span: {
      fontSize: ["13px", null, null, null, 2],
      lineHeight: 2.62,
      color: rgba("#566272", 0.6),
    },
  },
  sponsor: {
    alignItems: "center",
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ["60px", null, null, null, "80px", "100%"],
      },
    },
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    maxWidth: "800px",
    mt: [0, null, null, null, 0],
  },
};
