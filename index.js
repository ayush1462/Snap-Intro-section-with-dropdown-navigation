burger=document.querySelector(".burger");
navbar=document.querySelector(".mob-nav");
expand=document.querySelector(".mob-expand");
close=document.querySelector(".burger-close");


burger.addEventListener("click", () => {
    expand.style.display = "block";
    navbar.style.display = "flex";
  });
close.addEventListener("click", () => {
    expand.style.display = "none";
    navbar.style.display = "none";
  });
  