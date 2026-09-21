(function() {
  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || getSystemTheme();
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gridwatch-theme', theme);
    updateToggleAriaLabel(theme);
  }

  function updateToggleAriaLabel(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', label);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getCurrentTheme();
    updateToggleAriaLabel(currentTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const activeTheme = getCurrentTheme();
        const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
      });
    });
  });
})();
