var block = document.querySelector(".block")
var pointer = document.querySelector(".pointer")
var pointerShadow = document.querySelector(".pointer-shadow")
var subMenu = document.querySelector(".sub-menu")
var each = document.querySelector(".each")
var bottom = document.querySelector(".bottom")
var modal = document.querySelector(".modal")
var otherApps = document.querySelector(".other-apps")

block.addEventListener("click", function() {
  pointer.classList.add("show");
  pointerShadow.classList.add("show");
  subMenu.classList.add("show");
  modal.classList.add("modal-show");
});

modal.addEventListener("click", function(evt) {
  evt.preventDefault();
  pointer.classList.remove("show");
  pointerShadow.classList.remove("show");
  subMenu.classList.remove("show");
  modal.classList.remove("modal-show");
  bottom.classList.remove("show");
  each.classList.remove("none");
  subMenu.classList.remove("scroll-menu");
});

each.addEventListener("click", function(evt) {
  evt.preventDefault();
  subMenu.classList.add("scroll-menu");
  bottom.classList.add("show");
  each.classList.add("none");
  otherApps.focus();
});

var menuIconMedia = document.querySelector(".menu-icon-media")
var menuMedia = document.querySelector(".menu-media")
var modalBlack = document.querySelector(".modal-black")

menuIconMedia.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuMedia.classList.add("show");
  modalBlack.classList.add("modal-show");
});

modalBlack.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuMedia.classList.remove("show");
  modalBlack.classList.remove("modal-show");
});
