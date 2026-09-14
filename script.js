// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Ferme le menu mobile après un clic sur un lien
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Formulaire de contact : ouvre la messagerie email avec le message pré-rempli
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('msg-name').value.trim();
    const phone = document.getElementById('msg-phone').value.trim();
    const message = document.getElementById('msg-text').value.trim();

    const subject = 'Nouvelle demande via le site — ' + name;
    let body = 'Nom : ' + name + '\n';
    if (phone) body += 'Téléphone : ' + phone + '\n';
    body += '\nMessage :\n' + message;

    const mailto = 'mailto:lacordonnerieduchateau93@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
  });
}