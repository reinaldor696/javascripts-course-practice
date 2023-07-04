//los selectores son parecido a css y html

//h1 { color:red}
//.parrafo1 {...}
//#pid {...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo1 = document.getElementsByClassName('parrafo1');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1, 
    p,
    parrafo1,
    pid,
    input,
});

//hacer cambios html desde javascript
h1.innerHTML = "clases <br> dom";

//convierte todo a texto nada mas
p.innerText = "parrafo <br> nuevo";

//.getAttribute nos ayuda a llamar a un atributo creado o cualquier atributo o clase existente 
console.log(h1.getAttribute('pantalla'));

//.setAttribute es la forma para modificar los atributos de nuestros elementos en html
console.log(p.getAttribute('class', 'parrafo1'));
p.setAttribute('class', 'verde');

//.classlist.add agrega una clase
p.classList.add('rojo')
//classlist.remove borra la clase de la linea de html seleccionado
p.classList.remove('rojo')

//input.value crea o cambia el valor del input js
input.value = "456"

//document.createElement nos ayuda a crea un elemento de html desde javascript
const img = document.createElement("img")
img.setAttribute("src", "https://")
console.log(img)
//para hacer enviar como argumento la imagen usamos
pid.appendChild(img);