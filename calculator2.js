

const writeDisplay = () =>{
    const text = document.querySelector("#text");
    text.value="";
}

const numbers = () =>{
    const button = document.querySelector("#button");
    //value en algún sitio
    button.addEventListener("click", writeDisplay)
}