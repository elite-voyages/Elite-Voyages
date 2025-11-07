// Mobile Menu
function toggleMobileMenu() {
    document.getElementById("mainNav").classList.toggle("active");
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        document.getElementById("mainNav").classList.remove("active");
    });
});

// Popup Overlay
const openBtn = document.getElementById("openOverlay");
const closeBtn = document.getElementById("closeOverlay");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
    window.location = './ff.html'
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
});

let ff = document.getElementById("ff");


ff.addEventListener('click', ()=>{
    window.location = './ff.html'
})


// Tour товчийг дарахад overlay гаргах
openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tour = btn.getAttribute("data-tour"); // "1" эсвэл "2"

        // Бүх tour content-ийг хаах
        document.querySelectorAll(".overlay-tour").forEach(t => t.style.display = "none");

        // Сонгогдсон tour-г харуулах
        document.querySelector(".overlay-tour-" + tour).style.display = "block";

        overlay.style.display = "flex";
        document.body.style.overflow = "hidden"; // scroll lock
    });
});

// Overlay хаах товч
closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
});

// Overlay дээр дарахад хаах
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }
});






// Contact Form
function handleSubmit(event) {
    event.preventDefault();
    alert("Таны мессеж амжилттай илгээгдлээ! Бид удахгүй холбогдох болно.");
    event.target.reset();
}
function toggleMobileMenu() {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("active");  // Toggle 'active' class to show/hide the menu
}