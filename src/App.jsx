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

  console.log(educationList)

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const addToList = (newListItem) => setEducationList(prevList => [...prevList, newListItem])

  return (
    <>
      <Sidebar
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        addToList={addToList}
      />
      <CVRender personalInfo={personalInfo} educationList={educationList} />
    </>
  );
}

export default App;
