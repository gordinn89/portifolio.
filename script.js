const toggleThemeBtn = document.getElementById('toggle-theme');

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  // Emoji fixo da lua (🌗) em qualquer tema
  toggleThemeBtn.textContent = '🌗';
}

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

loadTheme();

document.querySelectorAll('.toggle-habilidades-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetDiv = document.getElementById(targetId);
    if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
      targetDiv.style.display = 'flex'; // Usando flex para alinhar texto + gráfico lado a lado
      btn.textContent = 'Clique aqui para esconder as habilidades';
    } else {
      targetDiv.style.display = 'none';
      btn.textContent = 'Clique aqui para ver as habilidades';
    }
  });
});

// Função para criar gráfico de pizza com Chart.js
function criarGraficoPizza(id, percentual, cor) {
  const canvas = document.getElementById(id);
  canvas.width = 100;   // Tamanho menor para caber melhor no layout
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Habilidade', ''],
      datasets: [{
        data: [percentual, 100 - percentual],
        backgroundColor: [cor, '#ddd'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '75%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      maintainAspectRatio: false
    }
  });
}

// Criando os gráficos para Kauan
criarGraficoPizza('chart-kauan-html', 85, '#0077ff');
criarGraficoPizza('chart-kauan-css', 80, '#0077ff');
criarGraficoPizza('chart-kauan-js', 75, '#0077ff');

// Criando os gráficos para Marcos
criarGraficoPizza('chart-marcos-portugol', 90, '#0077ff');
criarGraficoPizza('chart-marcos-robotica', 80, '#0077ff');
criarGraficoPizza('chart-marcos-arduino', 85, '#0077ff');
