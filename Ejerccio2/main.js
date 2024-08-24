const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", function (e) {
 e.preventDefault(); 
 var text = input.value.trim(); 
if (text !== "") {
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.textContent = text;
    li.addEventListener("dblclick", function () {
      ul.removeChild(li);

      var items = document.querySelectorAll("li");

      if (items.length === 0) {
        empty.style.display = "block";
      }
    });
li.appendChild(p);
    ul.appendChild(li);
input.value = "";
    empty.style.display = "none";
  } else {
    alert("Por favor, escribe una tarea antes de agregar."); 
  }
});
