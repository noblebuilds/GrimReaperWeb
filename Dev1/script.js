const missionStatuses = [
  'Mission status: active and prepared.',
  'Mission status: silent movement in progress.',
  'Mission status: perimeter secured.',
  'Mission status: contact likely. Stay disciplined.'
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
