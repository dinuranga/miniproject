let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');
let count=0; // counter for localStorage naming

for(let i =0;i<50;i++){
    if(localStorage.getItem('task'+i)!= null){
        console.log(localStorage.getItem('task'+i));
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p>${localStorage.getItem('task'+i)}</p>
        <div class="item-btn">
            <i class="fa-solid fa-circle-check" style="font-size: 1.8em;color:lawngreen"></i>
            <i class="fa-solid fa-rectangle-xmark"  style="font-size: 1.8em;color:rgb(235, 41, 93)" id="${'task'+i}"></i>
        </div>
        `
        tasks.appendChild(newItem);
    }
}// Gets previous records in local storage



input.addEventListener('keyup',()=>{
    if(input.value.trim()!==0){
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
}); //For textBox

addBtn.addEventListener('click',(e)=>{
    if(input.value.trim()!= 0){
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-circle-check" style="font-size: 1.8em;color:lawngreen"></i>
            <i class="fa-solid fa-rectangle-xmark"  style="font-size: 1.8em;color:rgb(235, 41, 93)" id="${'task'+count}"></i>
        </div>
        `
        tasks.appendChild(newItem);
        localStorage.setItem('task'+count,`${input.value}`);
        input.value='';
        count=count+1;
    }else{
        alert('Please enter a task!');
    }
}); // Create a new task 

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-rectangle-xmark')){
        e.target.parentElement.parentElement.remove();
        localStorage.removeItem(e.target.id);
    }
}); // Remove task form the list and localStorage

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-circle-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
}); // Toggle task completed