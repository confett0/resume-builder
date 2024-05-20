import { useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import CVRender from "./components/CVRender";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [educationList, setEducationList] = useState([]);

  // Personal Info

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Education

  const addEducation = (newListItem) =>
    setEducationList((prevList) => [...prevList, newListItem]);

  const deleteEducation = (id) =>
    setEducationList((prevList) => prevList.filter((item) => item.id !== id));

  const editEducation = (id, newEducationObj) => {
    const newEducationList = educationList.map((item) => {
      if (item.id === id) {
        return {
          ...newEducationObj,
          id: id,
        };
      } else {
        return item;
      }
    });
    setEducationList(newEducationList);
  };

  // Work

  return (
    <>
      <Sidebar
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        educationList={educationList}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        editEducation={editEducation}
      />
      <CVRender
        personalInfo={personalInfo}
        educationList={educationList}
      />
    </>
  );
}

export default App;
