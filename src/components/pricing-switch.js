import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const pricingSwitch = document.querySelector("[data-component='pricing-switch']");

if (!!pricingSwitch) {
  const options = pricingSwitch.querySelectorAll("[data-switch='option']");
  const optionBackground = pricingSwitch.querySelector("[data-switch='bg']");
  const monthlyPrices = document.querySelectorAll("[data-periodicity='monthly']");
  const yearlyPrices = document.querySelectorAll("[data-periodicity='yearly']");

  displayPricing("monthly");

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      const option = e.currentTarget;
      const optionWrapper = option.parentElement;

      options.forEach((option) => {
        option.classList.remove("is-active");
      });
      option.classList.add("is-active");

      const state = Flip.getState(optionBackground);
      optionWrapper.appendChild(optionBackground);
      Flip.from(state, { duration: 0.5, ease: "expo.out" });
      gsap.to(optionBackground, { backgroundColor: option.dataset.bgColor, duration: 0.5 });

      displayPricing(option.dataset.value)
    });
  });

  function displayPricing(periodicity) {
    if (periodicity === "monthly") {
      yearlyPrices.forEach((price) => {
        price.classList.add("hide");
        price.setAttribute("aria-hidden", "");
      });
      monthlyPrices.forEach((price) => {
        price.classList.remove("hide");
        price.removeAttribute("aria-hidden");
      });
    } else if (periodicity === "yearly") {
      yearlyPrices.forEach((price) => {
        price.classList.remove("hide");
        price.removeAttribute("aria-hidden");
      });
      monthlyPrices.forEach((price) => {
        price.classList.add("hide");
        price.setAttribute("aria-hidden", "");
      });
    }
  }
}