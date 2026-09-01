/* =========================================================
   BLACK FYR3 SYSTEMS
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     1. HEADER / NAVIGATION
     --------------------------------------------------------- */

  const header = document.querySelector("header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  /* Close mobile navigation after selecting a link */

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("active");
      if (navToggle) navToggle.classList.remove("active");
    });
  });


  /* ---------------------------------------------------------
     2. SMOOTH SCROLLING
     --------------------------------------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

      const targetID = this.getAttribute("href");

      if (!targetID || targetID === "#") return;

      const target = document.querySelector(targetID);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  /* ---------------------------------------------------------
     3. SCROLL REVEAL
     --------------------------------------------------------- */

  const revealElements = document.querySelectorAll(
    ".reveal, .fade-in, .project-card, .service-card, .problem-card, .stat, section"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal-ready");
    revealObserver.observe(element);
  });


  /* ---------------------------------------------------------
     4. ACTIVE NAVIGATION SECTION
     --------------------------------------------------------- */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navLinks.forEach(link => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `nav a[href="#${entry.target.id}"]`
          );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        }

      });

    },
    {
      rootMargin: "-30% 0px -60% 0px"
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* ---------------------------------------------------------
     5. NUMBER COUNTERS
     --------------------------------------------------------- */

  const counters = document.querySelectorAll("[data-counter]");

  const counterObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseInt(counter.dataset.counter, 10);

        if (isNaN(target)) return;

        let current = 0;
        const duration = 1400;
        const increment = Math.max(1, target / (duration / 16));

        const updateCounter = () => {

          current += increment;

          if (current >= target) {
            counter.textContent = target.toLocaleString();
            return;
          }

          counter.textContent = Math.floor(current).toLocaleString();

          requestAnimationFrame(updateCounter);
        };

        updateCounter();

        counterObserver.unobserve(counter);
      });

    },
    {
      threshold: 0.7
    }
  );

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });


  /* ---------------------------------------------------------
     6. CARD HOVER INTERACTION
     --------------------------------------------------------- */

  const cards = document.querySelectorAll(
    ".service-card, .project-card, .problem-card, .feature-card"
  );

  cards.forEach(card => {

    card.addEventListener("mousemove", event => {

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX =
        ((y / rect.height) - 0.5) * -4;

      const rotateY =
        ((x / rect.width) - 0.5) * 4;

      card.style.transform =
        `perspective(800px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-4px)`;

    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });


  /* ---------------------------------------------------------
     7. HERO PARALLAX
     --------------------------------------------------------- */

  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  window.addEventListener("scroll", () => {

    if (!hero || !heroContent) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

      heroContent.style.transform =
        `translateY(${scrollPosition * 0.12}px)`;

      heroContent.style.opacity =
        Math.max(0, 1 - scrollPosition / 700);

    }

  });


  /* ---------------------------------------------------------
     8. SYSTEM STATUS
     --------------------------------------------------------- */

  const statusElements =
    document.querySelectorAll("[data-system-status]");

  statusElements.forEach(status => {

    status.textContent = "SYSTEMS OPERATIONAL";
    status.classList.add("operational");

  });


  /* ---------------------------------------------------------
     9. CURRENT YEAR
     --------------------------------------------------------- */

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });


  /* ---------------------------------------------------------
     10. CONTACT FORM
     --------------------------------------------------------- */

  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {

    contactForm.addEventListener("submit", event => {

      const submitButton =
        contactForm.querySelector('button[type="submit"]');

      if (submitButton) {

        submitButton.textContent = "TRANSMITTING...";

        submitButton.disabled = true;

        setTimeout(() => {

          submitButton.textContent = "MESSAGE READY";

        }, 1200);

      }

    });

  }


  /* ---------------------------------------------------------
     11. BUTTON MICRO-INTERACTIONS
     --------------------------------------------------------- */

  document.querySelectorAll("button, .btn").forEach(button => {

    button.addEventListener("mousedown", () => {
      button.classList.add("pressed");
    });

    button.addEventListener("mouseup", () => {
      button.classList.remove("pressed");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("pressed");
    });

  });


  /* ---------------------------------------------------------
     12. BACK TO TOP
     --------------------------------------------------------- */

  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 700) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }

    });

    backToTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* ---------------------------------------------------------
     13. BLACKFYRE SYSTEM INITIALIZATION
     --------------------------------------------------------- */

  document.body.classList.add("blackfyre-loaded");

  console.log(
    "%c BLACK FYR3 SYSTEMS ",
    "background:#ff7800;color:#000;font-weight:bold;padding:8px 12px;"
  );

  console.log(
    "%cSystems initialized successfully.",
    "color:#ff7800;font-weight:bold;"
  );

});
