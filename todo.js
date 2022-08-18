
let count = 0;
document.getElementById("items-btn").addEventListener("click", function(){
    count++;
    const inputValue = document.getElementById("input-value").value;
    document.getElementById("input-value").value = "";
    
    // create new todo items
    const mainContainer = document.getElementById("table-body");
    const tableContainer = document.createElement("tr");
    tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="done-btn btn btn-success py-1 px-3 m-1">Done</button>
    <button class="delete-btn btn btn-danger py-1 m-1">Delete</button>
    </td>
    `;
    mainContainer.appendChild(tableContainer);

    // Done button action
    const doneBtns = document.getElementsByClassName("done-btn");
    for(let doneBtn of doneBtns){
        doneBtn.addEventListener("click", function(event){
            event.target.parentNode.parentNode.style.textDecoration = "line-through";
            console.log(doneBtn);
        })
    }

    // Delete button action
    const deleteBtns = document.getElementsByClassName("delete-btn");
    for(let deleteBtn of deleteBtns) {
        deleteBtn.addEventListener("click", function(event){
            event.target.parentNode.parentNode.style.display = "none";
        })
    }
});

// Clear All button action
document.getElementById("clear-btn").addEventListener("click", function(event){
    event.target.parentNode.childNodes[1].childNodes[3].style.display = "none";
})









/* 
// template string
const myName = "Jhon";
const age = 20;

console.log(`my name is ${myName}, I'm ${age} years old.`); 
*/