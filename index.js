    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    // let arrayOfTodos = [
    //     {
    //     "userId": 14,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // },
    // {
    //     "userId": 20,
    //     "id": 2,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }]
    
 const fetchTodos = () => {
    fetch('https://reqres.in/api/users?page=2')
    .then(function(res) {
        return res.json()
    })
    .then((d) => {
        populateTodos(d)
    })
}
function populateTodos(d) {
    const todoList = document.getElementById('todo-list')
    console.log(d)
    console.log(d.data)
    console.log(typeof d)
    console.log(typeof d.data)

    for (let i = 0; i < d.data.length; i++) {
        const element = document.createElement('li')
        element.innerHTML = `<img src="${d.data[i].avatar}">`
        todoList.appendChild(element)
    }
}

