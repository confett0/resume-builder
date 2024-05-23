export default function SkillForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <input
        value={formData}
        name="skill"
        onChange={handleChange}
        placeholder="Enter skill"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
