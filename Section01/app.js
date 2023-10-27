const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const ListElement = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputElement.value;
    const newListElement = document.createElement('li');
    newListElement.textContent = enteredValue;
    ListElement.appendChild(newListElement);
    inputElement.value = "";
}

buttonElement.addEventListener('click', addGoal);