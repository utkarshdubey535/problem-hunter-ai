import { useState, useEffect } from "react";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filterPriority, setFilterPriority] = useState("All");
  const [editIndex, setEditIndex] = useState(null);
  const [category, setCategory] = useState("Bug");
  const [image, setImage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }
};

  const [problems, setProblems] = useState(() => {
    const savedProblems = localStorage.getItem("problems");
    return savedProblems ? JSON.parse(savedProblems) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProblem = {
      title,
      description,
      status: "Pending",
      priority,
      category,
      image,
    };

    if (editIndex !== null) {
  const updatedProblems = [...problems];
  updatedProblems[editIndex] = {
    ...updatedProblems[editIndex],
    title,
    description,
    priority,
  };

  setProblems(updatedProblems);
  setEditIndex(null);
} else {
  setProblems([...problems, newProblem]);
} 

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Bug");
    setImage("");
  };

  const deleteProblem = (indexToDelete) => {
    const updatedProblems = problems.filter(
      (_, index) => index !== indexToDelete
    );

    setProblems(updatedProblems);
  };

  const markResolved = (indexToUpdate) => {
    const updatedProblems = [...problems];

    updatedProblems[indexToUpdate].status = "Resolved";

    setProblems(updatedProblems);
  };


  const totalProblems = problems.length;

  const pendingProblems = problems.filter(
    (problem) => problem.status === "Pending"
  ).length;

  const resolvedProblems = problems.filter(
    (problem) => problem.status === "Resolved"
  ).length;

const editProblem = (index) => {
  setTitle(problems[index].title);
  setDescription(problems[index].description);
  setPriority(problems[index].priority);
  setCategory(problems[index].category);
  setImage(problems[index].image);
  setEditIndex(index);
}; 

  useEffect(() => {
    localStorage.setItem("problems", JSON.stringify(problems));
  }, [problems]);

  return (
  <div
  className="page"
  style={{
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
  }}
>
      <h1>Report a Problem</h1>
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="status-btn"
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Problem Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Problem Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
        ></textarea>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="Bug">Bug</option>
  <option value="UI">UI</option>
  <option value="Backend">Backend</option>
  <option value="Feature Request">Feature Request</option>
</select>

        <input
  type="file"
  accept="image/*"
  onChange={handleImageChange}
/>
        <button type="submit">Submit Problem</button>
      </form>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total</h3>
          <p>{totalProblems}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pendingProblems}</p>
        </div>

        <div className="stat-card">
          <h3>Resolved</h3>
          <p>{resolvedProblems}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Problem..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="newest">Newest First</option>
  <option value="high">High Priority First</option>
  <option value="low">Low Priority First</option>
</select>

      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
      >
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <h2>Submitted Problems</h2>

      {problems
        .filter(
          (problem) =>
            problem.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) &&
            (filterPriority === "All" ||
              problem.priority === filterPriority)
        )
        .map((problem, index) => (
          <div key={index} className="problem-card">
            <h3>{problem.title}</h3>

            <p>{problem.description}</p>
            {problem.image && (
  <img
    src={problem.image}
    alt="Problem"
    className="problem-image"
  />
)}

            <p>
              Status:
              {problem.status === "Pending"
                ? " ⏳ Pending"
                : " ✅ Resolved"}
            </p>

            <p>Priority: {problem.priority}</p>
            <p>Category: {problem.category}</p>

            <button
  onClick={() => editProblem(index)}
  className="status-btn"
>
  Edit
</button>

<button
  onClick={() => markResolved(index)}
  className="status-btn"
>
  Mark Resolved
</button>

<button
  onClick={() => deleteProblem(index)}
  className="delete-btn"
>
  Delete
</button>

            
          </div>
        ))}
    </div>
  );
}

export default Dashboard;