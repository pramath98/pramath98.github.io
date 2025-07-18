const btn = document.querySelector('.email-cta');

btn.addEventListener('mousemove', (e) => {
  // Get size and position of the button
  const rect = btn.getBoundingClientRect();
  // Calculate mouse position relative to the center
  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);
  // Move only a small percent (subtle effect)
  const strength = 0.25; // change for less/more subtle movement
  btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
});

btn.addEventListener('mouseleave', () => {
  // Reset to original position
  btn.style.transform = 'translate(0, 0)';
});
