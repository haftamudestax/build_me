import { HeroIntro } from "./HeroIntro";
import { ProfileCard } from "./ProfileCard";
import { FunFactList } from "./FunFactList";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center bg-linear-to-r from-slate-50 via-cyan-50 to-teal-50 px-6 pb-16 pt-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
        <HeroIntro />
        <div className="flex flex-col items-center gap-6">
          <ProfileCard />
          <div>
            <h1 className="text-center font-bold mb-4 text-sky-500 animate-pulse">
              Fun Facts
            </h1>
            <FunFactList />
          </div>
        </div>
      </div>
    </section>
  );
}
