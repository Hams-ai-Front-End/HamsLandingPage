import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import '../styles/global.css'
import banner from "../assets/images/mobileframe.svg";
import BannerForm from "./BannerForm"
import HeaderMobileBanner from "./HeaderMobileBanner"
import { TypeAnimation } from 'react-type-animation';
// JSON data for items in English and Arabic
const items = {
  en: [
    {
      title: "Receptionist",
      prompt: "Hi, I'm Nora, a Gym Receptionist. I use an AI-powered phone agent to answer customer questions 24/7 in a natural Saudi dialect. Call me and see if I sound like a human!"
    },
    {
      title: "Customer Service",
      prompt: "Hi, I'm Ahmed, your Customer Service Agent. I'm available 24/7 to answer your inquiries using AI technology. Feel free to call and experience our seamless service."
    },
    {
      title: "Appointment ",
      prompt: "Hi, I'm Sara, an AI Appointment Setter. I can help you schedule and remind you of appointments in no time, available 24/7 with a personal touch."
    },
    {
      title: "Survey",
      prompt: "Hi, I'm Faisal, your Survey Assistant. I conduct quick and accurate surveys in a conversational Saudi dialect, powered by AI. Call me to provide your feedback!"
    },
    {
      title: "Debt Collection",
      prompt: "Hi, I'm Khalid, an AI Debt Collection Agent. I work around the clock to remind customers about their outstanding payments in a friendly tone. Contact me anytime!"
    },
    {
      title: "Lead Qualification",
      prompt: "Hi, I'm Layla, an AI Lead Qualifier. I can help you identify and qualify leads efficiently using AI technology. Let's connect and grow your business."
    }
  ],
  ar: [
    {
      title: "الاستقبال",
      prompt: "مرحبًا، أنا نورة، موظفة استقبال في النادي الرياضي. أستخدم وكيل هاتف مدعوم بالذكاء الاصطناعي للإجابة على استفسارات العملاء 24/7 بلهجة سعودية طبيعية. اتصل بي وجرب بنفسك إذا كان صوتي يبدو بشريًا!"
    },
    {
      title: "خدمة العملاء",
      prompt: "مرحبًا، أنا أحمد، وكيل خدمة العملاء. أنا متاح للإجابة على استفساراتكم 24/7 باستخدام تقنية الذكاء الاصطناعي. لا تترددوا في الاتصال لتجربة خدمتنا السلسة."
    },
    {
      title: "تذكير بالمواعيد",
      prompt: "مرحبًا، أنا سارة، وكيلة تحديد المواعيد بالذكاء الاصطناعي. أستطيع مساعدتك في جدولة وتذكيرك بالمواعيد بسهولة، متاحة على مدار الساعة."
    },
    {
      title: "الاستبيان",
      prompt: "مرحبًا، أنا فيصل، مساعدك في الاستبيانات. أجري استبيانات سريعة ودقيقة بلهجة سعودية طبيعية باستخدام الذكاء الاصطناعي. اتصل بي وشارك رأيك!"
    },
    {
      title: "تحصيل الديون",
      prompt: "مرحبًا، أنا خالد، وكيل تحصيل الديون بالذكاء الاصطناعي. أعمل على مدار الساعة لتذكير العملاء بالمدفوعات المستحقة بطريقة ودية. اتصل بي في أي وقت!"
    },
    {
      title: "تأهيل العملاء ",
      prompt: "مرحبًا، أنا ليلى، أعمل على تأهيل العملاء المحتملين بالذكاء الاصطناعي. أستطيع مساعدتك في تحديد وتأهيل العملاء المحتملين بسرعة وكفاءة. دعنا نتواصل ونعزز أعمالك!"
    }
  ]
};

function SliderBanner() {
  const [selectedId, setSelectedId] = useState(1); // State to track selected button
  const { i18n,t } = useTranslation(); // Get the i18n instance

  // Determine the language based on the current language set in i18n
  const currentLanguage = i18n.language === "ar" ? "ar" : "en";
  const currentItems = items[currentLanguage];

  // Get the selected item based on the selected index
  const selectedItem = currentItems[selectedId];

  const settings = {
  
    dots: true,
    speed: 500,
    slidesToShow: currentLanguage === "ar" ? 3 : 2.6, // Adjust based on language,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px", // Remove side padding to make sharp edges
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: currentLanguage === "ar" ? 3 : 2.6, // Adjust based on language,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col  h-full relative lg:mx-16">
      {/* Outer wrapper with overflow-hidden */}
      <div className="p-0 w-full rounded-[60px] faded-edges 0  mt-12"  >
        <div className="z-1 flex-grow rounded-[60px] lg:pt-0" >
          {/* Slider with sharp left and right edges */}
          <Slider {...settings} className="mt-0 rounded-[60px]" >
            {currentItems.map((item, index) => (
              <button
                key={index}
                className="flex justify-center  rounded-[60px]  slider items-center h-12 w-full"
                onClick={() => setSelectedId(index)} // Set selected index on click
                style={{"border-radius":"60px" }}
              >
                <span
                  className={`rounded-full w-full py-1 h-full px-6 shadow-custom
                  ${
                    selectedId === index
                      ? "bg-gradient-to-r text-white from-[#5253B9] to-[#8888C4]"
                      : "bg-white text-black border"
                  }`} // Change color based on selection
                >
                  {item.title}
                </span>
              </button>
            ))}
          </Slider>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-4 mt-8">
        {/* Container for image and text */}
        <div className="relative  flex justify-center">
          <img
            src={banner}
            alt="categories"
            className="flex w-full   justify-center object-cover"
          />
          {/* Text inside the image */}
          <div className="absolute inset-0 flex flex-col my-[40px] lg:mx-16 mx-12 max-h-[100%]  items-center text-xs  justify-between text-center text-black ">
           
    <HeaderMobileBanner/>
            <p className="md:text-[14px] text-[10px] lg:text-[14px]  bg-[#F8F8FA] py-3 w-full lg:px-4 md:px:4 px-1  rounded-lg">
              {selectedItem ? 
              
              <span>
                {i18n.language === "ar" ? (
                  <TypeAnimation
                  key={selectedItem.prompt} // This forces re-render when prompt changes
                  sequence={[selectedItem.prompt, 100]}
                  repeat={0}
                  omitDeletionAnimation={true}
                  />
                ) : (
                  <TypeAnimation
                  key={selectedItem.prompt} // This forces re-render when prompt changes
                  sequence={[selectedItem.prompt, 100]}
                  repeat={0}
                  omitDeletionAnimation={true}
                />
                )}
              </span>
              
              
              
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>

          <div className="w-full">  <BannerForm/></div>
        
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default SliderBanner;
