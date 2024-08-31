import SectionTitle from "../Heading/SectionTitle";
import CreatorSlide from "./CreatorSlide";
import Marquee from "react-fast-marquee";

const Creators = () => {
  const creators = [
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/thesluttybraniac.jpg",
      creator_name: "The Slutty Braniac",
      creator_role: "Zuvlo Creator",
      followers: "81k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/micaelwilson%20(1).jpg",
      creator_name: "Micael Wilson",
      creator_role: "Zuvlo Creator",
      followers: "83k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/crazywifeslut.png",
      creator_name: "CrazyWifeSlut",
      creator_role: "Zuvlo Creator",
      followers: "56k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/unmaskedtwinks.png",
      creator_name: "UnmaskedTwinks",
      creator_role: "Zuvlo Creator",
      followers: "212k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/alexandrawett.png",
      creator_name: "Alexandra Wett",
      creator_role: "Zuvlo Creator",
      followers: "105k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/agathaferraz.jpeg",
      creator_name: "Agatha Ferraz",
      creator_role: "Zuvlo Creator",
      followers: "97k followers",
    },
  ];

  return (
    <section className="py-[60px] xlg:py-[150px]">
      <SectionTitle>Trusted by the{`world's`} biggest creators</SectionTitle>

      {/* creator slider area */}
      <div className="pt-[60px] xlg:pt-[120px]">
        <Marquee autoFill={true}>
          <div className="creator--holder mr-6 flex gap-6 md:h-[450px] xl:mr-8 xl:h-[612px] xl:gap-8 xlg:mr-12 xlg:gap-12">
            {creators.map((singleCreator, index) => (
              <CreatorSlide creator={singleCreator} key={index} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Creators;
