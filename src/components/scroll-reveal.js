import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger) 

const scrollReveal = document.querySelector("[data-component='scroll-reveal']");

if (!!scrollReveal) {
  console.log("COMPONENT: SCROLL-REVEAL");
  // backround sticky
  const background = document.querySelector("[data-scroll-reveal='background']");
  gsap.to(background, {
    scrollTrigger: {
      trigger: scrollReveal,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onEnter: () => {
        gsap.set(background, { position: "fixed" })
      },
      onLeave: () => {
        gsap.set(background, { position: "absolute", top: "auto", bottom: "0rem" })
      },
      onEnterBack: () => {
        gsap.set(background, { position: "fixed" })
      },
      onLeaveBack: () => {
        gsap.set(background, { position: "absolute", top: "0rem", bottom: "auto" })
      },
    },
  });

  // text scrub
  const spans = scrollReveal.querySelectorAll(".tag_layout-span");
  const textScrubs = scrollReveal.querySelectorAll("[data-scroll-reveal='text-scrub']");

  spans.forEach((span) => {
    span.style.backgroundImage = "linear-gradient(97deg, #f9763200, #0000ff00 75%, #00000000)";
    span.style.borderColor = "#0000ff00";
  });

  textScrubs.forEach((textScrub) => {
    const track = textScrub.closest("[data-scroll-reveal='text-track']");
    const typeSplit = new SplitType(textScrub, {
      types: "words, chars",
      tagName: "span"
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });
    tl.from(typeSplit.words, {
      opacity: 0.3,
      duration: 0.2,
      ease: "power1.out",
      stagger: {
        each: 0.4,
        onStart: function () {
          const span = this.targets()[0].closest(".tag_layout-span");
          if (!!span) {
            span.style.backgroundImage = "linear-gradient(97deg, #f97632cc, #00fc 75%, #000)";
            span.style.borderColor = "#0000ff";
          }
        },
      },
    });
  });
}