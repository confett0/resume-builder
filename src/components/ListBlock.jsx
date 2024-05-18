export default function ListBlock({listItem, deleteEducation, editEducation }) {
    return (
        <div className="list-block">
            <h3>{listItem.title}</h3>
            <p>{listItem.school}</p>
            <button onClick={() => deleteEducation(listItem.id)}>Delete</button>
            <button onClick={() => editEducation(listItem.id)}>Edit</button>
        </div>
    )
}