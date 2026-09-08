const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Nouveau projet — ${data.get('service')}`);
  const body = encodeURIComponent(`Prénom : ${data.get('prenom')}\nNom : ${data.get('nom')}\nE-mail : ${data.get('email')}\nService : ${data.get('service')}\n\nMessage :\n${data.get('message')}`);
  document.getElementById('form-note').textContent = 'Votre logiciel e-mail va s’ouvrir : vérifiez le message puis cliquez sur Envoyer.';
  window.location.href = `mailto:youssef.naitikkan@outlook.com?subject=${subject}&body=${body}`;
});
