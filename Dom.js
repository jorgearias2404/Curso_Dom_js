document.getElementById("app-title") //al escribir este codigo
//busca en la consola del navegador un id que cumpla y se puede guardas
//en una variable para poder usarla en el futuro
document.querySelector("#app-title")//con esto es otro formato de busqueda
// que en esencia hace lo msmo buscando por el primero que encuentre
document.getElementsByClassName("menu-items")//busca y retorna una lista
//los elementos quie tengan un match copn esa clase
document.getElementsByClassName("menu-items")//retorna los elementos
//en este caso de tipo p
document.querySelectorAll(".menu-items")//tare todos los elementos que tengan
//la clase menu-items
// const parent = document.getElementById("parent");
// console.log(parent);

// const children = parent.children;
// console.log(children);

// const firstChild = parent.firstElementChild;

// console.log(firstChild);

// const lastChild = parent.lastElementChild;
// console.log(lastChild);

// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

const children2 = document.querySelector("li");

console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;

console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);

//si hacemos const Variable = document.querryselector("Valor a buscar")
//y luego hjacemos variable.innerText = "Algo" podemos modificar el contenido
// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado

//modificando estilos

//const newItem = document.createEelement("p")
//crea un elemento de tipo parrafo
//newIteam.TextContent ="asi se agrega contenido"
//para inyectarlo debemos decirle donde queremos que se inyecte\

// const listArea.GetElementeById("id del objeto")
//listArea.Append(newItem) asi lo agrega al final

//prepend es al inicio
//after despues de un elemento
//before  antes de un elemento

//elemento.remove() elimina un elemento
//ELEMENTO.removeChild(Elemento.firstElementChild) elimina un elemento hijo de un objeto n

//const Clon = Elemento.cloneNode(true) copia el elemento
//elemento.replaceWidt(elementoParaReemplazar )

//EVENTOS