const container=document.getElementById('container');
console.log(container);
const button=document.getElementById('btn');
console.log(button);

const h1= document.createElement("h1");
console.log(h1);
h1.innerHTML='ABES Engineering College';

function ping(){
    alert('server ping');
    container.innerHTML=' <h2> welcome to DOM </h2>';
    container.appendChild(h1);
}

button.addEventListener('click',ping)
// console.log("one")
// for (i=0; i<1000;i++){
//     console.log("i="+i);
// }

// setTimeout(()=>{console.log("two")},1000) 

// console.log("three")

