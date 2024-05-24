export default function CVRender({ personalInfo, educationList, workExperienceList }) {
  return (
    <div className="CV-render">
      <div className="CV-header">
        <h3>{personalInfo.fullName}</h3>
        <div className="contact-wrap">
          {personalInfo.email ? (
            <div className="contact">
              <img src="/mail.png" />
              <p>{personalInfo.email}</p>
            </div>
          ) : null}
          {personalInfo.phoneNumber ? (
            <div className="contact">
              <img src="/phone.png" />
              <p>{personalInfo.phoneNumber}</p>
            </div>
          ) : null}
          {personalInfo.location ? (
            <div className="contact">
              <img src="/pin.png" />
              <p>{personalInfo.location}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="CV-body">
        {educationList.length > 0 && <h2>Education</h2>}
        <ul>
          {educationList.map((education) => (
            <div key={education.id} className="CV-item">
              <div>
                <p>{education.startDate} - {education.endDate}</p>
                <p>{education.location}</p>
              </div>
              <div>
                <h4>{education.school}</h4>
                <p>{education.title}</p>
              </div>
            </div>
          ))}
        </ul>
        {workExperienceList.length > 0 && <h2>Professional Experience</h2>}
        <ul>
          {workExperienceList.map((job) => (
            <div key={job.id} className="CV-item">
              <div>
                <p>{job.startDate} - {job.endDate}</p>
                <p>{job.location}</p>
              </div>
              <div>
                <h4>{job.company}</h4>
                <p>{job.title}</p>
                <p className="job-description">{job.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
