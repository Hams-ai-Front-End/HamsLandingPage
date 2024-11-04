import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#5253B9] py-8 text-[#ffffff]">
      <div className="w-full px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 justify-center items-start">

          {/* Product Section */}
          <div>
            <h3 className="font-semibold  mb-4 text-lg ">{t('Product')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Speech-to-Text')}</li>

              <li className=" hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Audio Intelligence')} </li>
              <li className=" transition-colors ease-in-out duration-300">{t('Text-to-Speech')} <span className=' bg-red-500 py-1 text-sm px-5 mx-2 rounded-lg'> {t('soon')}</span></li>

              <li className='flex items-center gap-2 text-2xl'>
                
                <a href='https://www.linkedin.com/company/hamsaisa/'>   <IoLogoLinkedin /></a>
                <a href=' https://www.instagram.com/hamsai.sa?igsh=M2xwcDAwaHBkZGZw&utm_source=qr'>   <IoLogoInstagram /></a>
                <a href=' https://x.com/hamsaiapp?s=21'>   <FaSquareXTwitter  /></a>
                
                
                </li>
            </ul>
          </div>

          {/* Use cases Section */}
          <div>
            <h3 className="font-semibold  mb-4 text-lg">{t('Use cases')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Customer experience')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Sales enablement')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Meeting assistants')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Media')}</li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h3 className="font-semibold  mb-4 text-lg">{t('Developers')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Playground')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Documentation')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Discord')}</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold  mb-4 text-lg">{t('Resources')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('About us')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Careers')}</li>
              <li className="hover:text-gray-200 cursor-pointer transition-colors ease-in-out duration-300">{t('Terms & conditions')}</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
