(function() {
  const savedTheme = localStorage.getItem('gridwatch-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
})();
