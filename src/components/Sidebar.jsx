import { useState } from "react"
import Section from "./Section"
import PersonalInfoForm from "./PersonalInfo"
import EducationForm from "./Education"
import WorkForm from "./WorkExperience"

export default function Sidebar({ personalInfo, handlePersonalInfoChange}) {

    const [educationFormData, setEducationFormData] = useState({
        id: "",
        school: "",
        title: "",
        startDate: "",
        endDate: "",
        location: ""
      });
      const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEducationFormData((prevData) => ({ ...prevData, [name]: value }));
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
          <EducationForm formData={educationFormData} handleChange={handleEducationChange} />
        </Section>
      </div>
    )
}