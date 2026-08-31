import TitleHeader from '../components/TitleHeader';
import { experienceData } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="flex-center relative md:p-0 px-5">
      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
          title="Experience"
          number="04"
          text="WordPress and Shopify development experience"
        />

        <div className="mt-16 space-y-6">
          {experienceData.map((job) => (
            <div key={`${job.company}-${job.role}`} className="bg-black-300 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white-50/60">{job.company}</p>
                  <h3 className="mt-2 gradient-title text-3xl font-semibold">{job.role}</h3>
                </div>
                <p className="text-white-50/80 md:text-lg">{job.period}</p>
              </div>

              <p className="mt-6 text-white-50/90 text-base md:text-lg">
                Develop and customize WordPress and Shopify websites for client requirements.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
