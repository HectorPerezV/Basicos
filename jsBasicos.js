const input=document.querySelector("input");
const log=document.getElementById("log");

input.addEventListener("keydown", logKey);
function logKey(e){
    if(e.code=="ArrowUp"){
        console.log("esta brincando")
    }
    if(e.code=="ArrowDown"){
        console.log("esta agachado")
    }
    if(e.code=="ArrowRight"){
        console.log("esta avanzando")
    }
    if(e.code=="ArrowLeft"){
        console.log("esta retrocediendo")
    }

   // log.textContent += `${e.code}`;
}