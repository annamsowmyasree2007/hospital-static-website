function bookAppointment() {
  alert("Appointment request received!");
}

document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".stat-card, .info-card, .doctor-card, .dept-card, .feature-box, .faq-item, .section-heading, .cta-inner, .hero-content, .hero-visual, .feature-copy, .contact-card, .form-panel, .appointment-card"
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal", `reveal-delay-${index % 6}`);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mainNav.classList.toggle("open");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      faqItems.forEach((faq) => faq.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const appointmentForm = document.getElementById("appointmentForm");
  const formMessage = document.getElementById("formMessage");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const department = document.getElementById("department").value.trim();
      const date = document.getElementById("date").value.trim();

      if (!name || !email || !phone || !department || !date) {
        showMessage("Please fill in all required fields before submitting.", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
      }

      if (phone.length < 10) {
        showMessage("Please enter a valid phone number with at least 10 digits.", "error");
        return;
      }

      bookAppointment();
      showMessage("Our team will contact you soon.", "success");
      appointmentForm.reset();
    });

    function showMessage(message, type) {
      if (!formMessage) return;
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
    }
  }
});
