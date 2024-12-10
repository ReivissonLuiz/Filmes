const loginModal = document.getElementById("loginModal");
const accountIcon = document.querySelector(".login-area .material-icons");
const closeButton = document.querySelector(".close");

accountIcon.addEventListener("click", (event) => {
    event.preventDefault();
    loginModal.style.display = "flex";
});
closeButton.addEventListener("click", () => {
    loginModal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});







const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let activeIndex = 1;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
    });
    items[activeIndex].classList.add('active');

    // Alinhar a imagem ativa ao centro
    const offset = -((activeIndex - 1) * 20) + 10;
    container.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
});

updateCarousel();
