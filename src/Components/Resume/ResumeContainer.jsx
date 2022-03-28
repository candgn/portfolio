import React from "react";
import { withTranslation } from "react-i18next";

import ScrollIndicator from "../Common/ScrollIndicator/ScrollIndicator";

import Info from "./Components/Info/Info";
// import SectionContainer from "./Components/SectionContainer/SectionContainer";

import "./ResumeContainer.css";

import constants from "./constants";
import Experience from "./Components/Experience/Experience";

import { MdOutlineWork, MdSchool, MdLanguage } from "react-icons/md";

import Tabs from "../Common/Tabs/Tabs";

const ResumeContainer = ({ t }) => {
  return (
    <div className="resume-container">
      <ScrollIndicator />
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
        ]}
      />
      {/* <SectionContainer title="workExperience" icon={<MdOutlineWork />}>
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
