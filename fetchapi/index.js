// console.log("helo");

const root = document.getElementById('container');
const button = document.getElementById('btn')


async function fetchData(){
    // alert('hiii')
    
    try{
        const serverData = await fetch('https://fakestoreapi.com/products');
        console.log(serverData);
    }catch(e){
        console.log("Error is "+e);
    }
    finally{

    }
}

button.addEventListener('click',fetchData);