// Rolagem para parte certa
document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(id) {
        let section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("Seção não encontrada:", id);
        }
    }

    window.scrollToSection = scrollToSection; // Expõe a função globalmente para os botões
});



// Envio do formulário
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted:', { email, message });

    e.target.reset();

    alert('Mensagem enviada com sucesso!');
});

// Rolar suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionando animação no scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe todas as seções
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
