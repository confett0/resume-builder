import { useState } from "react";
import Section from "./Section";
import PersonalInfoForm from "./PersonalInfo";
import EducationForm from "./Education";
import ExperienceTabList from "./ExperienceTab";
import WorkForm from "./WorkExperience";
import SkillForm from "./Skills";

export default function Sidebar({
  personalInfo,
  educationList,
  handlePersonalInfoChange,
  addEducation,
  deleteEducation,
  editEducation,
  workList,
  addWorkExperience,
  deleteWorkExperience,
  editWorkExperience,
  skills,
  addSkill,
  deleteSkill,
  handleDownload,
  loadSampleCV,
  clearData,
}) {
  const [educationFormData, setEducationFormData] = useState({
    id: "",
    school: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [workFormData, setWorkFormData] = useState({
    id: "",
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [skillFormData, setSkillFormData] = useState("");

  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingWork, setIsEditingWork] = useState(false);

  // Education

  const handleEducationFormChange = (e) => {
    const { name, value } = e.target;
    setEducationFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEducationFormSubmit = (e) => {
    e.preventDefault();
    if (isEditingEducation) {
      editEducation(educationFormData.id, educationFormData);
      setIsEditingEducation(false);
    } else {
      const newId = Math.floor(Math.random() * 10000);
      addEducation({ ...educationFormData, id: newId });
    }
    setEducationFormData({
      id: "",
      school: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const fillOutEditEducationForm = (id) => {
    const itemToEdit = educationList.find((item) => item.id === id);
    setEducationFormData(itemToEdit);
    setIsEditingEducation(true);
  };

  // Work experience

  const handleWorkFormChange = (e) => {
    const { name, value } = e.target;
    setWorkFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWorkFormSubmit = (e) => {
    e.preventDefault();
    if (isEditingWork) {
      editWorkExperience(workFormData.id, workFormData);
      setIsEditingWork(false);
    } else {
      const newId = Math.floor(Math.random() * 10000);
      addWorkExperience({ ...workFormData, id: newId });
    }
    setWorkFormData({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const fillOutEditWorkForm = (id) => {
    const itemToEdit = workList.find((item) => item.id === id);
    setWorkFormData(itemToEdit);
    setIsEditingWork(true);
  };

  // Skills

  const handleSkillFormChange = (e) => setSkillFormData(e.target.value);

  const handleSkillFormSubmit = (e, skill) => {
    e.preventDefault();
    addSkill(skill);
    setSkillFormData("");
  };

  return (
    <div className="sidebar">
      <h1 className="logo">
        <span>resum</span>easy
      </h1>
      <p className="instructions">
        Create your CV by filling out the forms below! Your CV will be
        dynamically updated in the preview.
      </p>
      <Section title="Personal Info">
        <PersonalInfoForm
          personalInfo={personalInfo}
          handleChange={handlePersonalInfoChange}
        />
      </Section>
      <Section title="Education">
        <EducationForm
          formData={educationFormData}
          handleChange={handleEducationFormChange}
          handleSubmit={handleEducationFormSubmit}
          isEditing={isEditingEducation}
        />
        <ExperienceTabList
          experienceList={educationList}
          deleteExperience={deleteEducation}
          editExperience={fillOutEditEducationForm}
        />
      </Section>
      <Section title="Work experience">
        <WorkForm
          formData={workFormData}
          handleChange={handleWorkFormChange}
          handleSubmit={handleWorkFormSubmit}
          isEditing={isEditingWork}
        />
        <ExperienceTabList
          experienceList={workList}
          deleteExperience={deleteWorkExperience}
          editExperience={fillOutEditWorkForm}
        />
      </Section>
      <Section title="Skills">
        <SkillForm
          skills={skills}
          formData={skillFormData}
          handleChange={handleSkillFormChange}
          handleSubmit={handleSkillFormSubmit}
        />
        <ExperienceTabList
          experienceList={skills}
          deleteExperience={deleteSkill}
        />
      </Section>
      <button type="button" className="utility-button" onClick={handleDownload}>
        <img src="./printer.png" />
        Download as PDF
      </button>
      <button type="button" className="utility-button" onClick={loadSampleCV}>
        <img src="./sync.png" />
        Load sample CV
      </button>
      <button type="button" className="utility-button" onClick={clearData}>
        <img src="./reset.png" />
        Delete data
      </button>
    </div>
  );
}
