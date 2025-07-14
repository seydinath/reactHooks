window.addEventListener('error', function(e) {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100vw';
  div.style.background = '#b91c1c';
  div.style.color = '#fff';
  div.style.zIndex = '9999';
  div.style.fontSize = '1.2rem';
  div.style.padding = '1rem';
  div.innerText = 'Erreur JS: ' + e.message;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 10000);
});
