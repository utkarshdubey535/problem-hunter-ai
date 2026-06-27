const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// In-memory data
let problems = [
  {
    id: 1,
    title: "Road Damage",
    description: "Large potholes on main road",
    priority: "High",
    category: "Infrastructure"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Problem Hunter AI Backend Running"
  });
});

// GET All Problems
app.get("/api/problems", (req, res) => {
  res.status(200).json(problems);
});

// SEARCH Problem
app.get("/api/problems/search/:keyword", (req, res) => {
  const keyword = req.params.keyword.toLowerCase();

  const result = problems.filter((p) => {
    const title = p.title ? p.title.toLowerCase() : "";
    const description = p.description
      ? p.description.toLowerCase()
      : "";

    return (
      title.includes(keyword) ||
      description.includes(keyword)
    );
  });

  res.status(200).json(result);
});

// GET Single Problem
app.get("/api/problems/:id", (req, res) => {
  const problem = problems.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!problem) {
    return res.status(404).json({
      message: "Problem not found"
    });
  }

  res.status(200).json(problem);
});

// POST Create Problem
app.post("/api/problems", (req, res) => {
  const newProblem = {
    id: problems.length + 1,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    category: req.body.category
  };

  problems.push(newProblem);

  res.status(201).json(newProblem);
});

// PUT Update Problem
app.put("/api/problems/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const problem = problems.find(
    (p) => p.id === id
  );

  if (!problem) {
    return res.status(404).json({
      message: "Problem not found"
    });
  }

  problem.title =
    req.body.title || problem.title;

  problem.description =
    req.body.description ||
    problem.description;

  problem.priority =
    req.body.priority ||
    problem.priority;

  problem.category =
    req.body.category ||
    problem.category;

  res.status(200).json(problem);
});

// DELETE Problem
app.delete("/api/problems/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = problems.findIndex(
    (p) => p.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Problem not found"
    });
  }

  problems.splice(index, 1);

  res.status(204).send();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});