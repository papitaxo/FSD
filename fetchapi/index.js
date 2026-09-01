// console.log("helo");

const root = document.getElementById('container');
const button = document.getElementById('btn');
const disp =document.getElementById('disp');

async function fetchData(){
    // alert('hiii')
    
    try{
        const serverData = await fetch('https://fakestoreapi.com/products');
        // console.log(serverData);fetchapi/index.js
            const jsonData = await serverData.json();
            // console.log(jsonData);
            // console.log(jsonData[0].title)
            disp.innerHTML=`${jsonData[0].title}`;
    }catch(e){
        console.log("Error is "+e);
    }
    finally{

    }
}

button.addEventListener('click',fetchData);