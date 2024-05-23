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
      <div><h4>{title}</h4>
      <p>{organization}</p></div>
      <button className="experience-button delete-button" onClick={() => del(id)}><img src="/delete.png" /></button>
      {edit && <button className="experience-button" onClick={() => edit(id)}><img src="/edit.png" /></button>}
    </div>
  );
}
