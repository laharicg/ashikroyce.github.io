/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ashik Royce",
  title: "Hi, I'm Ashik",
  subTitle: emoji(
    "A teaophile techie with a passion for programming. I am an enthusiast for challenges which keeps me abreast of Software development & of latest Web technologies."
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://www.github.com/ashikroyce/",
  linkedin: "https://www.linkedin.com/in/ashikroyce/",
  instagram: "https://www.instagram.com/ashikroyce/",
  gmail: "ashikroyce@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "Things i work with",
  subTitle: "CRAZY DEVELOPER LOOKING TO EXPLORE ALL ASPECTS OF PROGRAMMING",
  skills: [
    emoji("⚡ Languages known: rust, java, python, javascript"),
    emoji("⚡ Web 🌐 Mobile and Desktop 🖥️ Applications"),
    emoji("⚡ Machine Learning and Deep Learning"),
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square",
    },
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "python",
      progressPercentage: "75%",
    },
    {
      Stack: "C/C++",
      progressPercentage: "72%",
    },
    {
      Stack: "Java",
      progressPercentage: "80%",
    },
    {
      Stack: "ReactJS",
      progressPercentage: "74%",
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Design",
      progressPercentage: "40%",
    },
  ],
};

//Work experience

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Technical Lead",
      company: "GUVI Geek",
      companylogo: require("./assets/images/guvi.png"),
      date: "March 2020 – Present",
      desc:
        "Main contributor in IOS app development & Leading the developers in analysis, design, development, and performance optimization of web application.",
      descBullets: [
        "Introduced docker to team.",
        "Dominant player in PHP, REACT, NodeJS, Angular with swift debugging.",
        "Expertise in container management using Docker by writing Docker files and set up the automated build on Docker HUB and installed and configured Kubernetes.",
        "Technical monitoring with healthy mentoring skills to boost up the performance of fellow developers.",
        "Managing the team to perform within deadlines and goals while ensuring the quality of product.",
      ],
    },
    {
      role: "Product Engineer",
      company: "Workativ",
      companylogo: require("./assets/images/workativ.png"),
      date: "July 2018 - Mar 2020",
      desc:
        "Pitched in to deal with Project planning, Architecture desgining & Extended hands-on experience on deployment models.",
      descBullets: [
        "Designed and deployed dynamically scalable, and reliable applications on the Cloud using Azure & then using AWS deployment.",
        "Utilised technologies as REACT(Client), NodeJS(Server) & Rust.",
        "Built product by integration of Docker & Kubernetes",
      ],
    },
    {
      role: "Software Engineer",
      company: "Facilio",
      companylogo: require("./assets/images/facilio.png"),
      date: "Mar 2018 - July 2018",
      desc:
        "Reasearch along with Extended hands-on experience with Vuejs & AWS deployment.",
      descBullets: [
        "Assist with maintenance and development of products using technologies like Java & VueJS(client).",

        "Expertise in Microsoft Azure Cloud Services & Application Insights",

        "Been a team player and observed the development environment & inculcated the research skills to explore on VueJS.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "ZOHO",
      companylogo: require("./assets/images/zoho.jpg"),
      date: "AUG 2016 - FEB 2018",
      desc:
        "Assist in development of product: Zoho People & well trained by senior developers and mentors.",
      descBullets: [
        "Impressed with my performance & was moved to Zoho Desk dealing with Java & JSP, Mastered the skill that calls Rest APIs using STRUTS 2 framework.",

        "Developed first product signup page with reduced page loading duration of 6 seconds from 20 secs.",

        "Equipped & involved with technologies such as Java, MySQL, PostgreSQL, Struts 2, Node, npm, Yarn, REACT, Redux, RxJS.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ashikroyce",
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Code for Good Winner, 2020",
      subtitle: "National Hackathon by JP Morgan & Chase",
      image: require("./assets/images/jpmcLogo.jpg"),
      footerLink: [
        {
          name:
            "Built solution for Panah Foundation NGO managing their internal workflows",
          url:
            "https://www.linkedin.com/posts/sauravmh_codeforgood-hackathon-ngoindia-activity-6701149352917905408-dGvn",
        },
      ],
    },
    {
      title: "MLH Fellow of class 2020",
      subtitle:
        "Selected for contributing to Facebook projects amongst students applied from 20+ countries",
      image: require("./assets/images/mlhFellowship.svg"),
      footerLink: [
        {
          name: "Our Team Won (Execute.ly) Blog",
          url: "https://news.mlh.io/mlh-fellowship-kicks-off-07-06-2020",
        },
        {
          name: "Selection Post",
          url:
            "https://www.linkedin.com/posts/sauravmh_opensource-mlhfellowship-activity-6670759773010579456-p6LX",
        },
      ],
    },
    {
      title: "Venturesity Hackathon Winner",
      subtitle:
        "Developed a platform to anonymously report Tuberculosis cases, and predict TB using Deep Learning",
      image: require("./assets/images/venturesityHack.png"),
      footerLink: [
        {
          name: "What is it?",
          url:
            "https://github.com/sauravhiremath/tb-saathi/blob/master/presentation/phosphorus-rev3.pdf",
        },
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/12IUdDQwOHyDiJtnKLEJywweYA6CRKykg/view?usp=sharing",
        },
      ],
    },
    {
      title: "Government recognition for Plastic Road Construction",
      subtitle:
        "Layed out one of the first 50m stretch of Eco-friendly Bitumen-Plastic Road in India",
      image: require("./assets/images/plasticRoad.png"),
      footerLink: [
        {
          name: "Yes, we are in the news",
          url:
            "https://indianexpress.com/article/cities/mumbai/school-kids-plan-for-plastic-roads-excites-bmc-meeting-soon/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://dev.to/sauravmh/building-a-multiplayer-game-using-websockets-1n63",
      title: "Building a multiplayer game using WebSockets - Part 1",
      description:
        "A definitive guide for building your multiplayer game on a browser the right way using socket.io on NodeJS and React. Ranging from folder-structure to project deployments",
    },
    {
      url:
        "https://dev.to/sauravmh/going-opensource-a-dive-into-facebook-s-jest-cgb",
      title: "Going OpenSource - A dive into facebook's jest",
      description:
        "How to get started and sustain in opensource. My progress as I started from scratch and introduced new features to the Facebook project Jest",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "TechEx - Get started with ML",
      subtitle:
        "What is and How to get get started with ML attended by more than 200 people",
      slides_url:
        "https://docs.google.com/presentation/d/1uf9vXJJodQwb1NqqqpXTS7XJuo3LRmwN8nlX7Oj5k1I/edit?usp=sharing",
      event_url:
        "https://www.facebook.com/csivitu/photos/pcb.2584585674899467/2584583278233040/",
    },
    {
      title: "Advanced Data Structures and Algorithms",
      subtitle:
        "Learn what is Dynamic Mem Location, Heap Structure and more about min-heap and max-heap sorting",
      slides_url:
        "https://docs.google.com/presentation/d/1iZ4OI5fBfJuXRjcu7-k4Xdu7jJOA4VmD9IncdkRyc4g/edit?usp=sharing",
      event_url: "https://www.facebook.com/csivitu/posts/2309814529043251",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "FIND ME for coding a new project (or) to CHILL with Chai! ",
  number: "+91-9566534351",
  email_address: "ashikroyce@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  openSource,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
