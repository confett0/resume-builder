import { useState } from "react";
import "./styles/App.css";
import Section from "./components/Section";
import PersonalInfoForm from "./components/PersonalInfo";
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
      <CVRender personalInfo={personalInfo} />
    </>
  );
}

export default App;
