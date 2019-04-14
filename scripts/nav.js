window.addEventListener('scroll', function(e) {
  if (window.scrollY > 60) {
      document.documentElement.style.setProperty('--navigation-background', '#fff');
  } else {
    document.documentElement.style.setProperty('--navigation-background', 'transparent');
  }
});
