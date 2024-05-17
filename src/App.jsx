import { useState } from "react";
import "./styles/App.css";
import Section from "./components/Section";
import PersonalInfoForm from "./components/PersonalInfo";
import EducationForm from "./components/Education";
import WorkForm from "./components/WorkExperience";
import CVRender from "./components/CVRender";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [educationList, setEducationList] = useState([]);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <div className="form-wrap">
        <Section title="Personal Info">
          <PersonalInfoForm
            personalInfo={personalInfo}
            handleChange={handlePersonalInfoChange}
          />
        </Section>
        <Section title="Education">
          <EducationForm educationList={educationList} />
        </Section>
        <Section title="Work Experience">
          <WorkForm />
        </Section>
      </div>
      <CVRender personalInfo={personalInfo} educationList={educationList} />
    </>
  );
}

export default App;
