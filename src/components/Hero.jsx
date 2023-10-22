import styles from "../style";
import { discount, robot } from "../assets";

const welcomeCardStyle = {
  backgroundColor: "transparent",
  padding: "20px",
  marginBottom: "20px",
  textAlign: "center",
};

const trustedByCardStyle = {
  backgroundColor: "transparent",
  padding: "20px",
  marginBottom: "20px",
  textAlign: "center",
};

const logoGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "20px",
  textAlign: "center",
};

const logoStyle = {
  width: "80px",
  height: "80px",
};

const textLogoStyle = {
  color: "white",
  fontSize: "14px",
  marginTop: "10px",
};

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} h-screen`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <div style={welcomeCardStyle}>
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome to <br className="sm:block hidden" />{" "}
            <span className="text-gradient">WeGrowr</span>{" "}
          </h1>
          <p className={`${styles.paragraph} mt-5`}>
            Our team of experts uses a methodology to identify the best services that
            most likely to fit your needs.
          </p>
        </div>
      </div>
    </div>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div style={trustedByCardStyle}>
        <div className="text-white font-poppins text-xl">Trusted By</div>
        <div style={logoGridStyle}>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 1</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 2</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 3</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 4</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 5</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 6</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 7</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 8</div>
          </div>
          <div>
            <img src={discount} alt="Logo" style={logoStyle} />
            <div style={textLogoStyle}>Company 9</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
