import { useState } from "react"

export default function SkillForm({handleSubmit}) {
    const [skillFormData, setSkillFormData] = useState("")
    const handleChange = (e) => setSkillFormData(e.target.value)

    return (
        <form onSubmit={(e) => handleSubmit(e, skillFormData)}>
        <input value={skillFormData}
        name="skill"
        onChange={handleChange}
        placeholder="Enter skill"/>
        <button type="submit">Enter</button>
        </form>
    )
}