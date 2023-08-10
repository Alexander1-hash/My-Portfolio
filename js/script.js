// Animation for header
gsap.from("header", { opacity: 0, duration: 1, y: -50, ease: "power2.out" });

// Animations for sections
gsap.from("#about", { opacity: 0, duration: 1, y: -50, delay: 0.2, ease: "power2.out" });
gsap.from("#projects", { opacity: 0, duration: 1, y: -50, delay: 0.4, ease: "power2.out" });
gsap.from("#skills", { opacity: 0, duration: 1, y: -50, delay: 0.6, ease: "power2.out" });
gsap.from("#contact", { opacity: 0, duration: 1, y: -50, delay: 0.8, ease: "power2.out" });

// Animation for project cards on hover
const projectCards = document.querySelectorAll(".project");
projectCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        gsap.to(card, { y: -10, duration: 0.2, ease: "power2.out" });
    });

    card.addEventListener("mouseout", () => {
        gsap.to(card, { y: 0, duration: 0.2, ease: "power2.out" });
    });
});
