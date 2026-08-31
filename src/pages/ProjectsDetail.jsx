import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TitleHeader from "../components/TitleHeader";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { projectsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectHeaderRef = useRef(null);

  useEffect(() => {
    const fetchProject = () => {
      try {
        setLoading(true);

        const foundProject = projectsData.find(
          (item) => String(item.id) === String(id)
        );

        if (!foundProject) {
          setProject(null);
          setError("Project not found");
          return;
        }

        setProject(foundProject);
        setError(null);
      } catch {
        setProject(null);
        setError("Error loading project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    if (project && projectHeaderRef.current) {
      projectHeaderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [project]);

  const handleBackToProjects = () => {
    navigate("/");

    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "features", title: "Features" },
    { id: "challenges", title: "Challenges" },
    { id: "outcomes", title: "Results" },
  ];

  useGSAP(
    () => {
      if (project) {
        gsap.from("#project-card", {
          opacity: 0,
          y: 50,
          stagger: 0.3,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "#project-detail",
            start: "top center",
          },
        });

        const animatedTextElements = gsap.utils.toArray("#animated-text");
        gsap.from(animatedTextElements, {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "#project-detail",
            start: "top center",
            end: "top 60%",
          },
        });
      }
    },
    [project]
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-primary">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-50"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-primary px-5">
        <div className="max-w-lg text-center">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <button
            type="button"
            onClick={handleBackToProjects}
            className="inline-flex items-center justify-center rounded-full border border-blue-50/60 bg-blue-50/10 px-5 py-3 text-sm font-semibold text-white-50 transition-all duration-200 hover:bg-blue-50 hover:text-white"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const technologies = project.technologies || [];
  const features = project.features || [];
  const outcomes = project.outcomes || [];
  const challenges = project.challenges || [];

  return (
    <section
      id="project-detail"
      className="min-h-screen bg-black-primary px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" id="animated-text">
          <button
            type="button"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-blue-50 hover:text-white-50 transition-colors duration-300 text-base sm:text-lg"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-50 px-5 py-3 text-sm font-semibold text-black-300 transition-all duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-50"
            >
              View Website
            </a>
          )}
        </div>

        <div
          className="mb-12 sm:mb-16"
          id="animated-text"
          ref={projectHeaderRef}
        >
          <TitleHeader
            title={project.title}
            number={String(project.id ?? 1).padStart(2, "0")}
            text={project.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-8 space-y-6" id="project-card">
            <div className="bg-black-300 rounded-2xl p-4 sm:p-6">
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain bg-black-400"
                  onError={(e) => {
                    e.target.src = "/WebDev-Portfolio/images/placeholder.png";
                  }}
                />
              </div>
            </div>

            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white-50 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {technologies.map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className="px-3 py-1.5 bg-blue-50/10 text-blue-50 rounded-full text-sm font-medium border border-blue-50/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8" id="project-card">
              <h3 className="gradient-title text-xl font-semibold mb-6">
                Project Details
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Duration", value: project.duration },
                  { label: "Client", value: project.client },
                  { label: "Year", value: project.year },
                  { label: "Category", value: project.category },
                ].map((detail, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      {detail.label}
                    </p>
                    <p className="text-white-50 font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black-300 rounded-2xl p-6 sm:p-8" id="project-card">
              <h3 className="gradient-title text-xl font-semibold mb-6">
                Project Action
              </h3>
              <div className="flex flex-col gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-5 py-3 text-sm font-semibold text-black-300 transition-all duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-50"
                  >
                    View Website
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12" id="project-card">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-blue-50 text-black-300 font-semibold"
                    : "bg-black-300 text-white-50 hover:bg-blue-50/10 border border-blue-50/20"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8" id="project-card">
          {activeSection === "overview" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Project Overview</h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white-50">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={`${tech}-overview-${index}`}
                        className="px-3 py-1.5 bg-blue-50/10 text-blue-50 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white-50">Project Stats</h3>
                  <div className="space-y-2">
                    {[
                      { label: "Duration", value: project.duration },
                      { label: "Category", value: project.category },
                      { label: "Year", value: project.year },
                    ].map((stat, index) => (
                      <p key={index} className="text-white-50">
                        <span className="text-blue-50">{stat.label}:</span> {stat.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "features" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={`${feature}-${index}`}
                    className="flex items-start gap-3 p-4 bg-blue-50/5 rounded-lg border border-blue-50/10"
                  >
                    <div className="w-2 h-2 bg-blue-50 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white-50">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "challenges" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div
                    key={challenge.title ? `${challenge.title}-${index}` : `challenge-${index}`}
                    className="p-6 bg-blue-50/5 rounded-lg border border-blue-50/10"
                  >
                    <h3 className="text-xl font-semibold text-blue-50 mb-3">{challenge.title}</h3>
                    <p className="text-white-50 mb-4">{challenge.description}</p>
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-green-400 font-medium">Solution: {challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "outcomes" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Project Outcomes</h2>
              <div className="grid gap-4">
                {outcomes.map((outcome, index) => (
                  <div
                    key={`${outcome}-${index}`}
                    className="flex items-start gap-4 p-4 bg-green-500/5 rounded-lg border border-green-500/10"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-white-50 flex-1">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetail;