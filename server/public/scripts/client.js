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
        for (task of tasksList) {
            let nInnerHTML = `
            <tr>
                <td>${task.text} <button>Delete</button>
            `
            if (task.isComplete === false) {
                nInnerHTML += `<button>Done!</button></td></tr>`
            } else {
                nInnerHTML += `</td></tr>`
            }
        }
        container.innerHTML = nInnerHTML
    })
}

onStart()