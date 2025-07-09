const toggleThemeBtn = document.getElementById('toggle-theme');

function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    toggleThemeBtn.textContent = '☀️'; // opcional: mudar ícone para sol no modo escuro
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    toggleThemeBtn.textContent = '🌙'; // ícone lua para modo claro
  }
}

// Carrega tema salvo no localStorage ou usa preferência do sistema
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
}

// Evento de clique para alternar tema
toggleThemeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(!isDark);
});

// Configura tema ao carregar a página
loadTheme();
