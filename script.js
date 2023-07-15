const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list")
const headerHeight = document.querySelector("header")

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  headerHeight.classList.toggle("active");
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navList.classList.remove("active");
//   headerHeight.classList.remove("active");
// }))