import { useState } from "react";

export default function PersonalInfoForm() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <label>
        First Name: 
        <input
          value={personalInfo.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name: 
        <input
          value={personalInfo.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </label>
      <label>
        Email: 
        <input
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
    </>
  );
}
