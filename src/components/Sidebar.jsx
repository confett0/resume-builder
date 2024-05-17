import { useState } from "react"
import Section from "./Section"
import PersonalInfoForm from "./PersonalInfo"
import EducationForm from "./Education"
import WorkForm from "./WorkExperience"

export default function Sidebar({ personalInfo, handleChange}) {

    const [educationFormData, setEducationFormData] = useState({})

    return (
        <div className="sidebar">
        <Section title="Personal Info">
          <PersonalInfoForm
            personalInfo={personalInfo}
            handleChange={handleChange}
          />
        </Section>
        <Section title="Education">
          <EducationForm />
        </Section>
      </div>
    )
}