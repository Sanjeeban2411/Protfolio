import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/IP-locator.jpg";
import img2 from "./images/app1.jpg";
import img3 from "./images/Memory token pic.jpg";
import img4 from "./images/AgroTip pic.jpg";
import img5 from "./images/portfolio pic.jpg";

export const Experience = [
  {
    id: 1,
    date: "2020 - 2024",
    iconsSrc: <IoCodeWorking />,
    title: "SRM Institute of Technology",
    location: "Chennai, India",
    description:
      "Btech in CSE with specializtion in AI/ML",
  },
  {
    id: 2,
    date: "2018 - 2020",
    iconsSrc: <IoCodeWorking />,
    title: "Gurukul Grammar Senior Sec. School",
    location: "Guwahati, Assam",
    description:
      "Science , CBSE",
  },
  {
    id: 3,
    date: "2006-2018",
    iconsSrc: <IoCodeWorking />,
    title: "Gurukul Grammar Senior Sec. School",
    location: "Guwahati, Assam",
    description:
      "CBSE",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Text-Utils",
    imageSrc: img1,
    techs: "React Js, Javascript",
    github: "https://github.com/Sanjeeban2411/text_utils",
  },
  {
    id: 2,
    name: "News-Monkey",
    imageSrc: img2,
    techs: "React Js, Javascript, Bootstrap",
    github: "https://github.com/ZERstar/envision",
  },
  {
    id: 3,
    name: "Weather Updater",
    imageSrc: img3,
    techs: "React Js, Javascript, TailwindCSS",
    github: "https://github.com/Sanjeeban2411/WeatherUpdater",
  },
  {
    id: 4,
    name: "TriLingo",
    imageSrc: img4,
    techs: "React Js,  Tailwind",
    github: "https://github.com/Sanjeeban2411/TrilingoMern",
  },
  {
    id: 5,
    name: "AstroTalk",
    imageSrc: img5,
    techs: "Nodejs, Expressjs, MongoDB, Postman",
    github: "https://github.com/Sanjeeban2411/Astrologer_backend",
  },
  {
    id: 6,
    name: "Aaruush '22",
    imageSrc: img5,
    techs: "NextJS, TailwindCSS, Nodejs, Expressjs, DynamoDB, AWS Amplify",
    github: "https://github.com/team-envision/Aaruush.org-22",
  },
  {
    id: 7,
    name: "PayMate",
    imageSrc: img5,
    techs: "Reactjs, TailwindCSS, Nodejs, Expressjs, MongoDB, Postman",
    github: "https://github.com/Sanjeeban2411/Astrologer_backend",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Sanjeeban2411",
  },

  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanjeeban-parasar-448aba1b8",
  },
];
