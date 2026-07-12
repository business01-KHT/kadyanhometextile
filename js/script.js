// Kadyan Home Textile Website

console.log("Kadyan Home Textile Website Loaded Successfully");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.section, .product-card, .feature').forEach(el => {
    observer.observe(el);
});
// Image Lightbox

const images = document.querySelectorAll(".product-card img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="close-lightbox">&times;</span>
    <img id="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(e){
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});
// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
