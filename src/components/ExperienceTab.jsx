export default function ExperienceTabList({
  experienceList,
  deleteExperience,
  editExperience,
}) {
  const experienceTabElements = experienceList.map((experience) => (
    <ExperienceTab
      key={experience.id || experience}
      id={experience.id || experience}
      title={experience.title || experience}
      organization={experience.school || experience.company}
      del={deleteExperience}
      edit={editExperience}
    />
  ));
  return <>{experienceTabElements}</>;
}

function ExperienceTab({ title, organization, id, del, edit }) {
  return (
    <div className="experience-tab">
      <h4>{title}</h4>
      <p>{organization}</p>
      <button onClick={() => del(id)}>Delete</button>
      {edit && <button onClick={() => edit(id)}>Edit</button>}
    </div>
  );
}
