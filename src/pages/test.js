import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);


gsap.to(".test", {
  duration: 1,
  backgroundColor: "red",
  ease: "expo.out",
  onComplete: () => {
    console.log("complete");
  }
});