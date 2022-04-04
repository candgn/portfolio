import { FaReact, FaJira } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoGithub } from "react-icons/io";
import {
  AiOutlineGitlab,
  AiOutlineHtml5,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { SiFlutter, SiZoho, SiAndroidstudio } from "react-icons/si";

const PERSONAL_INFO = {
  name: "Can",
  surname: "Doğan",
  birth: "08/1997",
  nationality: "turkey",
  gender: "male",
  location: "istanbul",
  links: [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/can-doğan-238a5115a/",
    },
    { icon: <IoLogoGithub />, link: "https://github.com/candgn" },
    { icon: <AiOutlineMail />, link: "mailto:can.dgn03@gmail.com" },
  ],
};

const WORK_EXPERIENCE = [
  {
    startDate: "01/2021",
    endDate: "current",
    location: "istanbulTR",
    companyName: "Ambeent",
    jobTitle: "frontEndDeveloper",
    bullets: [
      "ambBullet1",
      "ambBullet2",
      "ambBullet3",
      "ambBullet4",
      "ambBullet5",
      "ambBullet6",
      "ambBullet7",
      "ambBullet8",
    ],
    logo: "/logos/ambeent.jpeg",
    link: "https://www.ambeent.ai/",
    additionalIcons: [
      <FaReact />,
      <IoLogoJavascript />,
      <IoLogoCss3 />,
      <AiOutlineGitlab />,
      <IoLogoGithub />,
      <FaJira />,
      <SiFlutter />,
    ],
  },
  {
    startDate: "10/2019",
    endDate: "current",
    companyName: "DIGIST360",
    jobTitle: "cofounderSoft",
    desc: "digistDesc",
    location: "istanbulTR",
    logo: "/logos/digist.png",
    link: "https://www.digist360.com/",
    additionalIcons: [
      <SiAndroidstudio />,
      <IoLogoJavascript />,
      <IoLogoCss3 />,
      <AiOutlineHtml5 />,
    ],
  },
  {
    startDate: "07/2019",
    endDate: "10/2019",
    location: "berlinDE",
    companyName: "fraunhofer",
    jobTitle: "intern",
    bullets: [
      "fraunhoferBullet1",
      "fraunhoferBullet2",
      "fraunhoferBullet2",
      "fraunhoferBullet3",
    ],
    logo: "/logos/fraunhofer.jpeg",
    link: "https://www.ipk.fraunhofer.de/",
    additionalIcons: [<IoLogoJavascript />, <IoLogoCss3 />, <AiOutlineHtml5 />],
  },
  {
    startDate: "06/2018",
    endDate: "current",
    location: "istanbulTR",
    companyName: "Cloudyflex",
    jobTitle: "Webmaster",
    bullets: ["cfxBullet1", "cfxBullet2", "cfxBullet3", "cfxBullet4"],
    logo: "/logos/cfx.jpeg",
    link: "https://www.cloudyflex.com/",
    additionalIcons: [
      <SiZoho />,
      <IoLogoJavascript />,
      <IoLogoCss3 />,
      <AiOutlineHtml5 />,
    ],
  },

  {
    startDate: "07/2017",
    endDate: "08/2017",
    location: "aksarayTR",
    companyName: "Mercedes-Benz",
    jobTitle: "intern",
    desc: "mercedesDesc",
    logo: "/logos/mercedes.jpeg",
    link: "https://www.mercedes-benz.com.tr/",
  },
];

const EDUCATION = [
  {
    startDate: "2015",
    endDate: "2021",
    location: "istanbulTR",
    university: "tdu",
    field: "mechatronicsEngineering",
    logo: "/logos/tdu.png",
    link: "http://www.tau.edu.tr/en",
  },
];
const constants = {
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  EDUCATION,
};
export default constants;
