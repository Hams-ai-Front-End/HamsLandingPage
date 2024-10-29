import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import call from '../assets/images/call_center.svg';
import lang from '../assets/images/Transcript.svg';
import voice2 from '../assets/images/voice2.svg';
import vm from '../assets/images/vision.svg';
import { FaArrowRightLong } from "react-icons/fa6";

function ProductOptimizedUseCase() {
  const { t } = useTranslation(); // Use the translation function

  const useCases = [
    {
      id: 1,
      titleKey: 'call_centers.title', // Use translation keys
      descriptionKey: 'call_centers.description',
      colSpan: 'xl:col-span-1 col-span-3',
      imgSrc: call,
    },
    {
      id: 2,
      titleKey: 'transcript_languages.title',
      descriptionKey: 'transcript_languages.description',
      colSpan: 'xl:col-span-2 col-span-3',
      imgSrc: lang,
    },
    {
      id: 3,
      titleKey: 'media_content_creation.title',
      descriptionKey: 'media_content_creation.description',
      colSpan: 'xl:col-span-2 col-span-3',
      imgSrc: voice2,
    },
    {
      id: 4,
      titleKey: 'virtual_meetings.title',
      descriptionKey: 'virtual_meetings.description',
      colSpan: 'xl:col-span-1 col-span-3',
      imgSrc: vm,
    },
  ];

  return (
    <div className="mx-auto w-[80%] py-12">
      <h1 className="text-black text-center w-full text-[3em]">
        {t('optimized_for_enterprise')} {/* Translate the main title */}
      </h1>
      <div className="grid py-12 md:grid-cols-3 gap-6 grid-cols-1">
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className={`${useCase.colSpan} flex flex-col cursor-pointer gap-3 py-6 border-[#9b9beb2c] border-[1px] px-6 bg-[#C6C6C617] rounded-2xl`}
          >
            <h1 className="text-[#692BEF] text-lg font-bold">
              {t(useCase.titleKey)} {/* Translate title */}
            </h1>
            <p className="text-[#4b4b4b] pe-12">
              {t(useCase.descriptionKey)} {/* Translate description */}
            </p>
            <span className='text-black cursor-pointer font-[500] gap-3 flex items-center'>
              {t('learn_more')} <FaArrowRightLong />
            </span>
            <div className='flex justify-center items-center    h-full w-full'>
              <img src={useCase.imgSrc} alt={t(useCase.titleKey)} className='w-[200px] mt-12' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOptimizedUseCase;
