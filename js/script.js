/**
 * Ashwan Shan - Portfolio Interactive Scripts
 * Simple, clean DOM interactions: navigation, carousel, modal, and contact validation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. PROJECT DETAILS DATA (For "View Details" modal popup)
  // ==========================================================================
  const projectDetails = {
    civinova: {
      title: "CiviNova – Societal Challenge & Innovation Platform",
      highlight: "SIH 2026 Project",
      description: "An AI and GIS-powered platform for crowdsourcing societal challenges, clustering nearby complaints and connecting civic problems with government innovation workflows.",
      technologies: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "GIS", "AI"],
      features: [
        "Geo-tagged civic complaint reporting with pinpoint map coordinates",
        "AI and GIS-based nearby complaint clustering (Haversine formula)",
        "Real-time administrative government dashboard with area work orders",
        "Student idea assessment and civic innovation workflow matching",
        "Automated AI fallback system for high-load and offline resilience"
      ],
      github: "https://github.com/ashwanshan"
    },
    algovisualizer: {
      title: "AlgoVisualizer – DSA & Graph Visualizer",
      highlight: "Interactive Tool",
      description: "An interactive web-based visualizer for graph traversal algorithms, tree data structures, and sorting algorithms with step-by-step state animations.",
      technologies: ["React", "TypeScript", "DSA", "Algorithms", "Tailwind CSS"],
      features: [
        "Visual step-by-step pathfinding animations (Dijkstra, BFS, DFS, A*)",
        "Binary Search Tree and AVL Tree dynamic node insertion and rebalancing",
        "Sorting visualizer: Quick Sort, Merge Sort, Heap Sort with speed controls",
        "Time and space complexity breakdowns for every algorithm mode"
      ],
      github: "https://github.com/ashwanshan"
    },
    calculator: {
      title: "Scientific Calculator",
      highlight: "Desktop App",
      description: "A Java-based scientific calculator implementing trigonometric, logarithmic, and exponent functions with a clean user interface and object-oriented programming concepts.",
      technologies: ["Java", "OOP", "Swing"],
      features: [
        "Full trigonometric (sin, cos, tan), logarithmic, and power functions",
        "Decoupled computation engine separating business logic from GUI",
        "Domain error validation (division by zero, negative square roots)",
        "Intuitive Swing GUI with clean key bindings and history"
      ],
      github: "https://github.com/ashwanshan"
    },
    addressbook: {
      title: "Address Book Management System",
      highlight: "Data Structures",
      description: "A contact management application supporting adding, deleting, searching and updating contacts using dynamic linked lists and binary file handling for persistence.",
      technologies: ["C++", "Linked List", "DSA", "File Handling", "OOP"],
      features: [
        "High-performance doubly linked list data structures for dynamic records",
        "Instant multi-field search and alphabetical sorting algorithms",
        "Binary file persistence for long-term record preservation",
        "Robust input validation and modular menu interface"
      ],
      github: "https://github.com/ashwanshan"
    },
    ecart: {
      title: "eCart – Personalized Recommendations",
      highlight: "E-Commerce + ML",
      description: "An e-commerce web application with personalized product recommendations based on user behaviour, browsing history and product similarity models.",
      technologies: ["HTML", "CSS", "JavaScript", "Machine Learning"],
      features: [
        "Behavioral tracking and content-based recommendation logic",
        "Interactive product catalog with category filtering",
        "Dynamic cart management with persistent local storage",
        "Clean, responsive product showcase with smooth checkout flow"
      ],
      github: "https://github.com/ashwanshan"
    },
    aichatbot: {
      title: "AI Portfolio Chatbot",
      highlight: "AI Integration",
      description: "An AI-powered chatbot integrated into a personal portfolio to answer questions about projects, skills, experience and development work using Gemini API.",
      technologies: ["React", "TypeScript", "AI", "Gemini API", "HTML", "CSS"],
      features: [
        "Interactive Q&A answering queries on Ashwan's experience & tech stack",
        "Context-aware AI responses powered by the Google Gemini API",
        "Pre-configured quick prompt chips for prospective recruiters",
        "Lightweight, accessible conversational floating widget"
      ],
      github: "https://github.com/ashwanshan"
    }
  };

  // ==========================================================================
  // 2. PROJECT MODAL HANDLER
  // ==========================================================================
  const modalOverlay = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  function openModal(projectId) {
    const proj = projectDetails[projectId];
    if (!proj || !modalContent) return;

    const highlightBadge = proj.highlight ? `<span class="modal-highlight-tag">${proj.highlight}</span>` : "";
    const featureItems = proj.features.map(f => `<li>${f}</li>`).join("");
    const tagsHtml = proj.technologies.map(t => `<span class="project-tag">${t}</span>`).join("");

    modalContent.innerHTML = `
      ${highlightBadge}
      <h3 class="modal-title" id="modalTitle">${proj.title}</h3>
      <p class="modal-desc">${proj.description}</p>
      
      <h4 class="modal-features-title">Key Architectural Features:</h4>
      <ul class="modal-features-list">
        ${featureItems}
      </ul>

      <div class="modal-tech-stack">
        <h4 class="modal-features-title">Technologies:</h4>
        <div class="project-tags">
          ${tagsHtml}
        </div>
      </div>

      <div class="modal-links-row">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-github-link" style="padding: 9px 18px; font-size: 0.8125rem;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
    `;

    modalOverlay.classList.add("open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".btn-view-project").forEach(btn => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-project");
      openModal(pid);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // ==========================================================================
  // 3. RECOMMENDATIONS CAROUSEL
  // ==========================================================================
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselDotsContainer = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");

  let currentSlideIndex = 0;
  const cards = carouselTrack ? carouselTrack.querySelectorAll(".recommendation-card") : [];
  const totalCards = cards.length;

  function getCardsPerView() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 992) return 2;
    return 3;
  }

  function getMaxIndex() {
    const cardsPerView = getCardsPerView();
    return Math.max(0, totalCards - cardsPerView);
  }

  function updateCarousel() {
    if (!carouselTrack || totalCards === 0) return;
    const maxIndex = getMaxIndex();
    if (currentSlideIndex > maxIndex) currentSlideIndex = maxIndex;

    const firstCard = cards[0];
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24;
    const shift = (cardWidth + gap) * currentSlideIndex;

    carouselTrack.style.transform = `translateX(-${shift}px)`;

    // Update dots
    renderDots();
  }

  function renderDots() {
    if (!carouselDotsContainer) return;
    const maxIndex = getMaxIndex();

    carouselDotsContainer.innerHTML = "";
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement("button");
      dot.className = `carousel-dot ${i === currentSlideIndex ? "active" : ""}`;
      dot.setAttribute("aria-label", `Testimonial ${i + 1}`);
      dot.addEventListener("click", () => {
        currentSlideIndex = Math.min(i, maxIndex);
        updateCarousel();
      });
      carouselDotsContainer.appendChild(dot);
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const maxIndex = getMaxIndex();
      currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : maxIndex;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const maxIndex = getMaxIndex();
      currentSlideIndex = currentSlideIndex < maxIndex ? currentSlideIndex + 1 : 0;
      updateCarousel();
    });
  }

  // Touch Swipe for Mobile
  let startX = 0;
  if (carouselTrack) {
    carouselTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    carouselTrack.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      const maxIndex = getMaxIndex();

      if (diff > 45) {
        currentSlideIndex = currentSlideIndex < maxIndex ? currentSlideIndex + 1 : 0;
        updateCarousel();
      } else if (diff < -45) {
        currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : maxIndex;
        updateCarousel();
      }
    }, { passive: true });
  }

  window.addEventListener("resize", updateCarousel);
  updateCarousel();

  // ==========================================================================
  // 4. NAVBAR STICKY & ACTIVE HIGHLIGHT
  // ==========================================================================
  const header = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  function handleScroll() {
    const scrollY = window.scrollY;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Scroll to Top visibility
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      if (scrollY > 350) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }

    // Active Section Detection
    let currentSectionId = "home";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      const target = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", target === currentSectionId);
    });

    mobileNavLinks.forEach(link => {
      const target = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", target === currentSectionId);
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 5. MOBILE MENU TOGGLE
  // ==========================================================================
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMobileMenu() {
    if (!hamburgerBtn || !mobileMenu) return;
    const isOpen = hamburgerBtn.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  function closeMobileMenu() {
    if (!hamburgerBtn || !mobileMenu) return;
    hamburgerBtn.classList.remove("open");
    mobileMenu.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", toggleMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener("click", closeMobileMenu));

  // ==========================================================================
  // 6. SMOOTH ANCHOR SCROLLING
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ==========================================================================
  // 7. SCROLL TO TOP BUTTON
  // ==========================================================================
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================================================================
  // 8. CONTACT FORM VALIDATION
  // ==========================================================================
  const contactForm = document.getElementById("contactForm");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const fullNameError = document.getElementById("fullNameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formFeedback = document.getElementById("formFeedback");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function clearErrors() {
    if (fullNameError) fullNameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (messageError) messageError.textContent = "";
    if (fullNameInput) fullNameInput.classList.remove("input-error");
    if (emailInput) emailInput.classList.remove("input-error");
    if (messageInput) messageInput.classList.remove("input-error");
    if (formFeedback) {
      formFeedback.className = "form-feedback";
      formFeedback.textContent = "";
    }
  }

  [fullNameInput, emailInput, messageInput].forEach(inp => {
    if (inp) {
      inp.addEventListener("input", () => {
        inp.classList.remove("input-error");
        clearErrors();
      });
    }
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const nameVal = fullNameInput ? fullNameInput.value.trim() : "";
      const emailVal = emailInput ? emailInput.value.trim() : "";
      const messageVal = messageInput ? messageInput.value.trim() : "";

      if (!nameVal || nameVal.length < 2) {
        if (fullNameError) fullNameError.textContent = "Please enter your full name (minimum 2 characters).";
        if (fullNameInput) fullNameInput.classList.add("input-error");
        isValid = false;
      }

      if (!emailVal || !validateEmail(emailVal)) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        if (emailInput) emailInput.classList.add("input-error");
        isValid = false;
      }

      if (!messageVal || messageVal.length < 8) {
        if (messageError) messageError.textContent = "Please write a message (at least 8 characters).";
        if (messageInput) messageInput.classList.add("input-error");
        isValid = false;
      }

      if (isValid) {
        if (formFeedback) {
          formFeedback.className = "form-feedback success";
          formFeedback.textContent = "Thank you! Your message has been sent successfully. Ashwan will get in touch with you shortly.";
        }
        contactForm.reset();
      }
    });
  }
});
