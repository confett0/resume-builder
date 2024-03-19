export default function CVRender({ personalInfo }) {
    return (
        <>
        <h2>Your info</h2>
      <p>{personalInfo.firstName}</p>
      <p>{personalInfo.lastName}</p>
      <p>{personalInfo.email}</p>
        </>
    )
}