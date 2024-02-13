import { HeaderSection, CustomerSection } from "@/modules/home-page";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-full min-h-screen h-fit py-12 lg:py-0 justify-center items-center bg-gradient-to-br from-black via-zinc-700 to-black">
      <HeaderSection />
      <CustomerSection />
    </main>
  );
}
