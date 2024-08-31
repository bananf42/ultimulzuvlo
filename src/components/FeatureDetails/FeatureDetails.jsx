import flowerShape from "../../assets/images/flower-art.png";
import SingleFeature from "./SingleFeature";
import featureBg from "../../assets/images/feature-details-orange.png";
import FeatureMockup from "./FeatureMockup";
import { useRef } from "react";

const FeatureDetails = () => {
  const featureList = [
    {
      category: "💸 Subscriptions",
      title: "Monetize Your Content Through Subscriptions",
      subtitle:
        "Offer your fans the opportunity to subscribe to your content feed, either on a monthly or a yearly subscription.",
      highlightWord: "Subscriptions",
    },
    {
      category: "🛍️ Your own store",
      title: "Sell Physical or Digital Items in Your Personal Store",
      subtitle:
        "Boost your revenue by selling both physical and digital items to your fans.",
      highlightWord: "Store",
    },
    {
      category: "💬 Messaging",
      title: "Engage with Your Fans Through Direct Messaging",
      subtitle:
        "Engage with your fans via Direct Messages and sell them exclusive PPV content.",
      highlightWord: "Messaging",
    },
  ];

  const sectionContainer = useRef();

  const elem1 = useRef();
  const elem2 = useRef();
  const elem3 = useRef();

  const elements = [elem1, elem2, elem3];

  const featureHolder = ` py-[40px] lg:py-[80px] xl:py-[160px] `;
  const featureIntro = `py-1.5 px-3 xl:px-5 mb-4 rounded-[160px] backdrop-blur-[20px] bg-[rgba(22,22,19,0.04)] w-fit text-[14px] xl:text-base`;
  const featureTitle = ` text-[30px] leading-[42px] xl:text-5xl font-semibold xl:leading-[64px] text-textBlack`;
  const featureDesc = ` py-4 xl:py-8 text-base xl:text-[18px] leading-7 text-[rgba(22,22,19,0.75)] max-w-[535px]`;
  const featureBtn = `font-medium rounded-[160px] text-base leading-5 px-7 py-3 text-[18px] text-white bg-[linear-gradient(270deg,#BE0D00_0%,#FF2919_100%)] block w-fit`;

  return (
    <section
      ref={sectionContainer}
      className=" xl:pt-32 xl:pb-12 xl:mb-20 relative feature-details-container "
    >
      {/* main content */}
      <div className="container flex sm:gap-3 md:gap-20 xl:gap-[225px] relative z-20 xl:px-[72px]  ">
        {/* description holder */}
        <div className="sm:max-w-[50%]  xl:max-w-[732px]">
          {/* list */}
          <div className="flex flex-col">
            <div ref={elem1} className={featureHolder}>
              <p className={featureIntro}>💸 Subscriptions</p>
              <h3 className={featureTitle}>
                Monetize Your Content Through{" "}
                <span className="text-pinkRed">Subscriptions</span>
              </h3>
              <p className={featureDesc}>
                Offer your fans the oppurtunity to subscribe to your content feed, either on a monthly or a yearly subscription.
              </p>
              <a className={featureBtn} href="https://zuvlo.com/auth/register">
                {" "}
                Sign Up
              </a>
            </div>
            <div ref={elem2} className={featureHolder}>
              <p className={featureIntro}>🛍️ Your own store</p>
              <h3 className={featureTitle}>
                Sell Physical or Digital Items in Your Personal{" "}
                <span className="text-pinkRed">Store</span>
              </h3>
              <p className={featureDesc}>
                Boost your revenue by selling both physical and digital items to your fans.
              </p>
              <a className={featureBtn} href="https://zuvlo.com/auth/register">
                {" "}
                Sign Up
              </a>
            </div>
            <div ref={elem3} className={featureHolder}>
              <p className={featureIntro}>💬 Messaging</p>
              <h3 className={featureTitle}>
                Engage with Your Fans Through Direct{" "}
                <span className="text-pinkRed">Messaging</span> Access
              </h3>
              <p className={featureDesc}>
                Engage with your fans via Direct Messages and sell them exclusive PPV content.
              </p>
              <a className={featureBtn} href="https://zuvlo.com/auth/register">
                {" "}
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* animation holder */}
        <div className="hidden sm:block">
          <FeatureMockup
            elements={elements}
            sectionContainer={sectionContainer}
          />
        </div>
      </div>

      {/* flower shapes */}
      <div className="w-[220px] h-[640px] overflow-hidden absolute top-0 right-0 hidden xl:block">
        <img
          className="w-full h-full object-contain"
          src={flowerShape}
          alt=""
        />
      </div>
      <div className="w-[220px] h-[640px] overflow-hidden absolute bottom-0 -left-14 -rotate-180 hidden xl:block">
        <img
          className="w-full h-full object-contain"
          src={flowerShape}
          alt=""
        />
      </div>

      {/* flower shapes */}

      {/* feature background image */}
      <img
        src={featureBg}
        alt=""
        className="absolute w-full h-full z-0 top-10 -left-[640px]"
      />
      {/* feature background image */}
    </section>
  );
};

export default FeatureDetails;
