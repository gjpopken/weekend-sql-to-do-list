# To Do App To Do List
CRUD
Create,
Read,
Update,
Delete

## Create
Taking what is in our input fields, putting them into an object, and sending them to the server. Render is called.

## Read
A function to render() the items to the DOM. We are GETting from the server. This will get updated every time we add an item, check when it's done, or delete an item

## Update
There is a button that will toggle if a task is complete or not. This is a PUT request to change the value in the DB

## Delete
A button that will cause the item to delete from the table and from the DB


## Tasks
[ ] Client: index.html file with a field to input text, which is the todo item
[ ] Client: create a render function that will GET the tasks from the database (organzized by if they are complete or not)
    The script must render a delete button, and a button to either mark as complete or unmark as uncomplete
[ ] Server: GET endpoint that queries the DB for a SELECT * FROM "" ORDER BY "isComplete"
[ ] Client: a function to handle the click to add a new task to the DB. This is a POST request to send an object to the DB
[ ] Server: POST route that queries to insert the new task to the DB
[ ] Client: PUT request that will fire when we click to mark as complete or incomplete.
[ ] Server: PUT route that will SELECT for the current status of complete, and toggle it to be the opposite
[ ] Client: CSS styling!!

## Testing Requirements
- each new task needs to have `data-testid="toDoItem"`
- `data-testid="submitButton"` must be with submit button for the new task
- the input field needs to have `data-testid="toDoTextInput"`
- delete button needs `data-testid="deleteButton"`, and needs to be a child of the task, #toDoItem
- marking as completed needs to add a .completed class to the #toDoItem

## Stretch
- add Bootstrap to style
- add comfirm pop up when you delete (are you sure? look at Bootstrap Modals or Sweet Alerts)
- add a time stamp to when the item was completed