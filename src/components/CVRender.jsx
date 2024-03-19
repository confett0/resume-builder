export default function CVRender({ personalInfo }) {
    return (
        <>
        <h2>Your info</h2>
      <p>{personalInfo.fullName}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phoneNumber}</p>
      <p>{personalInfo.location}</p>
        </>
    )
}