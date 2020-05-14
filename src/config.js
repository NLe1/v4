module.exports = {
  siteTitle: 'Nhan Le | Software Engineering Student',
  siteDescription:
    'Nhan Le is  a software engineer student based in San Jose, CA specializing native and cross-platform web/mobile application from scratch.',
  siteKeywords:
    'Nhan Le , Nhan, Le, NLe1, software engineer, front-end engineer, web developer, javascript, sanjose, sjsu, sbcc, vietnam, danang, student',
  siteUrl: 'https://nhantle.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-156047559-1',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Nhan Le',
  location: 'San Jose, CA',
  email: 'nhan99dn@gmail.com',
  github: 'https://github.com/NLe1',
  twitterHandle: '@nhanbary99dn',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/NLe1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nle1',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/leechanjin138/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nhanbarry99dn',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
