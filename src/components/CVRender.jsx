export default function CVRender({ personalInfo, educationList, deleteEducation }) {
  return (
    <div className="CV-render">
      <h2>Your info</h2>
      <p>{personalInfo.fullName}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phoneNumber}</p>
      <p>{personalInfo.location}</p>
      <h2>Education</h2>
      <ul>
      {educationList.map((education) => (
        
          <div key={education.id}>
            <h3>{education.school}</h3>
            <h4>{education.title}</h4>
            <button onClick={() => deleteEducation(education.id)}>Delete</button>
          </div>
      ))}
      </ul>
    </div>
  );
}
