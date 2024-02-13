import { BaseLayout } from "@/components";
const HeroSection = () => {
  return (
    <BaseLayout>
      <section className="pt-20 pb-12 mx-auto text-center flex flex-col items-center max-w-4xl ">
        <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
          Assessment Test For Web Developer
        </h1>
      </section>
    </BaseLayout>
  );
};

export default HeroSection;
