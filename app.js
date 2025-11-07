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
    overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
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