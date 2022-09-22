import "./styles.css";

let numeroDeseado:number = 0;
const p = document.qyuerySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
numeroDeseado = Number (input.value); 
if(numeroDeseado > 20){
p.innerText = `El número ${numeroDeseado} es mayor que 20`;
} else if  (numeroDeseado === 20){
p.innertext = `El número ${numeroDeseado} es menor a 20`;
} else {

  p.innerText = `El número ${numeroDeseado} es igual a 20`;

}

})

