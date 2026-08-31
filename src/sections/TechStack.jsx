import TechIcon from "../components/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";

const serviceGroups = [
  {
    title: "WordPress",
    items: [
      "WordPress Website Development",
      "Elementor Development",
      "Theme Customization",
      "Plugin Configuration",
      "Custom WordPress Development",
      "WooCommerce",
      "Website Maintenance",
      "Bug Fixing",
      "Performance & Responsive Improvements",
    ],
  },
  {
    title: "Shopify",
    items: [
      "Shopify Store Development",
      "Shopify Theme Customization",
      "Custom Shopify Sections",
      "Liquid Development",
      "Mega Menu",
      "Shopify Store Customization",
      "Ecommerce Development",
    ],
  },
  {
    title: "Web & Deployment",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "cPanel",
      "Hostinger",
      "GoDaddy",
      "Domain & DNS Configuration",
      "SSL Setup",
      "Website Migration",
      "Backup & Deployment",
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack">
      <div className="w-full h-full">
        <div className="w-full md:my-40 my-8">
          <div className="container mx-auto md:p-0 px-5">
            <TitleHeader
              title="Skills & Services"
              number="02"
              text="WordPress, Shopify, ecommerce, and deployment support"
            />
          </div>
          <div className="md:mt-20 mt-10 relative">
            <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
            <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
            <div className="marquee h-52">
              <div className="marquee-box md:gap-12 gap-5">
                {iconsList.map((icon, index) => (
                  <TechIcon key={`${icon.name}-${index}`} icon={icon} />
                ))}
                {iconsList.map((icon, index) => (
                  <TechIcon key={`${icon.name}-duplicate-${index}`} icon={icon} />
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto md:p-0 px-5 mt-16">
            <div className="grid gap-6 md:grid-cols-3">
              {serviceGroups.map((group) => (
                <div key={group.title} className="bg-black-300 rounded-2xl p-6">
                  <h3 className="gradient-title text-2xl font-semibold mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-white-50/90">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-50"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
