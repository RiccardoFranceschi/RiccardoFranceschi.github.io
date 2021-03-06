// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// moving animation event
container.addEventListener('mousemove', (el) => {
     let xAxis = (window.innerWidth / 2 - el.pageX) / 25;
     let yAxis = (window.innerHeight / 2 - el.pageY) / 25;
     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// animate in
container.addEventListener("mouseenter", (el) => {
    card.style.transition = "none";
    // popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(150px)";
});

// animate out

container.addEventListener('mouseleave', (el) => {
    card.style.transition ="all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
})