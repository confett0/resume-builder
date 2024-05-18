export default function ListBlock({listItem, deleteEducation }) {
    return (
        <div className="list-block">
            <h3>{listItem.title}</h3>
            <p>{listItem.school}</p>
            <button onClick={() => deleteEducation(listItem.id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}