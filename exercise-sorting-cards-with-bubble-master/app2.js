let numerosCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //tamaño de este arreglo
let simboloCarta = ["club", "diamond", "heart", "spade"];
let inputValue = document.querySelector("#Capinput");
let btndraw = document.querySelector("#draw")
let btnsort = document.querySelector("#sort")

let muestraCartas = [];

const repeticiones = (repeticiones) => {
  for (let i = 0; i < repeticiones; i++) {
    muestraCartas.push(datosCartas());
  }
}

const datosCartas = () => { 
  return  [
    simboloCarta[Math.floor(Math.random() * 4)] ,
    numerosCarta[Math.floor(Math.random() * 13)]
  ];
}

btndraw.addEventListener("click", ()=>{
  console.log("btndraw")
})
btnsort.addEventListener("click", ()=>{
  console.log("btnsort")
})





// let mostrarResultado1 = document
//   .querySelector("#Capinput")
//   .addEventListener("clic", (inputValue) => {
//     let inputValue = document.querySelector("#input").value;
//     let donde = document.querySelector("#draw");
//     donde.innerHTML = "<div>" + muestraCartas.join("") + "</div>";
//     return inputValue;
//   });
