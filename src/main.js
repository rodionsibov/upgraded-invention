const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
        } else {
            entry.target.classList.remove("opacity-100");
        }
    });
});

const hiddenElements = this.document.querySelectorAll(".hidden-el");
hiddenElements.forEach((el) => observer.observe(el));
