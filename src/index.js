import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    // Waits 1000ms after typing "First"
    backSpeed:40,
    typeSpeed:40,
    loop:true
});
timeline(document.querySelectorAll('.timeline'));
