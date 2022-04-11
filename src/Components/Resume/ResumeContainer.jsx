import React from "react";
import { withTranslation } from "react-i18next";

// import ScrollIndicator from "../Common/ScrollIndicator/ScrollIndicator";

import Info from "./Components/Info/Info";
// import SectionContainer from "./Components/SectionContainer/SectionContainer";

import "./ResumeContainer.css";

import constants from "./constants";
import Experience from "./Components/Experience/Experience";

import { MdOutlineWork, MdSchool, MdLanguage } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

import Tabs from "../Common/Tabs/Tabs";
import Languages from "./Components/LanguagesComponent/Languages";

const ResumeContainer = ({ t }) => {
  // const [scrolled, setScrolled] = useState(0);
  // const handleScroll = (event) => {
  //   const { scrollHeight, scrollTop, clientHeight } = event.target;
  //   const scroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
  //   // console.log(
  //   //   "sh: " + scrollHeight + " st: " + scrollTop + " ch: " + clientHeight
  //   // );
  //   setScrolled(scroll);
  //   // setScrolled(`${scroll}%`);
  // };
  return (
    <div className="resume-container">
      {/* ALL IN ONE VIEW */}
      {/* <div
        style={{
          width: "40%",
          paddingRight: "4%",
          borderRight: "solid 1px #f2f2f2",
        }}
      >
        <div style={{ padding: "5%" }}>
          <Info hideImage={true} />
        </div>

        <SectionContainer
          title="education"
          icon={<MdSchool />}
          style={{ paddingTop: "0" }}
        >
          {constants.EDUCATION.map((education) => (
            <Experience
              startDate={education.startDate}
              endDate={education.endDate}
              location={education.location}
              title={education.university}
              subTitle={education.field}
              link={education.link}
              logo={education.logo}
            />
          ))}
        </SectionContainer>

        <SectionContainer
          title="languages"
          icon={<MdLanguage />}
          style={{ paddingTop: "0" }}
        >
          <Languages />
        </SectionContainer>
      </div>
      <div style={{ width: "55%" }}>
        {" "}
        <SectionContainer
          title="workExperience"
          icon={<MdOutlineWork />}
          sectionContentStyle={{ height: "80vh", overflowY: "scroll" }}
        >
          {constants.WORK_EXPERIENCE.map((weData) => (
            <Experience
              startDate={weData.startDate}
              endDate={weData.endDate}
              location={weData.location}
              title={weData.companyName}
              subTitle={weData.jobTitle}
              logo={weData.logo}
              link={weData.link}
              desc={weData.desc}
              bullets={weData.bullets}
              additionalIcons={weData.additionalIcons}
            />
          ))}
        </SectionContainer>
      </div> */}

      {/* TAB VİEW */}

      <a
        className="resume-download-pdf-link-container"
        href="/Assets/can+dogan+cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="resume-download-pdf"> {t("downloadPDF")} </p>{" "}
        <AiOutlineDownload className="resume-download-pdf-icon" />
      </a>

      <Info />
      <Tabs
        tabs={[
          {
            title: "workExperience",
            icon: <MdOutlineWork />,
            Content: constants.WORK_EXPERIENCE.map((weData) => (
              <Experience
                startDate={weData.startDate}
                endDate={weData.endDate}
                location={weData.location}
                title={weData.companyName}
                subTitle={weData.jobTitle}
                logo={weData.logo}
                link={weData.link}
                desc={weData.desc}
                bullets={weData.bullets}
                additionalIcons={weData.additionalIcons}
              />
            )),
          },
          {
            title: "education",
            icon: <MdSchool />,
            Content: constants.EDUCATION.map((education) => (
              <Experience
                startDate={education.startDate}
                endDate={education.endDate}
                location={education.location}
                title={education.university}
                subTitle={education.field}
                link={education.link}
                logo={education.logo}
              />
            )),
          },
          {
            title: "languages",
            icon: <MdLanguage />,
            Content: <Languages />,
          },
        ]}
      />

      {/* SECTION FLOW VIEW */}
      {/* <ScrollIndicator />
      <Info />
      <SectionContainer title="workExperience" icon={<MdOutlineWork />}>
        {constants.WORK_EXPERIENCE.map((weData) => (
          <Experience
            startDate={weData.startDate}
            endDate={weData.endDate}
            location={weData.location}
            title={weData.companyName}
            subTitle={weData.jobTitle}
            logo={weData.logo}
            link={weData.link}
            desc={weData.desc}
            bullets={weData.bullets}
            additionalIcons={weData.additionalIcons}
          />
        ))}
      </SectionContainer>
      <SectionContainer title="education" icon={<MdSchool />}>
        {constants.EDUCATION.map((education) => (
          <Experience
            startDate={education.startDate}
            endDate={education.endDate}
            location={education.location}
            title={education.university}
            subTitle={education.field}
            link={education.link}
            logo={education.logo}
          />
        ))}
      </SectionContainer> */}
    </div>
  );
};

export default withTranslation()(ResumeContainer);
