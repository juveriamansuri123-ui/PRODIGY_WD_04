
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuBtn.textContent = menu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Typing Animation
const words = ["Web Developer", "IT Student", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    typing.textContent = currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 120);
    } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 65);
    } else {
        deleting = !deleting;

        if (!deleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, 800);
    }
}

typeEffect();

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const recipient = "juveriamansuri123@gmail.com";

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".section, .project-card, .skill-card").forEach(function(item) {
    item.style.opacity = "0";
    item.style.transform = "translateY(25px)";
    item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(item);
});
