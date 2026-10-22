/**
 * Yash Medicos - Modern Healthcare & Wellness Website
 * Business: Yash Medicos | Golegaon Bk, Sillod 431112 | +91 9860384278
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Pharmacy Contact Constants
  const PHARMACY_PHONE = '9860384278';
  const WHATSAPP_BASE = 'https://wa.me/91' + PHARMACY_PHONE;

  /* ==========================================================================
     1. Sticky Header & Back-to-Top Button on Scroll
     ========================================================================== */
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header shadow & shrink
    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     2. Mobile Drawer Navigation
     ========================================================================== */
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  const openDrawer = () => {
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  /* ==========================================================================
     3. ScrollSpy (Active Navigation Link Highlighting)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id], header[id]');
  const desktopNavLinks = document.querySelectorAll('.nav__link');

  const onScrollSpy = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScrollSpy, { passive: true });

  /* ==========================================================================
     4. Service Category Filter Tabs
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ==========================================================================
     5. Interactive WhatsApp Quick-Order / Prescription Builder
     ========================================================================== */
  const whatsappOrderForm = document.getElementById('whatsappOrderForm');

  if (whatsappOrderForm) {
    whatsappOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('orderPatientName').value.trim();
      const phone = document.getElementById('orderContactNumber').value.trim();
      const service = document.getElementById('orderServiceType').value;
      const locality = document.getElementById('orderVillage').value.trim() || 'Golegaon Bk / Sillod';
      const medicines = document.getElementById('orderMedicineList').value.trim();

      if (!name || !phone || !medicines) {
        alert('Please fill in your name, contact number, and required medicines or prescription note.');
        return;
      }

      // Format WhatsApp message with clean markdown
      const formattedMessage = 
`*NEW MEDICINE ORDER / INQUIRY*
*Yash Medicos - Golegaon Bk, Sillod*
----------------------------------------
*Patient Name:* ${name}
*Contact Phone:* ${phone}
*Service / Category:* ${service}
*Locality / Village:* ${locality}

*Medicines / Prescription Request:*
${medicines}
----------------------------------------
_Sent from Yash Medicos Official Website_`;

      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappURL = `${WHATSAPP_BASE}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    });
  }

  /* ==========================================================================
     6. FAQ Accordion
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ==========================================================================
     7. Contact Form Handling & Validation
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const sendViaWhatsAppBtn = document.getElementById('sendViaWhatsAppBtn');

  // Input fields
  const nameInput = document.getElementById('contactName');
  const phoneInput = document.getElementById('contactPhone');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');

  // Error spans
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  // Validation helpers
  const validatePhone = (phone) => {
    // Basic 10-digit Indian mobile validation
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
    return /^[6-9]\d{9}$/.test(cleaned) || cleaned.length >= 10;
  };

  const validateEmail = (email) => {
    if (!email) return true; // Optional field
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your full name.';
      isValid = false;
    }

    if (!phoneInput.value.trim()) {
      phoneError.textContent = 'Please enter your phone number.';
      isValid = false;
    } else if (!validatePhone(phoneInput.value.trim())) {
      phoneError.textContent = 'Please enter a valid 10-digit contact number.';
      isValid = false;
    }

    if (emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!subjectInput.value) {
      subjectError.textContent = 'Please select a service or inquiry type.';
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please write your message or query.';
      isValid = false;
    } else if (messageInput.value.trim().length < 5) {
      messageError.textContent = 'Message is too short (min 5 characters).';
      isValid = false;
    }

    return isValid;
  };

  // Submit via Formspree / Webhook or Fallback
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        showAlert('Please correct the highlighted errors before submitting.', 'error');
        return;
      }

      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending message...';

      // NOTE FOR OWNER:
      // To connect to a live email service such as Formspree, replace the dummy URL with your Formspree endpoint:
      // e.g. "https://formspree.io/f/YOUR_FORM_ID"
      const FORMSPREE_ENDPOINT = '';

      if (FORMSPREE_ENDPOINT) {
        // Send via live Formspree endpoint
        const formData = new FormData(contactForm);
        fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        })
        .then(response => {
          if (response.ok) {
            showAlert('Thank you! Your inquiry has been received. Yash Medicos will contact you shortly.', 'success');
            contactForm.reset();
          } else {
            showAlert('Could not send via form service. Please click "Send via WhatsApp" below for instant reply.', 'error');
          }
        })
        .catch(() => {
          showAlert('Network error. Please use WhatsApp or call us directly at 9860384278.', 'error');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        });
      } else {
        // If no third-party form service endpoint is linked, truthfully notify user
        setTimeout(() => {
          showAlert(
            'Inquiry details validated! A web form email service (e.g. Formspree/Web3Forms) has not yet been connected to this static site. Please click the green "Send via WhatsApp" button below to deliver your message immediately to Yash Medicos (+91 9860384278)!',
            'success'
          );
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 400);
      }
    });
  }

  // Instant Send via WhatsApp button inside Contact form
  if (sendViaWhatsAppBtn) {
    sendViaWhatsAppBtn.addEventListener('click', () => {
      const name = nameInput.value.trim() || 'A valued customer';
      const phone = phoneInput.value.trim() || 'Not provided';
      const service = subjectInput.value || 'General Inquiry';
      const msg = messageInput.value.trim() || 'Hello, I would like to inquire about medicine availability and services.';

      const formatted = 
`*NEW INQUIRY FROM WEBSITE*
*Yash Medicos - Golegaon Bk, Sillod*
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
*Message:*
${msg}
----------------------------------------
_Please reply with guidance & pricing._`;

      const encoded = encodeURIComponent(formatted);
      window.open(`${WHATSAPP_BASE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    });
  }

  const showAlert = (message, type) => {
    if (!formAlert) return;
    formAlert.style.display = 'block';
    formAlert.className = `form-alert form-alert--${type}`;
    formAlert.textContent = message;

    // Scroll to alert smoothly
    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  /* ==========================================================================
     8. Dynamic Current Year in Footer
     ========================================================================== */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
