const copyToClipboard = document.querySelector("[data-component='copy-url']");

if (!!copyToClipboard) {
  console.log("COMPONENT: COPY-TO-CLIPBOARD");

  const alert = copyToClipboard.querySelector("[data-copy-url='alert']");

  // initial state
  alert.classList.remove('is-visible');
  alert.setAttribute('aria-hidden', 'true');
  alert.style.cursor = 'default';  
  
  // copy to clipboard
  const currentUrl = window.location.href;
  copyToClipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert.classList.add('is-visible');
      alert.setAttribute('aria-hidden', 'false');
      setTimeout(() => {
        alert.classList.remove('is-visible');
        alert.setAttribute('aria-hidden', 'true');
      }, 1000);
    });
  });
}