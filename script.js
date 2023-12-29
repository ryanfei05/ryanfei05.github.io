function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function viewMore() {
    // get the clock
    const more = document.querySelector(".about-containers1");
    const btn3 = document.querySelector(".btn-color3");
    
    more.style.display = 'flex';
    btn3.style.display = 'none';
    }
  

var typed = new Typed(".typing",{
    strings:["Student", "Programmer", "Learner"],
    typeSpeed:250,
    BackSpeed:200,
    loop:true
})
