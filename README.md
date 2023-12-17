# SQL To-Do List App

## Introduction
Welcome to the SQL To-Do List App! This simple yet efficient app is designed to enhance productivity by helping you manage your tasks effortlessly. Add your tasks, mark them complete, and watch your productivity soar!

## Features
- **Add Tasks**: Input your tasks into the designated field and add them to your to-do list.
- **Mark as Complete**: Check off tasks as you finish them to track your progress.
- **Delete Tasks**: Remove old or completed tasks with a simple click.

## Installation
To get started, follow these steps:
1. Clone this repository to your local machine.
2. In your terminal, run `npm i` to install dependencies.
3. Run `npm run start` to start the app.
4. Ensure access to a PostgreSQL database hosted on port 5432 named `weekend_to-do-app`.
5. Use the following SQL commands to create the necessary table:

```sql
CREATE TABLE "todos" (
  "id" SERIAL PRIMARY KEY,
  "text" TEXT,
  "isComplete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todos" ("text") VALUES 
('Build a CRUD app'),
('Make my app look nice');
```

6. Open your browser and go to `localhost:5001`.

## Usage
- Enter your tasks in the field at the top of the page and press enter or click the 'Add Task' button.
- To mark a task as complete, simply click 'Done'.
- Delete unwanted tasks from the list by clicking the 'x' button.

## Technologies Used
This project was developed using:
- JavaScript
- Express.js
- pg (PostgreSQL client for Node.js)
- PostgreSQL
- Postico (PostgreSQL client for macOS)
