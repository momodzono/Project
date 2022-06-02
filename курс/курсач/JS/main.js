let containers = document.querySelector(".containers");
let nav = document.querySelector(".nav");
containers.addEventListener("click", () => {
  containers.classList.toggle("change");
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});
