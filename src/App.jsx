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

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Section title="Personal Info">
        <PersonalInfoForm
          personalInfo={personalInfo}
          handleChange={handleChange}
        />
      </Section>
      <EducationForm />
      <WorkForm />
      <CVRender personalInfo={personalInfo} />
    </>
  );
}

export default App;
