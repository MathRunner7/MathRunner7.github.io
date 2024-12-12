// Select all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item a");

// Observer options
const options = {
    threshold: 0.2 // Trigger when 70% of the section is in view
};

// Function to remove active class from all links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove("active"));
}

// Function to add active class to the current link
function addActiveClass(id) {
    const activeLink = document.querySelector(`a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add("active");
}

// Intersection Observer callback
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            removeActiveClasses();
            addActiveClass(entry.target.id);
        }
    });
};

// Initialize Intersection Observer
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));
