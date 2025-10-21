

import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      {/* Footer Dip Image */}
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        {/* Title */}
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {/* Background Video / Image */}
        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
            alt="Drink"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        {/* Social Icons in Cream Color */}
        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <a
            href="https://github.com/kumarichhavi371"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6"
              style={{ filter: "invert(95%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chhavi-kumari-301550326/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
              style={{ filter: "invert(95%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)" }}
            />
          </a>
          <a
            href="https://www.instagram.com/mishrachhavi371?igsh=M3d5MGJwMGZxdG1n"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
              style={{ filter: "invert(95%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)" }}
            />
          </a>
        </div>

        {/* Footer Links + Newsletter */}
        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-box">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
