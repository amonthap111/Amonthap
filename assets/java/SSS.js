document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach(testimonial => {
        testimonial.addEventListener("mouseenter", () => {
            testimonial.style.boxShadow = "0 4px 20px rgba(255, 255, 255, 0.5)";
        });

        testimonial.addEventListener("mouseleave", () => {
            testimonial.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.2)";
        });
    });
});
