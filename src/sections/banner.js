/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React, { useState, useEffect } from "react";
import "../assets/styles/banner.scss";
import { useTranslation } from "react-i18next";

import SliderBanner from "../components/SliderBanner";
import InfiniteScrollX from "./InfiniteScrollX";
import img1 from "../assets/images/slider/aws.webp";
import img2 from "../assets/images/slider/NVIDIA_logo.svg";
import img3 from "../assets/images/slider/monsha.svg";
import Particles from '../components/Particles'
import img4 from "../assets/images/slider/vis.svg";
import { SlCalender } from "react-icons/sl";
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
    <section id="home" sx={styles.section} className="  gradient-bg-header ">
      <div className="lg:mx-24 py-12 lg:py-2   ">
        <div className="grid justify-center xl:min-h-[90vh] h-full items-center xl:grid-cols-2 grid-cols-1  md:grid-cols-1 sm:grid-cols-1 ">
          <Box
            sx={styles.bannerContent}
            className="relative md:mt-12 xl:mt-4   flex flex-col p-8 pb-0  items-start   justify-start   "
          >
            {" "}
            {/* Add relative here */}
            <div className=" my-2 shadow-custom px-1 py-2 text-start ps-5 pe-3  rounded-3xl bg-white text-sm ">
              {t("sub-title-banner")}{" "}
            </div>
            {/* Text container */}
            <div>
              {" "}
              {/* Ensure text is above image */}
              <h1 style={{ lineHeight: "1" }}>
                <span className=" text-black gradient-text">
                  <span className="  lg:text-[32px] text-[20px] font-[900]  leading-10">
                    {" "}
                    {subHeaderText}
                  </span>

                  <span className="text-[#8485E6] lg:text-[32px] text-[20px] font-[900]   leading-10">
                    {t("banner_word1")}{" "}
                  </span>
                </span>
              </h1>
              <p
                className=" lg:block md:bolck sm:block hidden"
                style={{
                  fontSize: "1.2em",
                  margin: "0",
                  paddingTop: "30px",
                  lineHeight: "1.5",
                  color: "#000",
                }}
              >
                {t("Description-hjz")}
              </p>
            </div>
            <div className="  flex    w-full   p-0  justify-start  items-start  mt-6">
            <div className="relative flex min-h-[100px]  ps-4 pe-12 bg-transparent flex-col items-center justify-center overflow-hidden rounded-lg">
   
            <button class="Butt  z-20">
              <div class="dots_border"></div>

              <span class="text_Butt flex items-center justify-center gap-2">
              <SlCalender />
                <a href="https://m26ulnzthn4.typeform.com/to/LgVAbyBc">
                  {t("Signup")}
                </a>
              </span>
            </button>
      <Particles
        className="absolute z-0  shadow-none h-full inset-0"
        quantity={80}
        ease={100}
        color={"#5253B9"}
        refresh
      />
    </div>

            </div>
            {/* Background image */}
          </Box>

          <div className=" lg:flex w-full justify-center">
            <div className="  relative  flex-col items-center  justify-center p-7 pt-1 lg:w-[80%] sm:w-[85%] md:w-[85%]   xl:w-[95%]  h-full">
              <SliderBanner />
            </div>
          </div>
        </div>
        <div>
          <h3 className="title-know-more">{t("know-more-title")}</h3>
        </div>
      </div>

      {/* <SliderComponent /> */}
      <InfiniteScrollX
        images={[
          { id: 1, src: img1, alt: "Image 1" },
          { id: 2, src: img2, alt: "Image 2" },
          { id: 3, src: img3, alt: "Image 3" },
          { id: 4, src: img4, alt: "Image 4" },
          { id: 5, src: img1, alt: "Image 5" },
          { id: 6, src: img2, alt: "Image 6" },
          { id: 7, src: img1, alt: "Image 7" },
          { id: 8, src: img2, alt: "Image 8" },
          { id: 9, src: img1, alt: "Image 1" },
          { id: 10, src: img2, alt: "Image 2" },
          { id: 11, src: img3, alt: "Image 3" },
          { id: 12, src: img4, alt: "Image 4" },
          { id: 13, src: img1, alt: "Image 5" },
          { id: 14, src: img2, alt: "Image 6" },
          { id: 15, src: img1, alt: "Image 7" },
          { id: 16, src: img2, alt: "Image 8" },
        ]}
      />
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: "#FFF",
  },

  bannerContent: {
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

      m: [null, null, null, "30px auto", 0],
      mt: [3, null, null, null, 5],
    },
  },
};
