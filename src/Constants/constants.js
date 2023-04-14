import {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  figmaIcon,
  fitclubProject,
  jammmingProject,
  infopilotProject,
  teslaProject,
  venomsoulProject,
  memojiHand,
  memojiHello,
  memojiOk,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate
} from "../assets";

const introduction = {
  text: [
    
    "Hi there, I'm glad to have you here!",
    
    "My name is Valeriu and I am a front-end developer based in Italy. My passion for web development started in April 2022 when I began building Shopify stores.",

    "Since then, I have been constantly advancing and expanding my knowledge in this field. In October 2022, I felt the urge to dive deeper into web development which led me to learn how to code in html, css, js and reactjs. With each project, I strive to create a unique and effective solution while integrating the latest web technologies.", 
    
    "I am always excited to collaborate with individuals and teams who share my passion for creating exceptional web experiences. Thank you for taking the time to visit my portfolio!"
  ] 
  
}

const journeys = [
  {
    title: "Web Foundations",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "5 Dec 2022 - 14 Dec 2022",
    points: [
      "Fundamentals of HTML",
      "Fundamentals of CSS",
      "Developing Websites Locally",
      "Deploying Websites",
    ],
  },
  {
    title: "Improved Styling with CSS",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "15 Dec 2022 - 29 Dec 2022",
    points: [
      "Fundamentals of Web Design",
      "Making a Website Responsive",
      "CSS Transitions and Animations",
    ],
  },
  {
    title: "Building Interactive Websites",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "30 Dec 2022 -  9 Feb 2023",
    points: [
      "JavaScript Syntax",
      "Building Interactive Websites",
      "Making a Website Accessible",
      "Git and Github",
    ],
  },
  {
    title: "Front-End Development",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "10 Feb - Present",
    points: [
      "JavaScript Syntax",
      "JavaScript Testing",
      "Async JavaScript",
      "Web Apps",
      "React Framework",
    ],
  },
];

const projects = [
  {
    name: "Venomsoul E-Commerce",
    description:
      "",
    image: venomsoulProject,
    source_code_link: "https://github.com/valeriusec",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "Tesla Website",
    description:
      "",
    image: teslaProject,
    source_code_link: "https://github.com/valeriusec/tesla-website",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "InfoPilot App",
    description:
      "InfoPilot is a sleek and user-friendly React dashboard application built using Syncfusion components. Explore your data with confidence and ease using InfoPilot.",
    image: infopilotProject,
    source_code_link: "https://github.com/valeriusec/dashboard-app",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "Jammming App",
    description:
      "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
    image: jammmingProject,
    source_code_link: "https://github.com/valeriusec/jammming-app",
    demo_link: "https://jammming-b7d.pages.dev/",
  },
  {
    name: "Fit Club",
    description:
      "FitClub is a React app that follows a sleek and modern template for fitness enthusiasts, and provides different types of fitness services.",
    image: fitclubProject,
    source_code_link: "https://github.com/valeriusec/gym-website",
    demo_link: "https://fitclubgym-r42.pages.dev/",
  },
];

const certificates = {
  image: [
    htmlCertificate,
    cssCertificate,
    jsCertificate,
    reactCertificate,
    webflowCertificate,
  ]
}

const memoji = {
  image: [
    memojiHello,
    memojiHand,
    memojiOk
  ]
}

export { introduction, journeys, projects, certificates, memoji };
