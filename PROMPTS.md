# PROMPTS.md

## AI Feature: Problem Analyzer

### Prompt 1
Input:
"There are many potholes on the main road near the market causing accidents."

Output:
- Category: Infrastructure / Safety
- Severity: High
- Suggested Solution: Repair potholes immediately and schedule regular maintenance.
- Responsible Department: Public Works Department.

---

### Prompt 2
Input:
"Garbage is overflowing near the public park and causing bad smell."

Output:
- Category: Sanitation
- Severity: Medium
- Suggested Solution: Clean the area and increase garbage collection frequency.
- Responsible Department: Municipal Corporation.

---

### Prompt 3
Input:
"Street lights are not working in the residential area."

Output:
- Category: Electrical Infrastructure
- Severity: Medium
- Suggested Solution: Repair or replace faulty street lights.
- Responsible Department: Electricity Department.

---

## Best Prompt

The first prompt worked best because it provided clear details about the problem, location, and impact. This allowed the AI to classify the issue accurately, estimate severity, suggest a practical solution, and identify the responsible department.

---

## System Prompt

You are an AI assistant for Problem Hunter AI.

Analyze the following community problem.

Provide:
1. Problem Category
2. Severity (Low/Medium/High)
3. Suggested Solution
4. Estimated Department Responsible

Return the answer in simple English.
