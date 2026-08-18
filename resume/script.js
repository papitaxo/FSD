const container=document.getElementById('container');
const button=document.getElementById('btn');
const heading= document.createElement('heading');
heading.innerHTML="MY RESUME";

function ping(){
    container.appendChild(heading);
}

button.addEventListener('click',ping)