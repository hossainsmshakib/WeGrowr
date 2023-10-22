import { features } from "../constants";
import styles, { layout } from "../style";

const centerTextStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // Adjust the height as needed
};

const fullPageTextStyles = {
  width: "100%",
  textAlign: "justify",
  padding: "0 20px", // Adjust padding as needed
};

const headingStyles = {
  fontSize: "52px", // Adjust the font size
};

const Business = () => (
  <section id="features" className={layout.section} style={centerTextStyles}>
    <div className={layout.sectionInfo} style={fullPageTextStyles}>
      <h2 className={`${styles.heading2} text-center`} style={headingStyles}>
        About WeGrowr
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Welcome to WeGrowr Digital, a marketing firm led by marketing professionals with 16+ years of omni-channel
        experience across B2C, B2B, B2B2C, managing startup to high-profile brands in FMEG, Retail, E-commerce,
        Logistics, EdTech, HealthTech, InsureTech, Connectivity & IoT, Lifestyle & Food, across Asia Pacific, Southeast
        Asia, MENA and emerging markets. In partnership with Codes N Creative, a leading Indian marketing agency
        specialising in SEO & development, and holding a prestigious portfolio of clientele that include AIIMS, Alive
        Wellness, Vurth Australia, Star World Wide Group etc., we aim to change the landscape of marketing in the
        UK by increasing the visibility of local businesses on search engines, which can lead to more traffic, more leads,
        and more sales while reducing your cost per acquisition and improving your bottom line.
        At WeGrowr Digital, we specialize in content development and search engine optimization (SEO). Our team of
        experienced writers, marketers, and SEO specialists are practitioners of data-driven marketing and work
        together to create compelling content that engages your audience and drives traffic to your website. Our
        expertise in SEO can add value to the bottom line of each business house in the UK. Whether you're looking to
        improve your search rankings, increase conversions, or build brand awareness, we have the skills and expertise
        to help you achieve your goals. With a focus on data-driven strategies and a commitment to delivering results,
        we're committed to helping you succeed in today's digital landscape.
      </p>
    </div>
  </section>
);

export default Business;
