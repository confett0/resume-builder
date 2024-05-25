import { useState, useRef } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import CVRender from "./components/CVRender";
import sampleData from "./sampleData";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalData);

  const [educationList, setEducationList] = useState(sampleData.education);
  const [workExperienceList, setWorkExperienceList] = useState(
    sampleData.workExperience
  );
  const [skills, setSkills] = useState(sampleData.skills);

  const printRef = useRef();

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
    setWorkExperienceList((prevList) =>
      prevList.filter((item) => item.id !== id)
    );

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

  const addSkill = (newSkill) =>
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  const deleteSkill = (id) =>
    setSkills((prevSkills) => prevSkills.filter((skill) => skill !== id));

  // Download CV as PDF

  const handleDownloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

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
        handleDownload={handleDownloadPDF}
      />
      <CVRender
        personalInfo={personalInfo}
        educationList={educationList}
        workExperienceList={workExperienceList}
        skills={skills}
        printRef={printRef}
      />
    </>
  );
}

export default App;
