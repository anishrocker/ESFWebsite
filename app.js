const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  for (const candidate of tabs) {
    const active = candidate === tab;
    candidate.setAttribute('aria-selected', String(active));
    candidate.tabIndex = active ? 0 : -1;
    document.getElementById(candidate.getAttribute('aria-controls')).hidden = !active;
  }
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next], true);
    }
  });
});

const joinDialog = document.querySelector('#join-dialog');
document.querySelectorAll('[data-join]').forEach(button => {
  button.addEventListener('click', () => {
    closeMenu();
    joinDialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelectorAll('[data-close]').forEach(button => {
    button.addEventListener('click', () => dialog.close());
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
});

const photoButtons = [...document.querySelectorAll('[data-photo]')];
const photoDialog = document.querySelector('#photo-dialog');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
let photoIndex = 0;
function displayPhoto(index) {
  photoIndex = (index + photoButtons.length) % photoButtons.length;
  const button = photoButtons[photoIndex];
  lightboxImage.src = button.dataset.photo;
  lightboxImage.alt = button.querySelector('img').alt;
  lightboxCaption.textContent = button.dataset.caption;
  document.querySelector('#photo-count').textContent = `${photoIndex + 1} / ${photoButtons.length}`;
}
photoButtons.forEach((button, index) => button.addEventListener('click', () => {
  displayPhoto(index);
  photoDialog.showModal();
  document.body.classList.add('dialog-open');
}));
document.querySelector('#photo-prev').addEventListener('click', () => displayPhoto(photoIndex - 1));
document.querySelector('#photo-next').addEventListener('click', () => displayPhoto(photoIndex + 1));
photoDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    displayPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
