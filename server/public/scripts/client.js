function onStart() {
    console.log('client is working');
    render()
}

function render() {
    axios({
        method: 'GET',
        url: '/todos'
    }).then((response) => {
        let tasksList = response.data
        const container = document.getElementById('container')
        let nInnerHTML = ''
        for (task of tasksList) {
            if (task.isComplete === false) {
                nInnerHTML += `
                <tr data-testid="toDoItem" class="table-striped">
                    <td class="task">${task.text}</td>
                    <td class="small-cell">
                        <button class="delete-button" 
                                data-testid="deleteButton" 
                                onclick="handleDelete(${task.id})">
                                X
                        </button>
                    </td>
                    <td class="small-cell">
                        <button 
                            class="complete-button" 
                            data-testid="completeButton" 
                            onclick="handleUpdate(event, ${task.id})">
                            Done!
                        </button>
                    </td>
                </tr>
                `
            } else {
                nInnerHTML += `
                <tr data-testid="toDoItem" class="completed table-striped">
                    <td class="task">${task.text}</td>
                    <td class="small-cell">
                        <button 
                            class="delete-button" 
                            data-testid="deleteButton" 
                            onclick="handleDelete(${task.id})">
                            X
                        </button>
                    </td>
                </tr>
                `
            }
        }
        container.innerHTML = nInnerHTML
    }).catch((error) => {
        console.log(error);
    })
}

function handleSubmit(event) {
    event.preventDefault()
    const taskToAdd = document.getElementById('toDoTextInput').value

    axios({
        method: 'POST',
        url: '/todos',
        data: {
            text: taskToAdd
        }
    }).then((response) => {
        console.log('posted new task!');
        document.getElementById('toDoTextInput').value = ''
        render()
    }).catch((error) => {
        console.log(error);
    })
}

function handleUpdate(event, id) {
    axios({
        method: "PUT",
        url: `/todos/${id}`
    }).then((response) => {
        render()
    }).catch((error) => {
        console.log(error);
    })
}

function handleDelete(id) {
    axios({
        method: "DELETE",
        url: `/todos/${id}`
    }).then((response) => {
        console.log('successfully deleted');
        render()
    }).catch((error) => {
        console.log(error);
    })
}

onStart()