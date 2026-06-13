/**
 * EDITORIAL PORTFOLIO — Interactions & Animations
 */

(function () {
  'use strict';

  // ── Theme ─────────────────────────────────────
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ── Navigation ────────────────────────────────
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link');

  // Scrolled state for pill shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle && navToggle.classList.remove('active');
    });
  });

  // Highlight active nav link by current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
      }
    });
  });

  // ── System Flow — page-based active node ──────
  const flowNodes = document.querySelectorAll('.flow-node');
  const pageLayerMap = {
    'index.html':      'home',
    '':                'home',
    'experience.html': 'experience',
    'projects.html':   'projects',
    'skills.html':     'skills',
    'education.html':  'education',
    'contact.html':    'contact',
  };

  const activePage = pageLayerMap[currentPage] || 'home';
  flowNodes.forEach(node => {
    node.classList.toggle('active', node.getAttribute('data-layer') === activePage);
  });

  // ── Intersection Observer — scroll reveals ────
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.08) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: [0, 0.08, 0.25],
    rootMargin: '0px 0px -40px 0px',
  });

  document.querySelectorAll('[data-scroll]').forEach(el => {
    scrollObserver.observe(el);
  });

  // Trigger for elements already in view on load
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-scroll]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  });

  // ── Project Cards — expand / collapse ─────────
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;

      const isExpanded = item.classList.contains('expanded');

      // Collapse all
      projectItems.forEach(p => p.classList.remove('expanded'));

      if (!isExpanded) {
        item.classList.add('expanded');
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 80);
      }
    });
  });

  // ── Footer year ───────────────────────────────
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
