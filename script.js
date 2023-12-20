const open__btn = document.getElementById("open__popup__btn");
const popup = document.querySelector(".popup");
const close__btn = document.getElementById("dismiss__popup__btn");



open__btn.addEventListener("click", function(){
    popup.classList.toggle("active");
});

close__btn.addEventListener("click", function () {
  popup.classList.toggle("active");
});

//----------------------------------------------------------------

//Add or remove

// open__btn.addEventListener("click", function () {
//   popup.classList.add("active");
// });

// close__btn.addEventListener("click", function () {
//   popup.classList.remove("active");
// });