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

  console.log(educationList);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <>
      <Sidebar
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
      />
      <CVRender
        personalInfo={personalInfo}
        educationList={educationList}
        deleteEducation={deleteEducation}
      />
    </>
  );
}

export default App;
