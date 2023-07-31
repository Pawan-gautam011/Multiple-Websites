const header= document.querySelector("header");


window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   button.innerHTML = "Sending...";
//   button.classList.add("preview");
//   setTimeout(() => {
//     button.innerHTML = "Sent";
//     button.classList.add("add");
//     button.classList.remove("preview");
//   }, 6000);
// });