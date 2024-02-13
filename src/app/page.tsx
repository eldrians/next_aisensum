import { HeaderSection, CustomerSection } from "@/modules/home-page";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-full h-screen justify-center items-center bg-black ">
      <HeaderSection />
      <CustomerSection />
    </main>
  );
}
