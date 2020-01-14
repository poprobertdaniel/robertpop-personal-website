window.addEventListener('scroll', function(e) {
  if (window.scrollY > 70) {
    document.documentElement.style.setProperty(
      '--navigation-text',
      'var(--default-black-text)'
    )
    document.documentElement.style.setProperty(
      '--navigation-background',
      '#fff'
    )
  } else {
    document.documentElement.style.setProperty(
      '--navigation-text',
      'var(--white)'
    )
    document.documentElement.style.setProperty(
      '--navigation-background',
      'transparent'
    )
  }
})
