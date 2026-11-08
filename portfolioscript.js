

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuToggle.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});



const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
});

// Remember the selected theme

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☾";
}




const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});




document.getElementById("year").textContent =
    new Date().getFullYear();



document.getElementById("downloadCV").addEventListener("click", () => {

    const cv = `
MOHAMMAD TAQI FAQERI

ENGLISH TEACHER & WEB DESIGNER

PROFESSIONAL PROFILE

I am Mohammad Taqi Faqeri, an English teacher
and web designer with two years of experience.

I enjoy teaching English and creating modern
and attractive websites. I am passionate about
education, creativity, and continuous learning.

PROFESSIONAL EXPERIENCE

English Teacher
Experience: 2 Years
Teaching Levels: Intermediate and Advanced

Web Designer
Experience: 2 Years

TECHNICAL SKILLS

- HTML
- CSS
- JavaScript

PROFESSIONAL INTERESTS

- English Language Teaching
- Web Design
- Website Development
- Creative Learning

CONTACT

Email: Add your email address
WhatsApp: Add your phone number

Education and certificates:
Add your education details here.

Portfolio: Mohammad Taqi Faqeri
`;

    const blob = new Blob([cv], {
        type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Mohammad-Taqi-Faqeri-CV.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

});




const whatsappNumber = "";

const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.addEventListener("click", (event) => {

    event.preventDefault();

    if (!whatsappNumber) {
        alert("0774242624");
        return;
    }

    const message = encodeURIComponent(
        "Hello Mohammad Taqi Faqeri! I visited your portfolio and would like to contact you."
    );

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});
