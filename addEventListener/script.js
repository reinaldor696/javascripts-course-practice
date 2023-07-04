const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//.addEventListener() es un escuchador de eventos, es un metodo y debemos ejecutarlo con parentesis, y enviarles dos argumentos
//el primero es el nombre del evento
//el segundo es el codigo js que querramos mandar a llamar cuando suceda el evento
//nota: cuando ejecutamos una funcion dentro de un argumento del addEvenListener no le colocamos los parentesis "()"

btn.addEventListener("click", btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado:" + sumaInputs;
};