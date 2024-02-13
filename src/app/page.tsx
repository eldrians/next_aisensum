import { HeaderSection, CustomerSection } from "@/modules/home-page";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-full h-screen justify-center items-center bg-gradient-to-br from-black via-zinc-700 to-black">
      <HeaderSection />
      <CustomerSection />
    </main>
  );
}
