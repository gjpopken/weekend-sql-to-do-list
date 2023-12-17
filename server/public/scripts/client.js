function onStart() {
    console.log('client is working');
    render()
}

// let sampleTasks = [
//     {
//         text: 'something',
//         isComplete: false
//     },
//     {
//         text: 'something else',
//         isComplete: true
//     }
// ]


function render() {
    axios({
        method: 'GET',
        url: '/todos'
    }).then((response) => {
        let tasksList = response.data
        const container = document.getElementById('container')
        let nInnerHTML = ''
        for (task of tasksList) {
            nInnerHTML += `
            <tr data-testid="toDoItem">
                <td>${task.text}</td> <td><button data-testid="deleteButton">X</button></td>
            `
            if (task.isComplete === false) {
                nInnerHTML += `<td><button onclick="handleUpdate(${task.id})">Done!</button></td></tr>`
            } else {
                nInnerHTML += `</tr>`
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

function handleUpdate(id) {
    // console.log('hand update clicked', id);
    axios ({
        method: "PUT",
        url: `/todos/${id}`
    }).then((response) => {
        console.log("updated task!");
        render()
    }).catch((error) => {
        console.log(error);
    })
}

onStart()