export default function EducationForm({ educationList, handleSubmit }){
    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>
        School: 
        <input
          value={educationList.school}
          name="school"
          // onChange={}
          placeholder="Enter school / university"
        />
      </label>
      <label>
        Title: 
        <input
          value={educationList.title}
          name="title"
          // onChange={}
          placeholder="Enter degree / field of study"
        
        />
      </label>
      <label>
        Start Date: 
        <input
          // value={}
          name="startDate"
          // onChange={}
          placeholder="Enter Start Date"
        />
      </label>
      <label>
        End Date: 
        <input
          // value={}
          name="endDate"
          // onChange={}
          placeholder="Enter End Date"
        />
      </label>
      <label>
        Location: 
        <input
          // value={}
          name="location"
          // onChange={}
          placeholder="Enter Location"
        />
      </label>
      <button type="submit" >Submit</button>
      </form>
        </>

    )
}