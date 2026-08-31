const getAssetPath = (path) => {
  const basePath = import.meta.env.DEV ? '' : '/WebDev-Portfolio';
  return `${basePath}${path}`;
};

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#techstack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const bentoSocialLinks = [
  {
    name: 'Git Hub',
    href: 'https://github.com/ibtihajjutt',
    icon: getAssetPath('/images/github.svg'),
  },
  {
    name: 'X',
    href: 'https://x.com/JattIbthaj',
    icon: getAssetPath('/images/x.svg'),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ibthaj-jatt/',
    icon: getAssetPath('/images/linkedin.svg'),
  },
  {
    name: 'Gmail',
    href: 'mailto:ibthajjutt79@gmail.com',
    icon: getAssetPath('/images/Gmail.png'),
  },
];

const iconsList = [
  { name: 'WordPress', short: 'WP' },
  { name: 'Shopify', short: 'Shop' },
  { name: 'Elementor', short: 'EL' },
  { name: 'WooCommerce', short: 'Woo' },
  { name: 'HTML', short: 'HTML' },
  { name: 'CSS', short: 'CSS' },
  { name: 'JavaScript', short: 'JS' },
  { name: 'Liquid', short: 'Liquid' },
  { name: 'cPanel', short: 'cP' },
  { name: 'Hostinger', short: 'Host' },
  { name: 'GoDaddy', short: 'GD' },
  { name: 'SSL', short: 'SSL' },
  { name: 'DNS', short: 'DNS' },
  { name: 'Website Maintenance', short: 'Care' },
  { name: 'Bug Fixing', short: 'Fix' },
];

const projectPortfolio = [
  {
    id: 1,
    title: 'National Home Rentals',
    category: 'Business Website',
    liveUrl: 'https://nationalhomerentals.com',
    image: getAssetPath('/images/nationalhomerentals.jpg'),
  },
  {
    id: 2,
    title: 'Doctor Obesity',
    category: 'Business Website',
    liveUrl: 'https://doctorobesity.com',
    image: getAssetPath('/images/doctorobesity.jpg'),
  },
  {
    id: 3,
    title: 'Local Digital Marketing',
    category: 'Business Website',
    liveUrl: 'https://localdigitalmarketing.co',
    image: getAssetPath('/images/localdigitalmarketing.jpg'),
  },
  {
    id: 4,
    title: 'Little Rusted Ladle',
    category: 'Business Website',
    liveUrl: 'https://littlerustedladle.com',
    image: getAssetPath('/images/littlerustedladle.jpg'),
  },
  {
    id: 5,
    title: 'Thicktails',
    category: 'Business Website',
    liveUrl: 'https://thicktails.com',
    image: getAssetPath('/images/thicktails.jpg'),
  },
  {
    id: 6,
    title: 'Fragrant Villa',
    category: 'Business Website',
    liveUrl: 'https://fragrantvilla.com',
    image: getAssetPath('/images/fragrantvilla.jpg'),
  },
  {
    id: 7,
    title: 'Luli Bebe',
    category: 'Business Website',
    liveUrl: 'https://lulibebeus.com',
    image: getAssetPath('/images/lulibebeus.jpg'),
  },
  {
    id: 8,
    title: 'Qabeela',
    category: 'Business Website',
    liveUrl: 'https://qabeela.biz',
    image: getAssetPath('/images/qabeela.jpg'),
  },
];

const slides = projectPortfolio.map((project) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  img: project.image,
  liveUrl: project.liveUrl,
}));

const projectsData = projectPortfolio.map((project) => ({
  id: project.id,
  title: project.title,
  subtitle: project.category,
  description: `${project.title} is a live client website representing a professional online presence for the business.`,
  image: project.image,
  technologies: ['WordPress & Shopify Development', 'Responsive Design', 'Website Maintenance', 'HTML', 'CSS', 'JavaScript'],
  duration: 'Client Project',
  client: project.title,
  year: 'Live Website',
  category: project.category,
  liveUrl: project.liveUrl,
  githubUrl: null,
  features: [
    'Professional website presentation',
    'Responsive layout across devices',
    'Clear business communication and call-to-action flow',
    'Website updates and ongoing support',
  ],
  outcomes: [
    'Professional client-facing website',
    'Responsive and maintainable online presence',
    'Clear communication for business goals',
  ],
  challenges: [
    {
      title: 'Project requirements',
      description: 'Each website had to reflect the business clearly and professionally while remaining easy to maintain.',
      solution: 'Focused on clean structure, responsive layout, and practical updates that align with the client goals.',
    },
  ],
}));

const experienceData = [
  {
    role: 'WORDPRESS & SHOPIFY DEVELOPER',
    company: 'SwiftCoders',
    period: 'February 2026 – Present',
    responsibilities: [
      'Develop and customize WordPress and Shopify websites for client requirements.',
    ],
  },
];

// Legacy full-stack portfolio projects were intentionally removed from the public site and kept hidden.
// const legacyProjectsData = [];

const testimonials = [
  {
    name: 'John Miller',
    pos: 'Founder of ModernEdge Solutions',
    review: 'David Jhon turned our vision into a stunning, functional platform that our customers love. Their creativity and technical expertise truly set them apart.',
    imgPath: getAssetPath('/images/client1.png'),
  },
  {
    name: 'Emily Carter',
    pos: 'UX Designer at PixelWorks Studio',
    review: 'David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.',
    imgPath: getAssetPath('/images/client2.png'),
  },
  {
    name: 'Sarah Lopez',
    pos: 'Entrepreneur and Small Business Owner',
    review: 'Exceeded my expectations with a unique and beautifully designed product that works flawlessly. Their creative touch is outstanding.',
    imgPath: getAssetPath('/images/client3.png'),
  },
  {
    name: 'David Chen',
    pos: 'Project Manager at CreativeSphere Agency',
    review: 'Blends technical skills with bold creativity to deliver exceptional results. They push boundaries and elevate every project they work on.',
    imgPath: getAssetPath('/images/client4.png'),
  },
];

const footerIconsList = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: getAssetPath('/images/b-fb.svg'),
  },
  {
    name: 'Instagram',
    href: 'https://www.facebook.com/',
    icon: getAssetPath('/images/b-insta.svg'),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.facebook.com/',
    icon: getAssetPath('/images/b-linked.svg'),
  },
  {
    name: 'WhatsApp',
    href: 'https://www.facebook.com/',
    icon: getAssetPath('/images/b-whatsapp.svg'),
  },
];

export {
  navItems,
  bentoSocialLinks,
  iconsList,
  slides,
  projectsData,
  experienceData,
  testimonials,
  footerIconsList,
};
