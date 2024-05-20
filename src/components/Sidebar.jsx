import { useState } from "react";
import Section from "./Section";
import PersonalInfoForm from "./PersonalInfo";
import EducationForm from "./Education";
import ListBlock from "./ListBlock";
import WorkForm from "./WorkExperience";

export default function Sidebar({
  personalInfo,
  educationList,
  handlePersonalInfoChange,
  addEducation,
  deleteEducation,
  editEducation,
  workList,
  addWorkExperience,
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
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [isEditingEducation, setIsEditingEducation] = useState(false);

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
    const itemToEdit = educationList.find((item) => (item.id = id));
    setEducationFormData(itemToEdit);
    setIsEditingEducation(true);
  };

  const educationBlockElements = educationList.map((listItem) => (
    <ListBlock
      key={listItem.id}
      listItem={listItem}
      deleteEducation={deleteEducation}
      editEducation={fillOutEditEducationForm}
    />
  ));

  // Work experience

  const handleWorkFormChange = (e) => {
    const { name, value } = e.target;
    setWorkFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWorkFormSubmit = (e) => {
    e.preventDefault();
    /* if (isEditingEducation) {
      editEducation(educationFormData.id, educationFormData)
      setIsEditingEducation(false)
    } else { */
    const newId = Math.floor(Math.random() * 10000);
    addWorkExperience({ ...workFormData, id: newId });
    // }
    setWorkFormData({
      id: "",
      company: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="sidebar">
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
        {educationBlockElements}
      </Section>
      <Section title="Work experience">
        <WorkForm
          formData={workFormData}
          handleChange={handleWorkFormChange}
          handleSubmit={handleWorkFormSubmit}
        />
      </Section>
    </div>
  );
}
