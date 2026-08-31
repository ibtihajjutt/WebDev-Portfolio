
import LazyScene from "../components/LazyScene";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>

      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20 max-w-4xl">
            <p className="font md:text-2xl text-base">
              👋 Muhammad Ibtihaj
            </p>
            <h1 className="font-bold md:text-7xl text-4xl leading-tight">WordPress &amp; Shopify Developer</h1>
            <p className="md:text-2xl text-lg mt-5 max-w-2xl text-white-50/90">
              I build, customize, and maintain high-quality WordPress and Shopify websites for businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-blue-50 text-white-50 font-medium hover:bg-blue-600 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white-50/30 text-white-50 font-medium hover:border-blue-50 transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
          <div className="absolute w-full z-30 bottom-20 right-0">
            <div className="flex justify-between items-end">
              <a
                href="#about"
                className="flex flex-col items-center md:gap-5 gap-1 cursor-pointer"
              >
                <p className="md:text-base text-xs">Explore</p>
                <img
                  src="/WebDev-Portfolio/images/arrowdown.svg"
                  alt="arrowdown"
                  className="size-7 animate-bounce"
                />
              </a>
              <div className="flex flex-col items-end">
                <img src="/WebDev-Portfolio/images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-6xl text-3xl uppercase">WordPress</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <LazyScene
          className="absolute inset-0"
          loadComponent={() => import("../components/HeroExperience")}
          fallback={
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,40,213,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(28,52,255,0.22),transparent_32%),linear-gradient(180deg,rgba(11,6,32,0.1),rgba(11,6,32,0.8))]" />
          }
        />
      </div>
    </section>
  );
};

export default Hero;
