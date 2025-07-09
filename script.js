const toggleThemeBtn = document.getElementById('toggle-theme');

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Carrega tema salvo no localStorage ou usa preferências do sistema
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
}

toggleThemeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(!isDark);
});

// Ao carregar a página, configura tema correto
loadTheme();
