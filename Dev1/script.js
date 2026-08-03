const missionStatuses = [
  'Mission status: active and prepared.',
  'Mission status: silent movement in progress.',
  'Mission status: perimeter secured.',
  'Mission status: Engaging target, all systems operational.',
  'Mission status: Awaiting further instructions.',
  'Mission status: Mission accomplished, returning to base.',
  'Mission status: Sweeping remaining threats, all clear.',
  'Mission status: Reconnaissance complete, data transmitted.',
  'Mission status: Stealth mode activated, no detection.',
  'Mission status: All units accounted for, mission success.'
];

const missionStatusEl = document.getElementById('mission-status');
const currentDateEl = document.getElementById('current-date');

if (missionStatusEl) {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % missionStatuses.length;
    missionStatusEl.textContent = missionStatuses[index];
  }, 3000);
}

if (currentDateEl) {
  const now = new Date();
  currentDateEl.textContent = `Updated ${now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })}`;
}

const carousel = document.querySelector('.team-carousel');
if (carousel) {
  const images = Array.from(carousel.querySelectorAll('.carousel-image'));
  const buttons = Array.from(carousel.querySelectorAll('.carousel-btn'));
  let activeIndex = 0;

  const showImage = (index) => {
    images.forEach((img, imgIndex) => {
      img.classList.toggle('active', imgIndex === index);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.getAttribute('data-direction');
      activeIndex = direction === 'next'
        ? (activeIndex + 1) % images.length
        : (activeIndex - 1 + images.length) % images.length;
      showImage(activeIndex);
    });
  });

  if (images.length > 0) {
    showImage(activeIndex);
  }
}
