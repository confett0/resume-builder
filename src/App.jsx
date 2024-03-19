import { useState } from "react";
import "./styles/App.css";
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
      <PersonalInfoForm personalInfo={personalInfo} handleChange={handleChange} />
      <CVRender personalInfo={personalInfo} />
    </>
  )
}

export default App
