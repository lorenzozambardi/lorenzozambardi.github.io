document.addEventListener("DOMContentLoaded", () => {
  // i18n Logic
  let currentLang = localStorage.getItem("preferredLang") || "it";

  function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        const text = translations[lang][key];

        if (el.classList.contains("animate-words")) {
          const words = text.split(" ");
          el.innerHTML = words
            .map((w) => `<span class="hero-word">${w}</span>`)
            .join(" ");
        } else {
          el.textContent = text;
        }
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("preferredLang", lang);

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Check manually if already intersecting after lang change
    document.querySelectorAll(".animate-group").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("animated");
        triggerWordAnimation(el);
      }
    });
  }

  function triggerWordAnimation(container) {
    const words = Array.from(container.querySelectorAll(".hero-word"));
    if (words.length === 0) return;

    // Reset state
    words.forEach((w) => w.classList.remove("active"));

    // Animate one by one sequentially every 50ms (0.05s)
    words.forEach((w, index) => {
      setTimeout(() => {
        w.classList.add("active");
      }, index * 50);
    });
  }

  function updateFlag(lang) {
    document.querySelectorAll(".flag-it").forEach((el) => {
      el.style.display = lang === "it" ? "flex" : "none";
    });
    document.querySelectorAll(".flag-en").forEach((el) => {
      el.style.display = lang === "en" ? "flex" : "none";
    });
  }

  const langButtons = document.querySelectorAll(".lang-toggle-btn");
  const menuContent = document.querySelector(".menu-content");
  const langFadeOverlay = document.getElementById("lang-fade-overlay");

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isMenuOpen =
        menuOverlay && menuOverlay.classList.contains("active");

      if (isMenuOpen && menuContent) {
        menuContent.classList.add("fade-out");
      }
      if (langFadeOverlay) {
        langFadeOverlay.classList.add("active");
      }

      setTimeout(() => {
        currentLang = currentLang === "it" ? "en" : "it";
        setLanguage(currentLang);
        updateFlag(currentLang);

        requestAnimationFrame(() => {
          setTimeout(() => {
            if (isMenuOpen && menuContent) {
              menuContent.classList.remove("fade-out");
            }
            if (langFadeOverlay) {
              langFadeOverlay.classList.remove("active");
            }
          }, 40);
        });
      }, 250);
    });
  });

  setLanguage(currentLang);
  updateFlag(currentLang);

  // Menu Overlay Logic
  const menuBtn = document.getElementById("menu-btn");
  const menuOverlay = document.getElementById("menu-overlay");
  const overlayLinks = document.querySelectorAll(".overlay-link");
  const navbar = document.querySelector(".navbar");

  function toggleMenu() {
    const isOpening = !menuOverlay.classList.contains("active");
    menuOverlay.classList.toggle("active");
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("menu-open");

    if (isOpening) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener("click", toggleMenu);

    overlayLinks.forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && menuOverlay.classList.contains("active")) {
        toggleMenu();
      }
    });
  }

  // Bulletproof Synchronous Teleportation Jump Navigation
  const mainElement = document.querySelector("main") || document.body;

  function jumpToSectionWithSimpleFade(targetId) {
    if (!targetId || targetId === "#") return;

    if (menuOverlay && menuOverlay.classList.contains("active")) {
      toggleMenu();
    }

    // 1. Instantly disable pointer events and start 120ms fade-out
    document.body.style.pointerEvents = "none";
    mainElement.classList.add("page-fading");

    // 2. At 130ms (when opacity is 100% zero), teleport synchronously
    setTimeout(() => {
      let targetScrollTop = 0;

      if (targetId === "#hero") {
        targetScrollTop = 0;
      } else {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const navbar = document.querySelector(".navbar");
          const navOffset = navbar ? navbar.offsetHeight + 20 : 80;
          targetScrollTop =
            targetEl.getBoundingClientRect().top +
            window.pageYOffset -
            navOffset;
        }
      }

      // Triple synchronous instant scroll (0ms execution)
      window.scrollTo(0, targetScrollTop);
      document.documentElement.scrollTop = targetScrollTop;
      document.body.scrollTop = targetScrollTop;

      // 3. Render target section in rAF before fading back in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mainElement.classList.remove("page-fading");
          setTimeout(() => {
            document.body.style.pointerEvents = "";
          }, 150);
        });
      });
    }, 130);
  }

  // Attach to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      jumpToSectionWithSimpleFade(targetId);
    });
  });

  // Intersection Observer for scroll animations (fade in)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".fade-in-section").forEach((section) => {
    observer.observe(section);
  });

  // Intersection Observer specifically for word animations
  const wordObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          if (!entry.target.classList.contains("animated")) {
            entry.target.classList.add("animated");
            triggerWordAnimation(entry.target);
          }
        } else if (!entry.isIntersecting) {
          // Reset ONLY when completely off-screen
          entry.target.classList.remove("animated");
          const words = entry.target.querySelectorAll(".hero-word");
          words.forEach((w) => w.classList.remove("active"));
        }
      });
    },
    { rootMargin: "-5% 0px -5% 0px", threshold: [0, 0.2, 0.5] },
  );

  document.querySelectorAll(".animate-group").forEach((el) => {
    wordObserver.observe(el);
  });

  // Custom Cursor Logic
  const cursor = document.getElementById("custom-cursor");
  if (cursor) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let hasMouse = false;

    function isMobile() {
      return (
        window.innerWidth <= 768 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    }

    document.addEventListener("mousemove", (e) => {
      if (isMobile()) {
        if (hasMouse) {
          hasMouse = false;
          document.body.classList.remove("has-mouse");
          cursor.style.display = "none";
        }
        return;
      }

      if (!hasMouse) {
        hasMouse = true;
        document.body.classList.add("has-mouse");
        cursor.style.display = "block";
      }
      cursor.classList.remove("hidden");
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener("mouseleave", () => {
      cursor.classList.add("hidden");
    });

    document.addEventListener("mouseenter", () => {
      if (!isMobile() && hasMouse) {
        cursor.classList.remove("hidden");
      }
    });

    function animateCursor() {
      if (hasMouse && !isMobile()) {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    window.addEventListener("resize", () => {
      if (isMobile() && hasMouse) {
        hasMouse = false;
        document.body.classList.remove("has-mouse");
        cursor.style.display = "none";
      }
    });

    // Hover effect for clickables
    const clickables = document.querySelectorAll("a, button, input, select");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!isMobile() && hasMouse) {
          cursor.classList.add("hover");
        }
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
  }

  // Parallax Effect on Glass Cards
  const glassParallaxElements = document.querySelectorAll(".glass-card");

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      if (glassParallaxElements.length > 0) {
        glassParallaxElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const yCenter = rect.top + rect.height / 2;
          const windowCenter = window.innerHeight / 2;
          const distance = yCenter - windowCenter;

          const speed = 0.05;
          // Apply subtle parallax movement
          el.style.transform = `translateY(${distance * speed}px)`;
        });
      }
    });
  });

  // 3D Tilt Hover Effect on Project Cards
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;
    let isHovered = false;

    // Minimal subtle tilt angle ("di pochissimo")
    const maxTilt = 1.2;

    function updateCardTransform() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      card.style.transform = `perspective(1200px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;

      if (
        isHovered ||
        Math.abs(targetX - currentX) > 0.01 ||
        Math.abs(targetY - currentY) > 0.01
      ) {
        rafId = requestAnimationFrame(updateCardTransform);
      } else {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        rafId = null;
      }
    }

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const percentX = (x / rect.width) * 2 - 1; // -1 (left) to 1 (right)
      const percentY = (y / rect.height) * 2 - 1; // -1 (top) to 1 (bottom)

      // Tilt towards the cursor
      targetX = percentY * maxTilt;
      targetY = -percentX * maxTilt;

      if (!rafId) {
        rafId = requestAnimationFrame(updateCardTransform);
      }
    });

    card.addEventListener("mouseenter", () => {
      isHovered = true;
      if (!rafId) {
        rafId = requestAnimationFrame(updateCardTransform);
      }
    });

    card.addEventListener("mouseleave", () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
    });
  });

  // FormSubmit handling with a Base64-obfuscated recipient (anti-scraper hygiene, not secrecy)
  const encodedEmail = "emFtYmFyZGlsb3JlbnpvQGdtYWlsLmNvbQ==";
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");
  const submitBtn = document.getElementById("contact-submit-btn");
  const submitBtnText = submitBtn?.querySelector(".text");

  // Client-side anti-abuse: a minimum fill time plus a one-minute cooldown.
  // Static hosting cannot enforce rate limits server-side, so this is a
  // deterrent layered on top of FormSubmit's filtering and the honeypot.
  const CONTACT_COOLDOWN_MS = 60 * 1000;
  const CONTACT_MIN_FILL_MS = 4000;
  const CONTACT_COOLDOWN_KEY = "lz-contact-last-submit";
  const contactFormMountedAt = Date.now();
  let lastContactSubmitAt = 0;

  try {
    lastContactSubmitAt =
      Number(localStorage.getItem(CONTACT_COOLDOWN_KEY)) || 0;
  } catch {
    lastContactSubmitAt = 0;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const subject = contactForm
        .querySelector('[name="subject"]')
        ?.value.trim();
      const message = contactForm
        .querySelector('[name="message"]')
        ?.value.trim();
      const honey = contactForm.querySelector('[name="_honey"]')?.value;

      // Trap spam bots silently if the honeypot is filled or the form is
      // submitted implausibly fast (no human fills four fields in 4 seconds).
      if (honey) return;
      if (Date.now() - contactFormMountedAt < CONTACT_MIN_FILL_MS) return;

      if (!name || !email || !message) return;

      const consent = contactForm.querySelector('[name="consent"]');
      if (!consent?.checked) return;

      if (Date.now() - lastContactSubmitAt < CONTACT_COOLDOWN_MS) {
        const rateLimitedMsg =
          currentLang === "it"
            ? translations.it.contact_rate_limited
            : translations.en.contact_rate_limited;
        if (formFeedback) {
          formFeedback.className = "form-feedback error";
          formFeedback.textContent = rateLimitedMsg;
        }
        return;
      }

      const sendingText =
        currentLang === "it"
          ? translations.it.contact_sending
          : translations.en.contact_sending;
      const originalBtnText = submitBtnText ? submitBtnText.textContent : "";

      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.textContent = sendingText;
      }
      if (formFeedback) {
        formFeedback.className = "form-feedback";
        formFeedback.textContent = "";
      }

      const recipient = atob(encodedEmail);

      try {
        const response = await fetch(
          `https://formsubmit.co/ajax/${recipient}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              subject: subject || "Messaggio dal portfolio",
              message,
              consent: "yes",
              _subject: `Nuovo messaggio portfolio da ${name}: ${subject || "Contatto"}`,
            }),
          },
        );

        if (response.ok) {
          const successMsg =
            currentLang === "it"
              ? translations.it.contact_success
              : translations.en.contact_success;
          if (formFeedback) {
            formFeedback.className = "form-feedback success";
            formFeedback.textContent = successMsg;
          }
          contactForm.reset();
          lastContactSubmitAt = Date.now();
          try {
            localStorage.setItem(
              CONTACT_COOLDOWN_KEY,
              String(lastContactSubmitAt),
            );
          } catch {
            // Storage may be unavailable (private mode); the in-memory
            // cooldown still applies for this session.
          }
        } else {
          throw new Error("Submission failed");
        }
      } catch (err) {
        const errorMsg =
          currentLang === "it"
            ? translations.it.contact_error
            : translations.en.contact_error;
        if (formFeedback) {
          formFeedback.className = "form-feedback error";
          formFeedback.textContent = errorMsg;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitBtnText) submitBtnText.textContent = originalBtnText;
        }
      }
    });
  }
});
