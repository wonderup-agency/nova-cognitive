const navbar = document.querySelector("[data-component='navbar']");

if (!!navbar) {
  console.log("COMPONENT: NAVBAR");

  const navbarLinks = navbar.querySelectorAll("[data-navbar='link']");
  let lastScrollY = window.scrollY;

  navbar.style.transform = 'translateY(-100%)';
  setTimeout(() => {
    navbar.removeAttribute('is-loading');
    navbar.style.transform = 'translateY(0)';
  }, 300);

  //initial state
  navbarLinks.forEach((link) => link.classList.remove('is-shrinked-nav'));
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#000';
    navbar.classList.add('is-blue-shadow');
    navbarLinks.forEach((link) => link.classList.add('is-shrinked-nav'));
  }

  // navbar scroll
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.classList.remove('is-blue-shadow');
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.classList.add('is-blue-shadow');
    }
    
    if (currentScrollY > 50) {
      navbar.style.backgroundColor = '#000';
      // navbar.classList.add('is-blue-shadow');
      navbarLinks.forEach((link) => link.classList.add('is-shrinked-nav'));

    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.classList.remove('is-blue-shadow');
      navbarLinks.forEach((link) => link.classList.remove('is-shrinked-nav'));
    }

    lastScrollY = currentScrollY;
  });
}