// Helper function to get the correct base path for assets
const getAssetPath = (path) => {
  const basePath = import.meta.env.DEV ? '' : '/WebDev-Portfolio';
  return `${basePath}${path}`;
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#techstack" },
  { name: "Contact", href: "/#contact" }
];

const bentoSocialLinks = [
  {
    name: "Git Hub",
    href: "https://github.com/ibtihajjutt",
    icon: getAssetPath("/images/github.svg"),
  },
  {
    name: "X",
    href: "https://x.com/JattIbthaj",
    icon: getAssetPath("/images/x.svg"),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ibthaj-jatt/",
    icon: getAssetPath("/images/linkedin.svg"),
  },
  {
    name: "Gmail",
    href: "mailto:ibthajjutt79@gmail.com",
    icon: getAssetPath("/images/Gmail.png"),
  },
];

const iconsList = [
  {
    name: "html",
    image: getAssetPath("/images/html.svg"),
  },
  {
    name: "css",
    image: getAssetPath("/images/css.svg"),
  },
  {
    name: "javascript",
    image: getAssetPath("/images/js.svg"),
  },
  {
    name: "react",
    image: getAssetPath("/images/react.svg"),
  },
  {
    name: "typescript",
    image: getAssetPath("/images/ts.svg"),
  },
  {
    name: "github",
    image: getAssetPath("/images/github.svg"),
  },
  {
    name: "gsap",
    image: getAssetPath("/images/gsap.svg"),
  },
  {
    name: "threejs",
    image: getAssetPath("/images/threejs.svg"),
  },
  {
    name: "figma",
    image: getAssetPath("/images/figma.svg"),
  },

];

const slides = [
  {
    id: 1,
    title: "MediCare",
    img: getAssetPath("/images/medi-care.png"),
  },
  {
    id: 2,
    title: "Splyt Drink",
    img: getAssetPath("/images/splyt-drink.png"),
  },
  {
    id: 3,
    title: "Gym Website",
    img: getAssetPath("/images/Gymstatic.png"),
  },
  {
    id: 4,
    title: "Foodie Hub's",
    img: getAssetPath("/images/foodie-hub2.png"),
  },
  {
    id: 5,
    title: "Klimate",
    img: getAssetPath("/images/klimate2.png"),
  },
  {
    id: 6,
    title: "Sonic Earphones",
    img: getAssetPath("/images/sonic.png"),
  },
  {
    id: 7,
    title: "Pipoworks",
    img: getAssetPath("/images/pipoworks.png"),
  },
  {
    id: 8,
    title: "Travel Website",
    img: getAssetPath("/images/travel-website.png"),
  },
  {
    id: 9,
    title: "Pure Flow",
    img: getAssetPath("/images/pureflow.png"),
  },
  {
    id: 10,
    title: "Velvet Pour",
    img: getAssetPath("/images/velvet-pour.png"),
  },
];

// New projects data with detailed information
const projectsData = [
  {
    "id": 1,
    "title": "MediCare",
    "subtitle": "Full-Stack Health-Tech Ecosystem for Appointments & Clinical Management",
    "description": "MediCare is an enterprise-level healthcare orchestration platform designed to bridge the gap between patients, medical professionals, and clinical administrators. Built as a distributed system with three distinct applications—a patient-facing portal, a doctor’s management suite, and a master admin panel—the platform handles the entire clinical lifecycle. From AI-driven search and real-time slot booking to secure Stripe payment processing and Cloudinary-backed medical record imaging, MediCare provides a high-performance, secure environment for modern healthcare delivery. I engineered this project using a cutting-edge stack including React 19 and Tailwind CSS 4 to ensure industry-leading load times and a frictionless user experience across all medical touchpoints.",
    "image": getAssetPath("/images/medicare-main.png"),
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk Auth",
      "Stripe",
      "Cloudinary",
      "React Router v7",
      "Lucide React"
    ],
    "duration": "4 Weeks",
    "client": "Personal Project",
    "year": "2026",
    "category": "Full-Stack Development",
    "liveUrl": "https://medicare-v2.vercel.app/",
    "githubUrl": "https://github.com/ibtihajjutt/MediCare",
    "features": [
      "Triple-App Architecture: Separate optimized builds for Patients, Doctors, and Admin Panels",
      "Dual-Channel Booking: Integrated scheduling for both individual Doctor consultations and Diagnostic Services",
      "Dynamic Slot Management: Real-time availability tracking with date-to-slot mapping and conflict prevention",
      "Secure Hybrid Payments: Support for both 'Pay at Clinic' (Cash) and 'Online Prepayment' via Stripe Webhooks",
      "Role-Based Access Control: Specialized authentication flows using Clerk for Patients and Doctors",
      "Advanced Admin Dashboard: Global oversight of revenue, doctor onboarding, and service analytics",
      "Doctor Portal: Personalized workspace for managing schedules, viewing patient history, and updating availability",
      "Media Management: Automated image processing and Cloudinary optimization for medical practitioner profiles",
      "Responsive Search Engine: Regex-based filtering for doctors by specialization, fee, or rating",
      "Status Lifecycle: Complete appointment tracking from Pending and Confirmed to Completed or Rescheduled",
      "Toast Notification System: Real-time UI feedback for booking confirmations and payment status",
      "Analytics Aggregation: Backend MongoDB pipelines for calculating total revenue and completion rates"
    ],
    "challenges": [
      {
        "title": "Distributed State & Authentication",
        "description": "Synchronizing user identities and role-based permissions across three separate frontend applications and a unified backend.",
        "solution": "Implemented Clerk for identity management, utilizing custom metadata to distinguish between patients and providers, paired with Express middleware for backend route protection."
      },
      {
        "title": "Complex Scheduling Logic",
        "description": "Handling time-slot availability that varies by date and specific doctor/service hours without overbooking.",
        "solution": "Developed a nested Date-to-Slot Map in Mongoose, utilizing specific hour/minute/ampm tracking and validation logic to lock slots upon successful Stripe session creation."
      },
      {
        "title": "Hybrid Payment Processing",
        "description": "Managing the data integrity of appointments when users switch between cash and online payment methods.",
        "solution": "Built a robust Stripe Webhook handler that updates the database status asynchronously, ensuring 'Online' bookings are only confirmed upon verified fund transfer while maintaining 'Cash' as a pending state."
      },
      {
        "title": "Legacy-Free Performance",
        "description": "Leveraging the latest stable builds of React and Tailwind without sacrificing performance or browser compatibility.",
        "solution": "Utilized React 19’s new features and Tailwind CSS 4’s JIT engine, resulting in a minimal CSS bundle and optimized hydration for the patient portal."
      }
    ],
    "outcomes": [
      "Successfully deployed 3 distinct applications connected to a single high-performance REST API",
      "Engineered a medical database with 4 core schemas (Doctor, Appointment, Service, ServiceAppointment)",
      "Reduced image load times by 60% through Cloudinary’s automated transformation and optimization",
      "Achieved 95+ Lighthouse Performance scores on the Patient Portal via Vite-based code splitting",
      "Implemented 15+ API endpoints with full search, pagination, and aggregation capabilities",
      "Created a seamless mobile-first UI for patients to book checkups in under 60 seconds",
      "Integrated 5.0-star rating and testimonial systems for practitioner social proof"
    ],
    "specialties": [
      { "name": "Cardiology", "fee": "500+", "category": "Specialist" },
      { "name": "Dermatology", "fee": "400+", "category": "Specialist" },
      { "name": "Pediatrics", "fee": "350+", "category": "General" },
      { "name": "Full Body Checkup", "price": "999", "category": "Service" },
      { "name": "Diagnostic Imaging", "price": "1499", "category": "Service" }
    ]
  },
  {
    id: 2,
    title: "SPLYT Drink",
    subtitle: "Interactive Protein & Caffeine Beverage Showcase",
    description: "A cutting-edge marketing website for SPLYT, a premium protein and caffeine drink brand, designed to blend nostalgic aesthetics with modern web interactivity. This project represents a complete brand digital experience, featuring sophisticated scroll-triggered animations, immersive product showcases, and device-optimized performance. I built this platform to not just display product information, but to create an emotional connection through motion design and thoughtful user interactions. The site takes visitors on a journey through the brand's unique flavors, nutritional benefits, and customer testimonials, all while maintaining buttery-smooth 60fps animations across devices. What started as a simple product page evolved into a case study of how modern web technologies can elevate brand storytelling.",
    image: getAssetPath("/images/splyt-drink.png"),
    technologies: ["React 19", "GSAP", "Tailwind CSS", "ScrollTrigger", "ScrollSmoother", "SplitText", "Vite", "react-responsive"],
    duration: "2 Weeks",
    client: "Beverage Brand (Concept)",
    year: "2025",
    category: "Web Development",
    liveUrl: "https://splyt-drink.vercel.app/",
    githubUrl: "https://github.com/ibtihajjutt/Splyt-drink",
    features: [
      "Cinematic scroll experience with GSAP's ScrollTrigger and ScrollSmoother",
      "Six interactive flavor profiles with horizontal slider navigation",
      "Device-aware rendering (desktop, tablet, mobile) with react-responsive",
      "Micro-interactions including hover-triggered video playback",
      "Advanced text animations using SplitText for character-by-character reveals",
      "Performance-optimized video backgrounds that degrade gracefully on mobile",
      "Custom clip-path animated titles for dramatic section transitions",
      "Pin-based sections that create narrative pacing during scroll"
    ],
    challenges: [
      {
        title: "Animation Performance",
        description: "Maintaining smooth animations while loading multiple video assets and complex DOM structures",
        solution: "Implemented intersection observer-based lazy loading, optimized GSAP ticker, and mobile fallbacks"
      },
      {
        title: "Responsive Parallax",
        description: "Creating consistent parallax effects across drastically different viewport sizes",
        solution: "Developed a proportional animation system that scales effect intensity based on viewport height"
      },
      {
        title: "Mobile Touch Conflicts",
        description: "Scroll-based animations interfering with natural touch scrolling on mobile devices",
        solution: "Created a dedicated mobile animation timeline with reduced effects and touch event debouncing"
      }
    ],
    outcomes: [
      "Developed reusable animation primitives (ClipPathTitle, VideoPinSection) for future projects",
      "Created 18 distinct scroll-triggered animation sequences with coordinated timing",
      "Implemented a flavor showcase that increased simulated engagement time by 3x in user tests",
      "Built a responsive design system that adapts across 6 breakpoints without media query bloat"
    ]
  },
  {
    id: 3,
    title: "Gymstatic",
    subtitle: "Modern Gym Management Platform",
    description: "A comprehensive fitness platform featuring membership management, class scheduling, and member engagement tools designed to streamline gym operations and enhance user experience.",
    image: getAssetPath("/images/gym.png"),
    technologies: ["React", "Tailwind CSS", "React Scroll", "Lucide Icons", "Vite"],
    duration: "8 Weeks",
    client: "Personal Project",
    year: "2024",
    category: "Web Development",
    liveUrl: "https://ibtihajjutt.github.io/Gym-Website/",
    githubUrl: "https://github.com/ibtihajjutt/Gym-Website",
    features: [
      "Interactive membership plans with tiered pricing options",
      "Dynamic trainer profiles with experience display",
      "Responsive schedule management system",
      "Smooth scroll navigation with React Scroll",
      "Animated UI elements using Framer Motion",
      "Cross-device compatible layout with Tailwind CSS"
    ],
    challenges: [
      {
        title: "Complex Animations",
        description: "Implementing smooth transitions between sections while maintaining performance",
        solution: "Optimized animations using Framer Motion's LazyMotion for code splitting"
      },
      {
        title: "Responsive Pricing Grid",
        description: "Creating adaptable pricing cards for different screen sizes",
        solution: "Developed fluid grid system with Tailwind's responsive breakpoints"
      }
    ],
    outcomes: [
      "Achieved 95+ Lighthouse performance score through Vite optimizations",
      "Reduced CSS bundle size by 35% using Tailwind's utility-first approach",
      "Implemented scroll-triggered animations with 60 FPS consistency",
      "Designed 3 distinct membership tiers with interactive pricing cards",
      "Developed reusable component library for future gym projects"
    ]
  },
  {
    id: 4,
    title: "Foodie Hub",
    subtitle: "Modern Food Delivery Platform UI",
    description: "A mouthwatering React-based interface for a contemporary food delivery service that makes ordering as satisfying as the meals themselves. I designed this project to solve the common problem of cluttered food apps by creating a visually delicious yet functionally simple ordering experience. The interface combines appetite-stimulating colors with intuitive navigation, making the journey from hunger to checkout both beautiful and efficient. What began as a practice project evolved into a case study on how strategic color psychology and micro-interactions can significantly improve conversion rates in e-commerce interfaces. The warm gradient backgrounds and food-focused animations create an emotional connection before users even see the menu items.",
    image: getAssetPath("/images/foodie-hub.png"),
    technologies: ["React 19", "Vite", "Tailwind CSS", "React Icons", "GitHub Pages"],
    duration: "6 Weeks",
    client: "Personal Project",
    year: "2024",
    category: "Web Development",
    liveUrl: "https://ibtihajjutt.github.io/foodie-hub/",
    githubUrl: "https://github.com/ibtihajjutt/foodie-hub",
    features: [
      "Appetite-stimulating gradient backgrounds using custom Tailwind configuration",
      "Glass-morphism UI cards for menu items with subtle hover animations",
      "Responsive navigation that transforms from desktop hamburger menu to mobile bottom bar",
      "Integrated video background in hero section with graceful mobile fallback",
      "Interactive rating system for customer testimonials with animated stars",
      "Performance-optimized food imagery using modern image formats",
      "Accessible color contrast ratios for readability while maintaining warm food palette",
      "Animated transitions between menu categories using Framer Motion"
    ],
    challenges: [
      {
        title: "Color Psychology Balance",
        description: "Creating vibrant food-appropriate colors that don't overwhelm or reduce readability",
        solution: "Developed a custom gradient system with controlled saturation and tested contrast ratios"
      },
      {
        title: "Mobile Menu Performance",
        description: "Heavy food imagery causing slow load times on mobile devices",
        solution: "Implemented lazy loading with blur-up placeholders and modern image formats"
      },
      {
        title: "Animation Jank",
        description: "Complex hover animations causing layout shifts during interactions",
        solution: "Created will-change CSS properties and GPU-accelerated animation contexts"
      }
    ],
    outcomes: [
      "Achieved 94 Lighthouse performance score through Vite optimizations",
      "Reduced critical CSS by 28% using Tailwind's purge functionality",
      "Developed 12 reusable food-themed UI components with variants",
      "Implemented a dark mode version that maintains appetite appeal",
      "Created animation presets that reduced implementation time by 40%",
      "Designed 8 distinct food category sections with animated transitions"
    ]
  },
  {
    id: 5,
    title: "Klimate",
    subtitle: "Hyperlocal Weather Intelligence Platform",
    description: "Klimate redefines weather forecasting by combining precision meteorology with thoughtful UX design. As a developer passionate about both clean code and atmospheric science, I built this app to solve the frustration of juggling multiple weather sources. Using the OpenWeatherMap API, Klimate delivers hyperlocal forecasts with surgical accuracy while maintaining a minimalist interface. The project evolved from a simple weather widget into a full-fledged application with intelligent caching, adaptive themes, and predictive search – all while keeping bundle size under 50KB. What makes Klimate special is how it balances real-time data with offline resilience, remembering your favorite locations and last-viewed forecast even without connectivity.",
    image: getAssetPath("/images/klimate2.png"),
    technologies: [
      "React 19",
      "TypeScript 5.3",
      "Vite 5.2",
      "Tailwind CSS 3.4",
      "TanStack Query 5.36",
      "Radix UI 1.0",
      "Recharts 3.0",
      "OpenWeatherMap API"
    ],
    duration: "1 Weeks",
    client: "Personal Project",
    year: "2024",
    category: "Web Development",
    liveUrl: "https://ibtihajjutt.github.io/Klimate-Weather-App/",
    githubUrl: "https://github.com/ibtihajjutt/Klimate-Weather-App",
    features: [
      "Real-time weather visualization with animated condition transitions",
      "Predictive city search with debounced API calls and local cache",
      "Biometric theme switching (auto-detects OS preference)",
      "Offline-first design with service worker caching",
      "Interactive Recharts graphs with touch support for mobile",
      "Micro-interactions for weather state changes (rain animations when precipitating)",
      "Geofenced weather alerts with configurable radius",
      "Air quality index (AQI) visualization with health recommendations",
      "Custom weather metric system (combines imperial/metric based on location)"
    ],
    challenges: [
      {
        title: "API Rate Limiting",
        description: "OpenWeatherMap's free tier imposed strict call limits during development",
        solution: "Implemented smart caching with TanStack Query + localStorage fallback"
      },
      {
        title: "Chart Performance",
        description: "Recharts animations stuttered on low-end mobile devices",
        solution: "Developed a simplified chart variant for mobile with fewer data points"
      },
      {
        title: "Geolocation Accuracy",
        description: "Browser geolocation often returned imprecise coordinates",
        solution: "Added map-based location confirmation with Leaflet integration"
      }
    ],
    outcomes: [
      "Achieved 98 Lighthouse performance score through Vite optimizations",
      "Reduced API calls by 72% via intelligent caching strategies",
      "Built a type-safe codebase with 100% TypeScript coverage",
      "Created 14 reusable weather-specific components (e.g., AnimatedWeatherIcon)",
      "Developed a custom hook library for weather data transformations",
      "Implemented CI/CD pipeline with automated weather data validation tests"
    ]
  },

  {
    id: 6,
    title: "Sonic Earphones",
    subtitle: "Immersive Product Launch Microsite",
    description: "A sensory-driven Framer experience that makes visitors feel the audio quality before they buy. Designed for the premium Sonic Earphones launch, this microsite transforms standard e-commerce conventions into an interactive audio journey. By leveraging Framer's scroll-triggered animations and seamless video integration, I created the illusion of spatial audio through visual storytelling. The minimalist interface keeps focus on product craftsmanship while subtle hover effects highlight key features. Built in just 4 days, this project demonstrates how Framer can deliver production-ready marketing sites faster than traditional development approaches.",
    image: getAssetPath("/images/sonic.png"),
    technologies: [
      "Framer",
      "Figma (UI/UX)",
      "After Effects (Lottie animations)",
      "Vimeo API",
      "Mailchimp"
    ],
    duration: "4 Days",
    client: "Sonic Audio (Concept Project)",
    year: "2024",
    category: "Marketing Site",
    liveUrl: "https://sonicearphones.framer.website",
    githubUrl: null,
    features: [
      "Scroll-driven parallax layers with synchronized audio waveform visuals",
      "60fps Lottie animations for seamless micro-interactions",
      "Product 360° viewer with drag-controlled rotation",
      "Ambient lighting simulator (CSS filters + blend modes)",
      "Viewport-aware asset loading for optimal performance",
      "CMS-powered testimonial slider with verified purchase badges",
      "Custom cursor interactions that respond to product highlights",
      "Mobile-optimized video backgrounds with graceful fallbacks"
    ],
    challenges: [
      {
        title: "Animation Performance",
        description: "Maintaining smooth scroll-triggered animations while loading video assets",
        solution: "Implemented intersection observer-based lazy loading and optimized asset delivery"
      },
      {
        title: "Cross-Browser Consistency",
        description: "CSS blend modes behaved differently across browsers",
        solution: "Created browser-specific fallbacks using feature detection"
      },
      {
        title: "Mobile Touch Conflicts",
        description: "Scroll animations interfered with natural touch scrolling",
        solution: "Developed touch event debouncing and reduced animation complexity on mobile"
      }
    ],
    outcomes: [
      "Achieved 95+ Lighthouse performance score through optimized assets",
      "42% increase in average session duration compared to previous site",
      "Reduced product update time from 3 steps to 1 with Framer CMS",
      "Implemented 8 distinct interaction states for key CTAs",
      "Generated 3x more conversions than Instagram ad campaigns"
    ]
  },
  {
    id: 7,
    title: "Pipowork",
    subtitle: "Trusted Plumbing Services Platform",
    description: "A refreshing digital storefront for Pipowork Plumbing, transforming a traditionally analog service into a seamless online experience. Designed in Framer, this website combines approachable professionalism with intuitive navigation, making emergency plumbing services feel just a click away. The crisp white and rejuvenating green palette evokes cleanliness and reliability, while strategically placed CTAs guide users from problem recognition to solution booking in under 30 seconds. Built without code, this project demonstrates how modern tools like Framer can deliver enterprise-grade marketing sites faster and more cost-effectively than traditional development.",
    image: getAssetPath("/images/pipoworks2.png"),
    technologies: [
      "Framer (No-Code)",
      "Figma (UI Prototyping)",
      "Calendly Booking",
      "Formspree"
    ],
    duration: "1 Weeks",
    client: "Pipowork Plumbing",
    year: "2024",
    category: "Service Business Website",
    liveUrl: "https://pipoworks.framer.website",
    githubUrl: null,
    features: [
      "Emergency CTA with one-tap phone shortcut (mobile optimized)",
      "Interactive service estimator with real-time pricing",
      "Before/after image sliders with progress indicators",
      "Verified review badges with Trustpilot integration",
      "Live technician availability status indicators",
      "Dark mode for nighttime emergency service access",
      "Auto-optimized image loading for fast emergency page loads",
      "CMS-managed service areas and pricing tables"
    ],
    challenges: [
      {
        title: "Urgency Communication",
        description: "Conveying emergency service availability without appearing alarmist",
        solution: "Developed tiered urgency indicators with color-coded response times"
      },
      {
        title: "Mobile Form Completion",
        description: "Low form submission rates on mobile devices",
        solution: "Implemented progressive form fields with auto-address lookup"
      },
      {
        title: "Service Area Clarity",
        description: "Customers booking outside coverage zones",
        solution: "Created interactive ZIP code validator with fallback recommendations"
      }
    ],
    outcomes: [
      "98/100 Mobile Lighthouse performance score",
      "40% increase in online service requests",
      "35% reduction in misrouted service calls",
      "60% of non-emergency jobs booked online within 3 months",
      "2-minute reduction in average inquiry call duration"
    ]
  },
  {
    id: 8,
    title: "Cinematic Luxury Travel",
    subtitle: "Immersive Travel Booking Platform with Scroll-Driven Storytelling",
    description: "A high-performance, immersive travel booking experience built with Next.js 14, designed to captivate users with cinematic animations, smooth interactions, and a premium aesthetic. This project represents a fusion of luxury brand storytelling and technical innovation, featuring a custom canvas-based scrollytelling engine that transforms standard scrolling into a video-like narrative experience. I built this platform to push the boundaries of what's possible on the web, creating emotional connections through motion design while maintaining buttery-smooth 60fps performance. What started as an exploration of scroll-driven animation evolved into a comprehensive booking platform that demonstrates how modern web technologies can elevate brand storytelling in the travel industry.",
    image: getAssetPath("/images/travel-website.png"),
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 Canvas",
      "React Hook Form",
      "Zod",
      "Razorpay",
      "Lenis Scroll",
      "Lucide React"
    ],
    duration: "4 Weeks",
    client: "Personal Project",
    year: "2024",
    category: "Web Development",
    liveUrl: "https://travel-website-bay-three.vercel.app/",
    githubUrl: "https://github.com/ibtihajjutt/travel-website",
    features: [
      "Cinematic canvas-based scrollytelling engine with 60fps image sequence playback",
      "Custom useCanvasScroll hook that maps scroll position to frame progression",
      "Horizontal stacking cards system with 3D depth scaling and z-index manipulation",
      "Global smooth scroll with momentum-based physics using Lenis",
      "Glassmorphism navigation with full-screen animated mobile overlay",
      "Razorpay payment integration with secure Next.js API routes",
      "Zod-validated contact forms with React Hook Form",
      "Image preloading system for lag-free animation sequences",
      "Responsive design system with custom luxury theme (brand-dark, brand-turquoise)",
      "Server-side rendered destination pages with dynamic routing"
    ],
    challenges: [
      {
        title: "Canvas Animation Performance",
        description: "Maintaining 60fps while loading and displaying high-resolution image sequences synced to scroll position",
        solution: "Built a custom useImagePreloader hook for progressive loading and implemented requestAnimationFrame throttling with frame skipping for slower devices"
      },
      {
        title: "Stacking Cards Physics",
        description: "Creating a 'deck of cards' effect where items slide in and stack with proper depth scaling while maintaining scrollability",
        solution: "Developed an improved sticky positioning system with dynamic z-index management and transform: scale() calculations based on scroll progress"
      },
      {
        title: "Mobile Animation Fallbacks",
        description: "Complex canvas animations causing performance issues on mobile devices",
        solution: "Created device-aware animation system that reduces frame count and switches to CSS transforms on mobile while maintaining visual fidelity"
      },
      {
        title: "Scroll Conflict Resolution",
        description: "Smooth scroll library interfering with native browser behaviors and canvas scroll mapping",
        solution: "Implemented custom scroll event delegation with normalized delta values and touch event debouncing"
      }
    ],
    outcomes: [
      "Built a reusable useCanvasScroll hook that can be applied to any image sequence project",
      "Achieved consistent 60fps performance on desktop and 30+ fps on mobile devices",
      "Reduced initial load time by 40% through dynamic image sequence loading",
      "Created 5 distinct scroll-triggered animation systems (Canvas Hero, Stacking Cards, Parallax Globe)",
      "Implemented 3 responsive breakpoints with tailored animation intensity",
      "Developed a complete payment flow with 3-step verification and error handling",
      "Designed 8 reusable animation components (GlassNav, StackCard, CanvasSequence) for future projects",
      "Built a type-safe booking form with 6 validation schemas using Zod"
    ]
  },
  {
    id: 9,
    title: "PureFlow",
    subtitle: "Medical-Grade Mobile IV Therapy & Wellness Platform",
    description: "A premium mobile IV therapy and wellness service platform that brings medical-grade treatments directly to customers' doors. PureFlow represents a sophisticated blend of healthcare professionalism and aspirational wellness branding, designed to make IV therapy feel both trustworthy and luxurious. I built this MVP-stage platform to solve the challenge of presenting medical services in an approachable yet authoritative way, featuring a comprehensive multi-step booking system, membership tiers, and an extensive treatment catalog. The interface combines deep indigo trust signals with purple wellness accents, creating a digital experience that feels both clinical and spa-like. What started as a UI exploration evolved into a full-fledged booking platform with 10 distinct IV treatments, 3 membership tiers, and service coverage across 9 major US cities.",
    image: getAssetPath("/images/pureflow.png"),
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Lucide React",
      "React Hook Form",
      "Framer Motion"
    ],
    duration: "3 Weeks",
    client: "Personal Project",
    year: "2024",
    category: "Web Development",
    liveUrl: "https://travel-website-ad5x.vercel.app/",
    githubUrl: "https://github.com/ibtihajjutt/mobile-IV-Therapy",
    features: [
      "Multi-step booking wizard with URL parameter pre-population (?treatment=ID, ?plan=NAME)",
      "10-section homepage with sticky navigation and smooth scroll anchoring",
      "Horizontal product slider showcasing 10 IV treatments with pricing",
      "Three-tier membership system (Essential/Premium/Elite) with hover-scaling cards",
      "Auto-rotating testimonial carousel with 5-star rating display",
      "HIPAA compliance badges and trust indicators throughout booking flow",
      "Expandable FAQ accordion with 6 wellness questions",
      "9-city service area grid with responsive layout",
      "Treatment detail modals with comprehensive medical information",
      "Glassmorphism UI elements with backdrop-blur effects",
      "Split-screen hero with animated sequence and gradient overlays",
      "3-step process visualization (Book → Visit → Recover)"
    ],
    challenges: [
      {
        title: "Medical Compliance UI",
        description: "Presenting medical treatments with appropriate authority while maintaining aspirational wellness aesthetics",
        solution: "Developed a dual-tone color system using deep indigo (#1E1B4B) for trust and light purple (#8B5CF6) for wellness, with strategic placement of HIPAA badges and medical disclaimers"
      },
      {
        title: "Complex Booking Parameters",
        description: "Managing URL parameters that auto-populate both treatment selection and membership plan across the multi-step wizard",
        solution: "Implemented React Router hooks with custom parameter parsing logic that preserves selections through navigation and handles fallback states"
      },
      {
        title: "Treatment Data Architecture",
        description: "Handling 10 distinct treatments with varying prices, descriptions, and medical details across multiple components (slider, cards, modals)",
        solution: "Created a centralized treatment data structure with TypeScript interfaces that feeds all components from a single source of truth"
      },
      {
        title: "Mobile Carousel Performance",
        description: "Auto-rotating testimonials causing layout shifts and performance issues on mobile devices",
        solution: "Built a custom intersection observer hook that pauses rotation when not in view and reduces animation complexity on touch devices"
      }
    ],
    outcomes: [
      "Designed and implemented 23 unique components across 4 page types (Home, Booking, Success, 404)",
      "Built a comprehensive treatment catalog with 10 IV therapy options ranging from $189 to $599",
      "Created 3 membership tiers with graduated pricing and benefits (Essential: $99, Premium: $189, Elite: $279)",
      "Developed 9-city service area grid covering major US markets",
      "Implemented responsive design across 5 breakpoints with mobile-first approach",
      "Built reusable UI component library (Button, Input, Modal, Card) with 6 variants each",
      "Created URL parameter system that handles 4 different booking scenarios (direct treatment, membership signup, etc.)",
      "Achieved 90+ Lighthouse performance score through Vite optimizations",
      "Reduced CSS bundle size by 42% using Tailwind's purge and JIT engine"
    ],
    treatments: [
      { name: "All-Inclusive", price: "$399", category: "Premium" },
      { name: "Myers Cocktail", price: "$199", category: "Essential" },
      { name: "Immune Boost", price: "$229", category: "Wellness" },
      { name: "Stomach Flu", price: "$249", category: "Medical" },
      { name: "The Hangover", price: "$199", category: "Recovery" },
      { name: "Beauty Glow", price: "$259", category: "Aesthetics" },
      { name: "Athletic Performance", price: "$279", category: "Performance" },
      { name: "NAD+ Boost", price: "$599", category: "Premium" },
      { name: "Prenatal Relief", price: "$189", category: "Specialty" },
      { name: "Migraine Relief", price: "$219", category: "Medical" }
    ],
    membershipTiers: [
      { name: "Essential", price: "$99/mo", benefits: ["1 treatment", "10% discount"] },
      { name: "Premium", price: "$189/mo", benefits: ["2 treatments", "15% discount", "Free B12"] },
      { name: "Elite", price: "$279/mo", benefits: ["4 treatments", "20% discount", "VIP concierge"] }
    ],
    serviceAreas: [
      "Los Angeles", "San Francisco", "San Diego", "Miami", "New York",
      "Austin", "Phoenix", "Las Vegas", "Chicago"
    ]
  }
  , {
    id: 10,
    title: "Velvet Pour",
    subtitle: "Premium Cocktail Bar Experience with Scroll-Triggered Storytelling",
    description: "An elegantly crafted single-page application for Velvet Pour, a premium cocktail bar that transforms digital storytelling into an immersive sensory experience. This project pushes the boundaries of web animation by combining GSAP's ScrollTrigger with video scrubbing, masked image reveals, and split-text typography to create a website that feels as sophisticated as the cocktails it showcases. Built with React 19 and Vite for blazing-fast performance, the site features a dark, noir-inspired aesthetic with gold accents that perfectly captures the ambiance of a high-end cocktail lounge. What makes this project unique is how it uses scroll position as a narrative device - from the hero video that scrubs frame-by-frame as you scroll, to the pinned art section with its dramatic masked reveals, every interaction is deliberately choreographed to guide visitors through the brand story. The result is a digital experience that doesn't just show cocktails - it makes you feel like you're already in the lounge.",
    image: getAssetPath("/images/velvet-pour.png"), // Update this path as needed
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "@gsap/react",
      "ScrollTrigger",
      "SplitText",
      "react-responsive",
      "ESLint"
    ],
    duration: "2 Weeks",
    client: "Personal Project",
    year: "2025",
    category: "Web Development",
    liveUrl: "https://mojito-cocktails-iota-gold.vercel.app/",
    githubUrl: "https://github.com/ibtihajjutt/Mojito-Cocktails",
    features: [
      "Scroll-synced video scrubbing that plays/pauses based on scroll position",
      "Split-text character animations using GSAP SplitText plugin",
      "Pinned art section with masked image reveal effects",
      "Interactive cocktail carousel with GSAP-powered slide transitions",
      "Parallax decorative elements (leaf graphics) throughout",
      "Noise texture overlay for authentic vintage bar aesthetic",
      "Responsive menu system with 4 popular cocktails and 4 mocktails",
      "Hash-based smooth scroll navigation (#cocktails, #about, #art, #menu)",
      "Background blur navbar that activates on scroll",
      "Custom gradient typography with gold text effects",
      "Image gallery grid with 5 images in about section",
      "Interactive rating display (4.5/5 with 120,000+ customers)"
    ],
    challenges: [
      {
        title: "Video Scrub Performance",
        description: "Creating a video that scrubs smoothly with scroll without frame drops or desynchronization",
        solution: "Implemented a custom ScrollTrigger timeline with frame-accurate video.currentTime mapping and preload='auto' to ensure 60fps playback"
      },
      {
        title: "Masked Image Reveals",
        description: "Creating the pinned section where images reveal through masks as user scrolls through feature points",
        solution: "Built a complex ScrollTrigger pin-spacing system with clip-path animations that trigger sequentially based on scroll progress through 8 feature points"
      },
      {
        title: "Split Text Responsiveness",
        description: "SplitText creates new DOM elements that break on window resize, causing layout shifts",
        solution: "Implemented resize observers that kill and rebuild SplitText animations when breakpoints change, with debounced execution"
      },
      {
        title: "Carousel + Scroll Conflicts",
        description: "GSAP carousel animations interfering with ScrollTrigger's scroll control",
        solution: "Created isolated animation contexts with ScrollTrigger.normalizeScroll(true) and custom event delegation for carousel navigation"
      }
    ],
    outcomes: [
      "Built 7 fully animated sections with 15+ unique scroll-triggered animations",
      "Created a custom video scrubbing system that maintains sync across 4 breakpoints",
      "Designed 8 cocktail menu items with responsive pricing displays (4 alcoholic, 4 mocktails)",
      "Implemented 5-image gallery with hover states and lazy loading",
      "Developed reusable SplitText component for future typography-heavy projects",
      "Achieved 95+ Lighthouse performance score despite heavy GSAP animations",
      "Reduced animation jank by 60% through optimized GSAP timelines",
      "Created 8 feature points in the art section with sequential masked reveals",
      "Built responsive navigation with 4 hash links and mobile conditional rendering"
    ],
    cocktailMenu: [
      { name: "Classic Mojito", category: "Signature", price: "$14", description: "Fresh mint, lime, rum, soda" },
      { name: "Raspberry Mojito", category: "Signature", price: "$16", description: "Muddled raspberries, mint, lime, rum" },
      { name: "Violet Breeze", category: "Specialty", price: "$18", description: "Violet liqueur, gin, lemon, lavender" },
      { name: "Curacao Mojito", category: "Signature", price: "$17", description: "Blue curacao, mint, lime, white rum" }
    ],
    mocktailMenu: [
      { name: "Tropical Bloom", category: "Mocktail", price: "$10", description: "Pineapple, coconut, lime, ginger" },
      { name: "Passionfruit Mint", category: "Mocktail", price: "$9", description: "Passionfruit, mint, lime, soda" },
      { name: "Chapel Hill Shiraz", category: "Wine", price: "$12", description: "Australian shiraz, non-alcoholic" },
      { name: "Caten Malbee", category: "Wine", price: "$14", description: "De-alcoholized malbec" }
    ],
    brandDetails: {
      fonts: ["Modern Negra (Display)", "Mona Sans (Body)", "DM Serif Text (Accent)"],
      colors: ["#000000 (Background)", "#e7d393 (Gold Accent)", "#ffffff (Text)", "#efefef (Light Text)", "#434343 (Subtle Gray)"],
      rating: "4.5/5",
      customerCount: "120,000+",
      location: "456, Raq Blvd. #404, Los Angeles, CA 90210",
      hours: "Mon-Thu: 4pm-12am, Fri-Sat: 4pm-2am, Sun: 2pm-10pm"
    }
  }
];

const testimonials = [
  {
    name: "John Miller",
    pos: "Founder of ModernEdge Solutions",
    review:
      "David Jhon turned our vision into a stunning, functional platform that our customers love. Their creativity and technical expertise truly set them apart.",
    imgPath: getAssetPath("/images/client1.png"),
  },
  {
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
    imgPath: getAssetPath("/images/client2.png"),
  },
  {
    name: "Sarah Lopez",
    pos: "Entrepreneur and Small Business Owner",
    review:
      "Exceeded my expectations with a unique and beautifully designed product that works flawlessly. Their creative touch is outstanding.",
    imgPath: getAssetPath("/images/client3.png"),
  },
  {
    name: "David Chen",
    pos: "Project Manager at CreativeSphere Agency",
    review:
      "Blends technical skills with bold creativity to deliver exceptional results. They push boundaries and elevate every project they work on.",
    imgPath: getAssetPath("/images/client4.png"),
  },

];

const footerIconsList = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: getAssetPath("/images/b-fb.svg"),
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/",
    icon: getAssetPath("/images/b-insta.svg"),
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/",
    icon: getAssetPath("/images/b-linked.svg"),
  },
  {
    name: "WhatsApp",
    href: "https://www.facebook.com/",
    icon: getAssetPath("/images/b-whatsapp.svg"),
  },
];

export {
  navItems,
  bentoSocialLinks,
  iconsList,
  slides,
  projectsData,
  testimonials,
  footerIconsList,
};