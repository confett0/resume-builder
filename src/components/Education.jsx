export default function EducationForm({ formData, handleChange, handleSubmit, isEditing }) {

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label>
          School:
          <input
            value={formData.school}
            name="school"
            onChange={handleChange}
            placeholder="Enter school / university"
          />
        </label>
        <label>
          Title:
          <input
            value={formData.title}
            name="title"
            onChange={handleChange}
            placeholder="Enter degree / field of study"
          />
        </label>
        <label>
          Start Date:
          <input
            value={formData.startDate}
            name="startDate"
            onChange={handleChange}
            placeholder="Enter Start Date"
          />
        </label>
        <label>
          End Date:
          <input
            value={formData.endDate}
            name="endDate"
            onChange={handleChange}
            placeholder="Enter End Date"
          />
        </label>
        <label>
          Location:
          <input
            value={formData.location}
            name="location"
            onChange={handleChange}
            placeholder="Enter Location"
          />
        </label>
        <button type="submit">{isEditing ? "Save" : "Submit"}</button>
      </form>
    </>
  );
}
