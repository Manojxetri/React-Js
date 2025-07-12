export default function ToDoList({ list, deleteItem ,updateItem}) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteItem(index)}>Delete</button>
          <button onClick={() => updateItem(index)}>Update</button>
        </li>
      ))}
    </ul>
  );
}
