document.addEventListener("DOMContentLoaded", () => {
    const todo = document.querySelector(".todo");
    const todoBlock = document.querySelector(".todo__block")
    const newTodo = document.querySelector(".todo__new");
    const newInput = document.querySelector(".todo__new-input");
    const newBtn = document.querySelector(".todo__new-btn");
    const addForm = document.querySelector(".todo__form");
    const list = document.querySelector('.new__list');

    const myList = document.querySelector(".todo__my-list");
    const myTile = document.querySelector(".todo__my-title");
    const List = document.querySelector(".new__list")
    
    const listDB = [];

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newList = newInput.value;

        if(newList) {
            listDB.push(newList);
            sortArr(listDB)
        }

        createMovieList(listDB, list)

        e.target.reset();
    });

    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList(lists, parent) {
        parent.innerHTML = '';
        sortArr(lists)

        listDB.forEach((film, i) => {
        parent.innerHTML += `
            <p class="new__list">
                ${i + 1} ${film}
            </p>
        `;
        }
    )};

    myTile.addEventListener('click', () => {
        list.remove();
        return listDB;
    })

    // styles
    todo.style.cssText = `
        margin-top: 50px;
        display: flex;
        justify-content: center;
        text-align: center;
    `;

    todoBlock.style.cssText = `
        max-width: 350px;
    `

    newTodo.style.cssText = `
        border: 1px solid black;
        padding: 20px;
        border-radius: 10px;
        display: block;
        margin-bottom: 50px;
    `;

    newInput.style.cssText = `
        width: 300px;
        height: 30px
    `;

    newBtn.style.cssText = `
        width: 300px;
        height: 40px;
        margin-top: 20px;
        font-size: 16px;
    `;

    myList.style.cssText = `
        width: 310px;
        border: 1px solid black;
        text-align: center;
        border-radius: 5px;
        padding: 20px
    `;

    myTile.style.cssText = `
        cursor: pointer;
        
    `

    List.style.cssText = `
        font-size: 18px;
        background: rgb(172, 172, 172);
        padding: 10px 0;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-top: 10px
    `;
});