document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    const removeActiveClasses = () => {
        links.forEach(link => link.classList.remove('active'));
    };

    const addActiveClass = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        removeActiveClasses();
        if (index >= 0) {
            links[index].classList.add('active');
        }
    }
});

function openImage(imageElement) {
    const modal = document.getElementById('image1');
    const modalImage = document.getElementById('modal');

    modalImage.src = imageElement.src;

    modal.style.display = 'flex';
}

function closeImage() {
    const modal = document.getElementById('image1');

    modal.style.display = 'none';
}

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent successfully!');
});