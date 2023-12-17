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
        for (task of tasksList) { // TODO change the interpolation to put the buttons in their own td's
            nInnerHTML += `
            <tr data-testid="toDoItem">
                <td>${task.text} <button data-testid="deleteButton">Delete</button>
            `
            if (task.isComplete === false) {
                nInnerHTML += `<button>Done!</button></td></tr>`
            } else {
                nInnerHTML += `</td></tr>`
            }
        }
        container.innerHTML = nInnerHTML
    }).catch((error) => {
        console.log(error);
    })
}

function handleSubmit(event) {
    event.preventDefault()
    
}

onStart()