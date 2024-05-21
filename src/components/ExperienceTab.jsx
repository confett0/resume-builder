export default function ExperienceTabList({
  experienceList,
  deleteExperience,
  editExperience,
}) {
  const experienceTabElements = experienceList.map((experience) => (

    <ExperienceTab
      key={experience.id}
      id={experience.id}
      title={experience.title}
      // location={}
      del={deleteExperience}
      edit={editExperience}
    />
  ));
  return <>{experienceTabElements}</>;
}

function ExperienceTab({ title, location, id, del, edit }) {
  return (
    <div className="experience-tab">
      <h3>{title}</h3>

      <button onClick={() => del(id)}>Delete</button>
      <button onClick={() => edit(id)}>Edit</button>
    </div>
  );
}