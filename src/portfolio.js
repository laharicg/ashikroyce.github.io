/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ashik Royce",
  title: "Hi, I'm Ashik",
  subTitle: emoji(
    "Welcome to my place of passion. Programming is not only my passion but is something that I developed over time with great effort. I am driven by my insatiable fascination for Computers I learn something new every day as there is so much yet to learn."
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

  achivementsCards: [],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
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
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "",
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};