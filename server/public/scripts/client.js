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
            // nInnerHTML += `
            // <tr data-testid="toDoItem">
            //     <td>${task.text}</td> <td><button data-testid="deleteButton" onclick="handleDelete(${task.id})">X</button></td>
            // `
            // if (task.isComplete === false) {
            //     nInnerHTML += `<td><button data-testid="completeButton" onclick="handleUpdate(event, ${task.id})">Done!</button></td></tr>`
            // } else {
            //     nInnerHTML += `</tr>`
            // }
            if (task.isComplete === false) {
                nInnerHTML += `
                <tr data-testid="toDoItem">
                    <td class="task">${task.text}</td>
                    <td>
                        <button class="delete-button" 
                                data-testid="deleteButton" 
                                onclick="handleDelete(${task.id})">
                                X
                        </button>
                    </td>
                    <td>
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
                <tr data-testid="toDoItem" class="completed">
                    <td class="task">${task.text}</td>
                    <td>
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
    //console.log('add task was clicked');
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
    // console.log('hand update clicked', id);
    const currentTD = event.target
    // console.log(currentTD);
    axios ({
        method: "PUT",
        url: `/todos/${id}`
    }).then((response) => {
        console.log("updated task!");
        // currentTD.classList.add('completed')
        console.log(currentTD);
        render()
    }).catch((error) => {
        console.log(error);
    })
}

function handleDelete(id) {
    // console.log('delete task clicked', id);

    axios ({
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