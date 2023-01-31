let forma1 = document.forms.f1;
console.log(forma1);

let btn = document.getElementById("buttonAdd");
let modalWindow = document.querySelector(".modal");
let modalWindow2 = document.querySelector(".modal2");
let cross = document.querySelector(".uil");
let cross2 = document.querySelector(".crs");
let inputText = f2.inpText.value;
let f = document.getElementsByTagName("span");
console.log(f);
document.querySelector(".btn").addEventListener("click", function () {
  if (f2.inpText.value == "") {
    modalWindow.style.display = "block";
  } else {
    document.querySelector(".btn").classList.toggle("shadow");
    forma1.insertAdjacentHTML(
      "beforeend",
      `<label for="i5"><input type="checkbox" name="galo" id="i5" value="${f2.inpText.value}"><span class="spanTag">${f2.inpText.value}</span></label>`
    );
    console.log(f2.inpText.value);
    f2.inpText.value = "";
  }

  for (let i = 0; i < forma1.children.length; i++) {
    console.log(forma1.children[i]);
    console.log(forma1.children.length);

    forma1.children[i].onclick = function () {
      if (forma1.elements.length > 1) {
        let eventTarg = event.target;
        let x = eventTarg.parentElement;
        x.remove();
      } else {
        modalWindow2.style.display = "block";
      }
    };
  }
});
cross.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
cross2.addEventListener("click", function () {
  modalWindow2.style.display = "none";
});

for (let i = 0; i < forma1.children.length; i++) {
  console.log(forma1.children[i]);
  console.log(forma1.children.length);

  forma1.children[i].onclick = function () {
    if (forma1.elements.length > 1) {
      let eventTarg = event.target;
      let x = eventTarg.parentElement;
      x.remove();
    } else {
      modalWindow2.style.display = "block";
    }
  };
}
