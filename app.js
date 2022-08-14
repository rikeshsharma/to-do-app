//Variables
const addBtn = document.querySelector('.add-btn');
const text = document.querySelector('.text-box');
const tasks = document.querySelector('.tasks');
const doneBtn = document.getElementsByClassName('done');
const removeBtn = document.getElementsByClassName('remove');

//Event-listeners
addBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    if (text.value != '') {
        div.innerHTML = `<span>${text.value}</span> <div><i class="fa-solid fa-check done"></i><i class="fa-solid fa-trash-can remove"></i></div>`
        div.classList.add('task');
        tasks.append(div);
        text.value='';
        
        doneBtn[doneBtn.length-1].addEventListener('click', (event)=>{
            event.target.parentElement.parentElement.classList.toggle('task-done');
        });
        removeBtn[removeBtn.length-1].addEventListener('click', (event)=>{
            event.target.parentElement.parentElement.remove();
        });
    }
});