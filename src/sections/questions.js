/** @jsx jsx */
import { jsx, Container, Text } from "theme-ui";
import { useTranslation } from "react-i18next";
import "../assets/styles/banner.scss";
import AccordionList from "../components/accordion/AccordionList";
import bg_qa from '../assets/images/bg_vector.svg';

const PremiumFeature = () => {
  const { t } = useTranslation();

  // FAQ data to pass to AccordionList
  const data = [
    {
      title: t("FAQ-Title-01"),
      contents: <div>{t("FAQ-Description-01")}</div>,
    },
    {
      title: t("FAQ-Title-02"),
      contents: <div>{t("FAQ-Description-02")}</div>,
    },
    {
      title: t("FAQ-Title-03"),
      contents: <div>{t("FAQ-Description-03")}</div>,
    },
    // Repeated entries removed for brevity
  ];

  const title = t("FAQs");
  const firstWord = title.split(" ")[0]; // Split by space and take the first element
  const secondWord = title.split(" ")[1];

  return (
    <section id="FAQs" sx={styles.section}>
      <Container>
        <Text as="h2" sx={styles.heading}>
          <span className="text-[#171717] px-3">{firstWord}</span>
          <span className="text-transparent">{secondWord}</span>
          <div className="w-full flex justify-center">
            <hr className="h-[5px] w-[25px] bg-[#5253B9]" />
          </div>
        </Text>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-12 gap-5 relative">
          
        <div className="relative lg:mt-auto mt-36 h-full z-10">
            {/* Image positioned absolutely to be behind the text */}
            {/* <img 
              src={bg_qa} 
              alt="most_populer_questions" 
              className="absolute start-[-30px] top-[-90px] w-[300px]  h-[300px] z-0"
            /> */}
            <div className="bg-white div-text rounded-2xl max-h-[300px] shadow-lg border p-8 text-lg text-[#000000] z-10 relative">
              <h1 className="text-[36px] py-3 text-[#000000] font-[800]">
                {t("Any-questions")}
              </h1>
              <h3 className="text-[36px] py-2 font-normal">
                {t("Any-questions_reply")}
              </h3>
              <p>Lorem ipsum dolor sit amet, sed do</p>
            </div>
          </div>
          <div className=" z-20">      <AccordionList sections={data} /></div>
          <div>
      
          </div>

        </div>
  
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
    color: "#119390",
    padding: "0px",
  },
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "50px"],
    textAlign: "center",
    background: "linear-gradient(90deg, rgba(49,50,169,1) 0%, rgba(132,133,230,1) 100%)",
    WebkitBackgroundClip: "text",
  },
};
