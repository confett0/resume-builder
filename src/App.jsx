import { useState } from "react"
import "./styles/App.css"
import Sidebar from "./components/Sidebar"
import CVRender from "./components/CVRender"

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
      <Sidebar
        personalInfo={personalInfo}
        handleChange={handlePersonalInfoChange}
      />
      <CVRender personalInfo={personalInfo} educationList={educationList} />
    </>
  );
}

export default App;
