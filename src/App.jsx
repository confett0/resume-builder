import { useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import CVRender from "./components/CVRender";
import sampleData from "./sampleData";

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalData);

  const [educationList, setEducationList] = useState(sampleData.education);
  const [workExperienceList, setWorkExperienceList] = useState(sampleData.workExperience);
  const [skills, setSkills] = useState(sampleData.skills);

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

  const addWorkExperience = (newWorkExperience) =>
    setWorkExperienceList((prevList) => [...prevList, newWorkExperience]);

  const deleteWorkExperience = (id) =>
    setWorkExperienceList((prevList) => prevList.filter((item) => item.id !== id));

  const editWorkExperience = (id, newWorkObj) => {
    const newWorkList = workExperienceList.map((item) => {
      if (item.id === id) {
        return {
          ...newWorkObj,
          id: id,
        };
      } else {
        return item;
      }
    });
    setWorkExperienceList(newWorkList);
  };

  // Skills

  const addSkill = (newSkill) => setSkills(prevSkills => [...prevSkills, newSkill])
  const deleteSkill = (id) => setSkills(prevSkills => prevSkills.filter(skill => skill !== id))

  return (
    <>
      <Sidebar
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        educationList={educationList}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        editEducation={editEducation}
        workList={workExperienceList}
        addWorkExperience={addWorkExperience}
        deleteWorkExperience={deleteWorkExperience}
        editWorkExperience={editWorkExperience}
        skills={skills}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
      />
      <CVRender personalInfo={personalInfo} educationList={educationList} />
    </>
  );
}

export default App;
