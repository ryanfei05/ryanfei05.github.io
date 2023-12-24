function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed(".typing",{
    strings:["Student", "Programmer", "Learner"],
    typeSpeed:250,
    BackSpeed:200,
    loop:true
})
