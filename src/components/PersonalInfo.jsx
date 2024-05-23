export default function PersonalInfoForm({ personalInfo, handleChange }) {
  return (
      <form>
        <label>
          Full Name:
          <input
            value={personalInfo.fullName}
            name="fullName"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={personalInfo.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            value={personalInfo.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            value={personalInfo.location}
            name="location"
            onChange={handleChange}
          />
        </label>
      </form>
  );
}
