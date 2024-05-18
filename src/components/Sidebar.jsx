import { useState } from "react"
import Section from "./Section"
import PersonalInfoForm from "./PersonalInfo"
import EducationForm from "./Education"
// import WorkForm from "./WorkExperience"

export default function Sidebar({ personalInfo, handlePersonalInfoChange, addEducation, deleteEducation }) {

    const [educationFormData, setEducationFormData] = useState({
        id: "",
        school: "",
        title: "",
        startDate: "",
        endDate: "",
        location: ""
      });

      const handleEducationFormChange = (e) => {
        const { name, value } = e.target;
        setEducationFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      
      const handleEducationFormSubmit = (e) => {
        e.preventDefault()
        const newId = Math.floor(Math.random() * 1000)
        addEducation({...educationFormData, id: newId})
        setEducationFormData({ // research better ways to reset state
            id: "",
            school: "",
            title: "",
            startDate: "",
            endDate: "",
            location: ""
          })
      }

    return (
        <div className="sidebar">
        <Section title="Personal Info">
          <PersonalInfoForm
            personalInfo={personalInfo}
            handleChange={handlePersonalInfoChange}
          />
        </Section>
        <Section title="Education">
          <EducationForm formData={educationFormData} handleChange={handleEducationFormChange} handleSubmit={handleEducationFormSubmit} />
        </Section>
      </div>
    )
}