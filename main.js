document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('form');
const addTaskInput = document.getElementById('add-task-input');
const addTaskSubmit = document.getElementById('new-task-submit');
const tasksContainer = document.getElementById('tasks-container');
const taskRow = document.querySelectorAll('.task-row');
const taskInput = document.querySelectorAll('.task-input');
const editTask = document.querySelectorAll('.edit');
const deleteTask = document.querySelectorAll('.delete');
const errorMsgWrapper = document.querySelector('.error-msg-wrapper');
const errorMsgClose = document.querySelector('.fa-xmark');
const errorMsg = document.getElementById('error-msg');
// const checkBox = document.querySelector('.check-box');
const checkIconSpan = document.querySelector('.check-icon-span');
const addTask = document.getElementById('add-task-submit');
const successMsg = document.querySelector('.success-msg');
const taskEdited = document.querySelector('.task-edited');
const taskDeleted = document.querySelector('.task-deleted');
const closeIcon = document.querySelector('.close-icon');

// CLOSE ERROR MESSAGE
errorMsgClose.addEventListener('click', () => {
    errorMsg.classList.remove('block');
    errorMsg.classList.add('hidden');
    errorMsgClose.classList.add('hidden');
})
// FORM SUBMISSION
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // GET INPUT VALUE
    const taskValue = addTaskInput.value;

    // ERROR MESSAGE
    if(!taskValue) {
        errorMsg.classList.remove('hidden');
        errorMsg.classList.add('block');
        errorMsgClose.classList.remove('hidden');
        return;
    }

    // CREATE A NEW TASK
    const newTaskRow = document.createElement('div');
    newTaskRow.classList.add('task-row', 'w-full', 'text-sm', 'md:text-lg', 'flex', 'justify-between', 'gap-3');

    const taskInputContent = document.createElement('div');
    taskInputContent.classList.add('task-input-content', 'flex', 'gap-5', 'w-full', 'relative');

    const checkBoxWrapper = document.createElement('span');
    checkBoxWrapper.classList.add('check-box', 'text-sm', 'md:text-2xl');
    const checkBox = document.createElement('i');
    checkBox.classList.add('fa-regular', 'fa-square');
    checkBoxWrapper.appendChild(checkBox);
    // checkBox.innerHTML = '<i class="fa-regular fa-square"></i>';
    taskInputContent.appendChild(checkBoxWrapper);
    
    const checkIcon = document.createElement('span');
    checkIcon.classList.add('text-3xl', 'absolute', '-top-1', 'left-0', 'text-green-600', 'font-bold', 'cursor-pointer');
    const icon = document.createElement('i');
    icon.classList.add('hidden', 'fa-solid', 'fa-check');
    checkIcon.appendChild(icon);
    // checkIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
    taskInputContent.appendChild(checkIcon);

    const task = document.createElement('input');
    task.classList.add('task-input', 'w-6/12', 'outline-none');
    task.value = taskValue;
    task.setAttribute('readonly', 'readonly');
    taskInputContent.appendChild(task);

    newTaskRow.appendChild(taskInputContent);

    const actions = document.createElement('div');
    actions.classList.add('task-actions', 'w-3/12', 'flex', 'justify-between');
    newTaskRow.appendChild(actions);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';
    actions.appendChild(editButton);
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';
    actions.appendChild(deleteButton);

    tasksContainer.appendChild(newTaskRow);

    // CLEAR INPUT
    addTaskInput.value = '';

    // CHECK ICON
    checkBox.addEventListener('click', () => {
        console.log('Checkbox clicked');
        task.classList.toggle('line-through');
        icon.classList.toggle('hidden');
        // console.log(icon);
        // console.log('Icon hidden:', icon.classList.contains('hidden'));
    })
    icon.addEventListener('click', () => {
        task.classList.toggle('line-through');
        icon.classList.add('hidden');
    })
    
    // EDIT TASK
    editButton.addEventListener('click', () => {
        if (editButton.innerText === 'Edit') {
            task.removeAttribute('readonly');
            task.focus();
            editButton.innerText = 'Save';
        } else {
            task.setAttribute('readonly', 'readonly');
            editButton.innerText = 'Edit';
        } 
        if(editButton.innerText === 'Save') {
            editButton.addEventListener('click', () => {
                taskEdited.classList.toggle('hidden');
                closeIcon.addEventListener('click', )
            })
        } 
    })
    // CLOSE TASK EDITED MESSAGE
    if(!taskEdited.classList.contains('hidden')) {
        closeIcon.addEventListener('click', () => {
            taskEdited.classList.add('hidden');
            console.log('task edited')
        })
    }

    // DELETE TASK
    deleteButton.addEventListener('click', () => {
        newTaskRow.remove();
        taskDeleted.classList.toggle('hidden');
    })

    // CLOSE TASK DELETED MESSAGE
    if(!taskDeleted.classList.contains('hidden')) {
        closeIcon.addEventListener('click', () => {
            taskDeleted.classList.add('hidden');
            console.log('task deleted')
        })
    }
        

     // SUCCESS MESSAGE
     if(taskValue) {
        successMsg.classList.toggle('hidden');
        closeIcon.addEventListener('click', () => {
            successMsg.classList.add('hidden')
        })
        document.addEventListener('click', (e) => {
            const isClickInside = successMsg.contains(e.target);
            
            if (!isClickInside && !successMsg.classList.contains('hidden')) {
                successMsg.classList.add('hidden');
            }
        });
    
        return;
    } 
    
}) 
})
