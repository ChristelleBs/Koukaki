document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne toutes les sections à observer
  const sections = document.querySelectorAll('.banner, .story#story, #studio');

  // Créé un observer pour chaque section
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Si la section est visible, ajoute la classe 'show', sinon, retirez-la
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Arrête de surveiller la section une fois qu'elle est apparue
      }
    });
  }, { threshold: 0.5 }); // Se déclenche lorsque 50% de la section est visible

  // Pour chaque section, commence à observer
  sections.forEach(section => {
    observer.observe(section);
  });
});



