import { MaxWidthWrapper } from "@/components";
const HeroSection = () => {
  return (
    <MaxWidthWrapper>
      <div className="pt-20 pb-12 mx-auto text-center flex flex-col items-center max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
          Assessment Test For{" "}
          <span className="text-rose-800 ">Web Developer</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
