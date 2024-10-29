import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const GridItem = ({ title, content, gradient }) => (
  <div
    className={`p-6 flex flex-col py-12 gap-3 rounded-lg gradient-shadow-bg ${gradient ? 'text-white' : 'text-black'}`}
    style={{ background: gradient ? '#6162d1' : '#ffffff' }}
  >
    <h3 className='text-[1.2em] font-[600]'>{title}</h3>
    <p className=' text-sm'>{content}</p>
  </div>
);

function ProductRate() {
  const { t } = useTranslation(); // Use the translation function

  const gridItems = [
    {
      titleKey: 'unmatched_language_precision.title', // Use translation keys
      contentKey: 'unmatched_language_precision.content',
      gradient: true,
    },
    {
      titleKey: 'rapid_transcription.title',
      contentKey: 'rapid_transcription.content',
      gradient: false,
    },
    {
      titleKey: 'optimized_for_real_world_noises.title',
      contentKey: 'optimized_for_real_world_noises.content',
      gradient: true,
    },
  ];

  return (
    <div className='mx-auto w-[80%] py-6 flex flex-col gap-6'>
      <div className='text-center '>
        <h2 className='font-bold text-[3em]'
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #3132A9 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {t('performance_rate_title')} {/* Translate main title */}
        </h2>
        <p className='text-[#7D7D7D] text-[1.2em] lg:px-24 '>
          {t('performance_rate_description')} {/* Translate description */}
        </p>
      </div>

      <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-12 gap-6 mt-6'>
        {gridItems.map((item, index) => (
          <GridItem 
            key={index} 
            title={t(item.titleKey)}  // Translate title
            content={t(item.contentKey)} // Translate content
            gradient={item.gradient} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductRate;
