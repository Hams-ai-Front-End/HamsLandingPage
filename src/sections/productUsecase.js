import React from "react";
import { useTranslation } from "react-i18next";
import corner from "../assets/images/corner.svg";
import ring from "../assets/images/ring_corner.svg";
import blurimg from "../assets/images/blur_ring.svg";

const useCasesKeys = [
  { key: "callCenters" },
  { key: "virtualMeetings" },
  { key: "contentMedia" },
  { key: "workplaceCollaboration" }
];

function UseCaseItem({ title, description }) {
  return (
    <div className="relative flex flex-col">
      <div className="bg-[#C6C6C617] rounded-full circle-div w-[40px] opacity-40 h-[40px] z-0"></div>
      <h3 className="text-[#000] absolute top-[12px] start-[12px] font-bold">{title}</h3>
      <p className="text-[#9A9A9A] text-sm px-3">{description}</p>
    </div>
  );
}

function ProductUsecase() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto w-[80%] py-16 px-4">
        <div className="flex gap-24 flex-col md:flex-row">
          {/* Left Text */}
          <div className="w-full h-full md:w-2/6 md:mb-0 flex flex-col relative">
            <h2 className="text-[2.3em] font-semibold relative z-10">
              <span className="gradient-text-header">{t('useCases.title')}</span>
            </h2>
            <p className="text-[#A0A0A0] relative z-10">{t('useCases.description')}</p>
          </div>

          {/* Right Grid */}
          <div className="w-full md:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {useCasesKeys.map(({ key }, index) => (
              <UseCaseItem
                key={index}
                title={t(`useCases.${key}.title`)}
                description={t(`useCases.${key}.description`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUsecase;
