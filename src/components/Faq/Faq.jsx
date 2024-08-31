import { useState } from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      title: "What is Zuvlo?",
      description:
        "Zuvlo is a fan-site where creators can provide their audience with exclusive content and where they can interact with each other.",
    },
    {
      title: "What are the fees on Zuvlo?",
      description:
        "We're currently offering creators a 0% fee for their first 3 months on Zuvlo, and just 9% after that, making us one of the highest paying platforms in the whole industry.",
    },
    {
      title: "What features does Zuvlo have compared to other platforms?",
      description:
        "Besides the basic functions of a fan-site, where you can sell subscriptions and PPV content, we also have features like - creating your own physical items store, creating your own clip store, having paid video calls with your fans, a For You page, and a ton more...",
    },
    {
      title: "Does Zuvlo offer chargeback protection?",
      description:
        "Yes, we're offering all of our creators with full chargeback protection, because we know how annoying chargebacks can be for a content creator.",
    },
    {
      title: "What are the payout methods available Zuvlo?",
      description:
        "At the moment we offer the following payout methods: Bank Transfer, Crypto (BTC, ETH, USDT and LTC), PayPal, Skrill, Paxum and Cosmo. If you require any additional payout methods then please get in touch with our support team.",
    },
    {
      title: "Does Zuvlo have a Brand Ambassador program?",
      description:
        "Yes, we are still running our Brand Ambassador program, but we have a very limited amount of spots left, so please get in touch with our support team ASAP if you'd like to apply.",
    },
  ];

  const handleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="container pb-[80px] xlg:pb-[250px]">
      <div className="space-y-4 text-center xl:space-y-5">
        <h3 className="text-[32px] font-semibold leading-[48x] text-[#101828] xl:text-[44px] xl:leading-[56px] xlg:text-[64px] xlg:leading-[84px]">
          Frequently asked questions{" "}
        </h3>
        <p className="leading-7 text-[#667085] xl:text-[18px]">
          Everything you need to know about the product and billing.
        </p>
      </div>
      {/* faq wrapper */}
      <div className="flex flex-col gap-4 pt-14 xl:gap-5 xl:pt-[90px]">
        {faqList.map((item, index) => (
          <SingleFaq
            isOpen={openIndex === index}
            openFaq={() => handleFaq(index)}
            faq={item}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
