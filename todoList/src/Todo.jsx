import { useState } from "react";

const Lists = [
  { id: 1, task: "learn react", completed: true },
  { id: 2, task: "write blog post", completed: false },
  { id: 3, task: "read clean code", completed: false },
  { id: 4, task: "walk the dog", completed: true }
];

export default function Todo() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheck = () => {
    setHideCompleted((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredList = Lists.filter((item) => {
    const matchesSearch = item.task.toLowerCase().includes(searchTerm);
    const isCompletedVisible = hideCompleted ? !item.completed : true;
    return matchesSearch && isCompletedVisible;
  });

  const thingsList = filteredList.map((item) => (
    <li key={item.id}>
      {item.task} {item.completed ? "✅" : "."}
    </li>
  ));

  return (
    <div className="container">
      <h1>Todo Filter</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearch}
        value={searchTerm}
      />
      <br />
      <input
        type="checkbox"
        checked={hideCompleted}
        onChange={handleCheck}
        id="hideCompletedCheckbox"
      />
      <label htmlFor="hideCompletedCheckbox">Hide Completed</label>
      <ul>{thingsList}</ul>
    </div>
  );
}
 