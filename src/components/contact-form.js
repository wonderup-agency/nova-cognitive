const contactForm = document.querySelector("[data-component='contact-form']");

if(!!contactForm) {
  console.log("COMPONENT: CONTACT-FORM")

  const radios = contactForm.querySelectorAll('input[type="radio"][name="Role-in-inquiry"]');
  const otherRoleTrigger = contactForm.querySelector("[data-contact-form='trigger-other-field']");
  const otherRoleWrapper = contactForm.querySelector("[data-contact-form='other-role']").parentElement;
  const otherRoleInput = otherRoleWrapper.querySelector("input");

  hideOtherRoleField();

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (otherRoleTrigger.checked) {
        showOtherRoleField();
    } else {
        hideOtherRoleField();
      }
    });
  });

  function showOtherRoleField() {
    otherRoleWrapper.setAttribute("aria-hidden", "false");
    otherRoleWrapper.style.display = "block";
    otherRoleInput.value = "";
    otherRoleInput.focus();
  }
  function hideOtherRoleField() {
    otherRoleWrapper.setAttribute("aria-hidden", "true");
    otherRoleWrapper.style.display = "none";
    otherRoleInput.value = "none";
  }
}