// Helper function to get the correct base path for assets
const getAssetPath = (path) => {
  const basePath = import.meta.env.DEV ? '' : '/3D-Portfolio';
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
    name: "Instagram",
    href: "https://www.facebook.com/",
    icon: getAssetPath("/images/insta.svg"),
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
    title: "Splyt Drink",
    img: getAssetPath("/images/splyt-drink.png"),
  },
  {
    id: 2,
    title: "Gym Website",
    img: getAssetPath("/images/Gymstatic.png"),
  },
  {
    id: 3,
    title: "Foodie Hub's",
    img: getAssetPath("/images/foodie-hub2.png"),
  },
  {
    id: 4,
    title: "Klimate",
    img: getAssetPath("/images/klimate2.png"),
  },
  {
    id: 5,
    title: "Sonic Earphones",
    img: getAssetPath("/images/sonic.png"),
  },
  {
    id: 6,
    title: "Pipoworks",
    img: getAssetPath("/images/pipoworks.png"),
  },
];

// New projects data with detailed information
const projectsData = [
  {
    id: 1,
    title: "SPLYT Drink",
    subtitle: "Interactive Protein & Caffeine Beverage Showcase",
    description: "A cutting-edge marketing website for SPLYT, a premium protein and caffeine drink brand, designed to blend nostalgic aesthetics with modern web interactivity. This project represents a complete brand digital experience, featuring sophisticated scroll-triggered animations, immersive product showcases, and device-optimized performance. I built this platform to not just display product information, but to create an emotional connection through motion design and thoughtful user interactions. The site takes visitors on a journey through the brand's unique flavors, nutritional benefits, and customer testimonials, all while maintaining buttery-smooth 60fps animations across devices. What started as a simple product page evolved into a case study of how modern web technologies can elevate brand storytelling.",
    image: "/images/splyt-drink.png",
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
    id: 2,
    title: "Gymstatic",
    subtitle: "Modern Gym Management Platform",
    description: "A comprehensive fitness platform featuring membership management, class scheduling, and member engagement tools designed to streamline gym operations and enhance user experience.",
    image: "/images/gym.png",
    technologies: ["React", "Tailwind CSS",  "React Scroll", "Lucide Icons", "Vite"],
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
    id: 3,
    title: "Foodie Hub",
    subtitle: "Modern Food Delivery Platform UI",
    description: "A mouthwatering React-based interface for a contemporary food delivery service that makes ordering as satisfying as the meals themselves. I designed this project to solve the common problem of cluttered food apps by creating a visually delicious yet functionally simple ordering experience. The interface combines appetite-stimulating colors with intuitive navigation, making the journey from hunger to checkout both beautiful and efficient. What began as a practice project evolved into a case study on how strategic color psychology and micro-interactions can significantly improve conversion rates in e-commerce interfaces. The warm gradient backgrounds and food-focused animations create an emotional connection before users even see the menu items.",
    image: "/images/foodie-hub.png",
    technologies: ["React 19", "Vite", "Tailwind CSS",  "React Icons", "GitHub Pages"],
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
    id: 4,
    title: "Klimate",
    subtitle: "Hyperlocal Weather Intelligence Platform",
    description: "Klimate redefines weather forecasting by combining precision meteorology with thoughtful UX design. As a developer passionate about both clean code and atmospheric science, I built this app to solve the frustration of juggling multiple weather sources. Using the OpenWeatherMap API, Klimate delivers hyperlocal forecasts with surgical accuracy while maintaining a minimalist interface. The project evolved from a simple weather widget into a full-fledged application with intelligent caching, adaptive themes, and predictive search – all while keeping bundle size under 50KB. What makes Klimate special is how it balances real-time data with offline resilience, remembering your favorite locations and last-viewed forecast even without connectivity.",
    image: "/images/klimate2.png",
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
    id: 5,
    title: "Sonic Earphones",
    subtitle: "Immersive Product Launch Microsite",
    description: "A sensory-driven Framer experience that makes visitors feel the audio quality before they buy. Designed for the premium Sonic Earphones launch, this microsite transforms standard e-commerce conventions into an interactive audio journey. By leveraging Framer's scroll-triggered animations and seamless video integration, I created the illusion of spatial audio through visual storytelling. The minimalist interface keeps focus on product craftsmanship while subtle hover effects highlight key features. Built in just 4 days, this project demonstrates how Framer can deliver production-ready marketing sites faster than traditional development approaches.",
    image: "/images/sonic.png",
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
    id: 6,
    title: "Pipowork",
    subtitle: "Trusted Plumbing Services Platform",
    description: "A refreshing digital storefront for Pipowork Plumbing, transforming a traditionally analog service into a seamless online experience. Designed in Framer, this website combines approachable professionalism with intuitive navigation, making emergency plumbing services feel just a click away. The crisp white and rejuvenating green palette evokes cleanliness and reliability, while strategically placed CTAs guide users from problem recognition to solution booking in under 30 seconds. Built without code, this project demonstrates how modern tools like Framer can deliver enterprise-grade marketing sites faster and more cost-effectively than traditional development.",
    image: "/images/pipoworks2.png",
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
  }
];

const testimonials = [
  {
    name: "John Miller",
    pos: "Founder of ModernEdge Solutions",
    review:
      "David Jhon turned our vision into a stunning, functional platform that our customers love. Their creativity and technical expertise truly set them apart.",
    imgPath: "/3D-Portfolio/images/client1.png",
  },
  {
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
    imgPath: "/3D-Portfolio/images/client2.png",
  },
  {
    name: "Sarah Lopez",
    pos: "Entrepreneur and Small Business Owner",
    review:
      "Exceeded my expectations with a unique and beautifully designed product that works flawlessly. Their creative touch is outstanding.",
    imgPath: "/3D-Portfolio/images/client3.png",
  },
  {
    name: "David Chen",
    pos: "Project Manager at CreativeSphere Agency",
    review:
      "Blends technical skills with bold creativity to deliver exceptional results. They push boundaries and elevate every project they work on.",
    imgPath: "/3D-Portfolio/images/client4.png",
  },
];

const footerIconsList = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "images/b-fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/",
    icon: "images/b-insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/",
    icon: "images/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "https://www.facebook.com/",
    icon: "images/b-whatsapp.svg",
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