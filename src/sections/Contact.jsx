import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";
import LazyScene from "../components/LazyScene";

const Contact = () => {
  return (
    <section id="contact" className="flex-center md:p-0 px-5 relative">
      <div className="w-full h-full container md:my-40 my-20 max-w-full">
        <TitleHeader
          title="Contact"
          number="05"
          text="Let's discuss your next WordPress or Shopify project"
        />

        <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 w-full max-w-full relative z-10">
              <ContactForm />
            </div>

            <div className="lg:col-span-7 w-full max-w-full">
              <div className="relative h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_0_80px_rgba(89,142,255,0.2)]">
                <LazyScene
                  className="w-full h-full"
                  loadComponent={() => import("../components/ContactExperience")}
                  fallback={
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_0_80px_rgba(89,142,255,0.2)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(89,142,255,0.35),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(255,40,213,0.28),transparent_34%)]" />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
