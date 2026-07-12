const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });n
/*
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    family: 4
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
  });
  */

app.use(cors());
app.use(express.json());
let users = [];

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

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many login attempts. Please try again later."
  }
});
// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Problem Hunter AI Backend Running"
  });
});

app.post(
  "/api/auth/register",
  authLimiter,
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: users.length + 1,
      email,
      password: hashedPassword,
    };

    users.push(user);

    res.status(201).json({
      message: "User registered successfully",
    });
  }
);


app.post("/api/auth/login", authLimiter, async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  );

  res.json({
    message: "Login successful",
    token
  });
});
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied. No token provided."
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = verified;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid Token"
    });
  }
}
app.get(
  "/api/auth/profile",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Protected Route Accessed Successfully",
      user: req.user
    });
  }
);
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