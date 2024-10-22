import React from "react";
import { useTranslation } from "react-i18next";

function OurMission() {
  const { i18n, t } = useTranslation();
  return (
    <div className="bg-[#8485E6] text-white lg:px-56 px-12   py-12 flex flex-col   justify-center" id="OUR_MISSION">
      <h1 className=" text-[30px] font-[600] ">{t('OUR_MISSION')}</h1>
      <p className=" text-[32px] mt-8 ">
  {t('OUR_MISSION_text')}
      </p>
      <hr className=" w-[25%] mt-6  bg-white h-[2px]" />
    </div>
  );
}

export default OurMission;
