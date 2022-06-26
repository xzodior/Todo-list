const form = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')  // reference to input field

const generateTemplate = todo => {

    const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    ;

    list.innerHTML += html;
    
};

form.addEventListener('submit', event => {

    event.preventDefault();      // stops page from reloading

    const addedItem = form.add.value.trim();       // form followed by the name of the input field and value to store 
    
    if (addedItem.length > 0) {
        generateTemplate(addedItem);
        form.reset();                           // resets all input field inside that form
    }
})

// delete todos

list.addEventListener('click', event => {
    if(event.target.classList.contains('delete')){      // checks to see if target element contains a 'delete' class
        event.target.parentElement.remove();            // parentElement allows us to navigate to the li tag as that is what we want to remove
    }
})

const filterTodos = term => {

    Array.from(list.children)           // this converts the li into an array so we can use array methods
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))       
        .forEach((todo) => todo.classList.add('filtered'))      // iterates over each todo which adds a class if it doesn't include the input

        Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))   // iterates over each todo which remove the class if it does include the input

}

// keyup event

search.addEventListener('keyup', event => {
    const term = search.value.trim().toLowerCase();         // stores input into an array 
    filterTodos(term);                                      
})