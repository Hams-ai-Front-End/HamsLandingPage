import React, { forwardRef, useRef } from "react";
import { FaSmile, FaClipboard, FaLightbulb, FaQuestionCircle, FaListAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { useTranslation } from 'react-i18next';
import { BsSoundwave } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";
import Particles from "./Particles";

const Circle = forwardRef(({ className, icon, label }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex xl:h-32 xl:w-32 h-16 w-16 text-sm font-medium flex-col items-center  text-white justify-center rounded-xl p-2 bg-[#5253B9] shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {icon}
      <p className="mt-2 text-center ">{label}</p>
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({ className }) {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const { t } = useTranslation();
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
 <section className="gradient-bg-header  xl:px-10 pt-16 ">
     <div
      className={cn(
        "relative flex flex-col w-full items-center px-4 bg-[#b9baf8] shadow-lg rounded-xl  justify-center overflow-hidden mt-6 border ",
        className
      )}
      ref={containerRef}
    >
         <div className="flex flex-col pe-6  px-6  xl:max-w-[75%]   py-6 mt-12 text-center  w-full gap-8 justify-center items-center text-black ">
      <div className=" w-full flex justify-start">

      <span className="text-[#5253B9] bg-white  rounded-3xl border-[1px] border-[#5253B9] flex justify-center items-center p-3 py-2">
              <BsSoundwave />
              {t("badge__AI_header")}
            </span>
      </div>
            <h1 className="text-[#5253B9] lg:text-[2.4em] font-bold text-[36px] text-start">
              {t("title_Ai_header")}
            </h1>
            <p className="text-black   text-[1em] text-center">
              {t("description_Ai_header")}
            </p>

            <div className="flex  justify-center items-center gap-2">
            
              <button className="rounded-3xl px-2 bg-[#3132A9] text-white hover:border-[1px] cursor-pointer transition-colors ease-in-out duration-300 hover:border-[#3132A9] hover:text-[#3132A9] hover:bg-[white] min-w-[120px] h-10">
                <a href="https://m26ulnzthn4.typeform.com/to/LgVAbyBc">
                  {t("button_Product_Header")}
                </a>
              </button>
              <button className="rounded-3xl px-2 bg-[#3132A9] text-white hover:border-[1px] cursor-pointer transition-colors ease-in-out duration-300 hover:border-[#3132A9] hover:text-[#3132A9] hover:bg-[white] min-w-[120px] h-10">
                <a href="https://m26ulnzthn4.typeform.com/to/LgVAbyBc">
                  {t("button_Product_Header")}
                </a>
              </button>
            </div>
          </div>
      <div className="flex w-full py-12 max-w-3xl flex-row items-center justify-between gap-16" dir="rtl"> 
        <div className="flex flex-col justify-center gap-6">
        <Circle
              ref={div1Ref}
              icon={<FaSmile size={32} className="text-white" />}
              label={t("sentiment_label")}
            />
            <Circle
              ref={div2Ref}
              icon={<FaClipboard size={32} className="text-white" />}
              label={t("topics_label")}
            />
            <Circle
              ref={div3Ref}
              icon={<FaLightbulb size={32} className="text-white" />}
              label={t("intents_label")}
            />
          <Circle
            ref={div4Ref}
            icon={<FaListAlt size={32} className="text-white" />}
            label={t("summarize_label")}
          />
      
        </div>
        {/* AnimatedBeams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          duration={3}
        />
  
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          duration={3}
        />
        <div className="flex flex-col text-[#5253B9] justify-center">
          <Circle
            ref={div6Ref}
            className="xl:h-32 xl:w-32 h-20 w-20  font-bold bg-[#ededfd] text-[#5253B9] rounded-full border-[4px] border-[#5254b971] text-lg"
       
            label="HAMS.AI"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={div7Ref}
            icon={<FaClipboard size={32} className="text-white" />}
            label={t("transcript_label")}
          />
        </div>
      </div>

      <Particles
        className="absolute z-0  shadow-none h-full inset-0"
        quantity={300}
        ease={50}
        color={"#5253B9"}
        refresh
      />
    </div>

 </section>
  );
}
