export default function WorkForm({
  formData,
  handleChange,
  handleSubmit,
  isEditing,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            value={formData.company}
            name="company"
            onChange={handleChange}
            placeholder="Enter Company Name"
          />
        </label>
        <label>
          Position Title:
          <input
            value={formData.title}
            name="title"
            onChange={handleChange}
            placeholder="Enter Position Title"
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
        <label>
          Description:
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
            placeholder="Enter job description"
          />
        </label>
        <button type="submit">{isEditing ? "Save" : "Submit"}</button>
      </form>
    </>
  );
}
