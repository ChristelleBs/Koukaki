//Effet fade in sur les sections
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne toutes les sections à observer
  const sections = document.querySelectorAll(".banner, .story#story, #studio");

  // Créer un observer pour chaque section
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Si la section est visible, ajoute la classe 'show', sinon, retirez-la
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Arrête de surveiller la section une fois qu'elle est apparue
        }
      });
    },
    { threshold: 0.5 }
  ); // Se déclenche lorsque 50% de la section est visible

  // Pour chaque section, commence à observer
  sections.forEach((section) => {
    observer.observe(section);
  });
});

//Déplacement des fleurs du footer
document.addEventListener("DOMContentLoaded", function () {
  let footer = document.querySelector('.site-footer'); // Sélectionnez le footer
  let oscarsSection = document.querySelector('.oscars'); // Sélectionnez la section .oscars

  // Créez un nouvel élément pour la première fleur
  let firstFlower = document.createElement('div');
  firstFlower.classList.add('first-fleur');

  // Accédez au contenu du pseudo-élément ::before du footer
  let footerBeforeContent = window.getComputedStyle(footer, '::before').getPropertyValue('content');

  // Vérifiez si les éléments sont trouvés et que le contenu du pseudo-élément ::before est présent
  if (oscarsSection && footerBeforeContent) {
      // Ajoutez le contenu du pseudo-élément ::before à la première fleur
      firstFlower.textContent = footerBeforeContent;

      // Insérez la première fleur avant l'image dans la section .oscars
      oscarsSection.insertBefore(firstFlower, oscarsSection.querySelector('img'));
  }
});
