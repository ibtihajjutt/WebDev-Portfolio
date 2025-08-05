// filepath: src/pages/ProjectsDetail.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import TitleHeader from "../components/TitleHeader";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { projectsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectsDetail = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("overview");
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectHeaderRef = useRef(null); // Ref for the project header

  useEffect(() => {
    const fetchProject = () => {
      try {
        setLoading(true);

        const projectId = id ? parseInt(id) : 1;
        const foundProject = projectsData.find((p) => p.id === projectId);

        if (!foundProject) {
          setError("Project not found");
          return;
        }

        setProject(foundProject);
        setError(null);
      } catch (error) {
        setError("Error loading project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Scroll to project header on load
  useEffect(() => {
    if (project && projectHeaderRef.current) {
      projectHeaderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [project]);

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

        // Use gsap.utils.toArray to ensure targets are found
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
      <div className="min-h-screen flex items-center justify-center bg-black-primary">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <section
      id="project-detail"
      className="min-h-screen bg-black-primary px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 sm:mb-12" id="animated-text">
          <Link
            to="/"
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
          </Link>
        </div>

        {/* Project Header */}
        <div
          className="mb-12 sm:mb-16"
          id="animated-text"
          ref={projectHeaderRef}
        >
          <TitleHeader
            title={project.title}
            number="01"
            text={project.subtitle}
          />
        </div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6" id="project-card">
            {/* Project Image */}
            <div className="bg-black-300 rounded-2xl p-4 sm:p-6">
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain bg-black-400"
                  onError={(e) => {
                    e.target.src = "/3D-Portfolio/images/placeholder.png";
                  }}
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white-50 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50/10 text-blue-50 rounded-full text-sm font-medium border border-blue-50/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Project Details Card */}
            <div
              className="bg-black-300 rounded-2xl p-6 sm:p-8"
              id="project-card"
            >
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
                    <p className="text-white-50 font-medium">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Card */}
            <div
              className="bg-black-300 rounded-2xl p-6 sm:p-8"
              id="project-card"
            >
              <h3 className="gradient-title text-xl font-semibold mb-6">
                Project Links
              </h3>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-50/10 text-blue-50 rounded-xl hover:bg-blue-50/20 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black-400 text-white-50 rounded-xl hover:bg-black-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
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

        {/* Dynamic Content Sections */}
        <div className="space-y-6 sm:space-y-8" id="project-card">
          {activeSection === "overview" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">
                Project Overview
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white-50">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-50/10 text-blue-50 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white-50">
                    Project Stats
                  </h3>
                  <div className="space-y-2">
                    {[
                      { label: "Duration", value: project.duration },
                      { label: "Category", value: project.category },
                      { label: "Year", value: project.year },
                    ].map((stat, index) => (
                      <p key={index} className="text-white-50">
                        <span className="text-blue-50">{stat.label}:</span>{" "}
                        {stat.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          {activeSection === "features" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50/5 rounded-lg border border-blue-50/10"
                  >
                    <div className="w-2 h-2 bg-blue-50 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white-50">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Section */}
          {activeSection === "challenges" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-6 bg-blue-50/5 rounded-lg border border-blue-50/10"
                  >
                    <h3 className="text-xl font-semibold text-blue-50 mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-white-50 mb-4">
                      {challenge.description}
                    </p>
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-green-400 font-medium">
                        Solution: {challenge.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes Section */}
          {activeSection === "outcomes" && (
            <div className="bg-black-300 rounded-2xl p-6 sm:p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">
                Project Outcomes
              </h2>
              <div className="grid gap-4">
                {project.outcomes.map((outcome, index) => (
                  <div
                    key={index}
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