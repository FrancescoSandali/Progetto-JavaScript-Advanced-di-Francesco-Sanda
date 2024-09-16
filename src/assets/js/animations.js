
//Add file CSS
import '../css/style.css'

//Gsap extension
import { gsap, Power2 } from 'gsap/gsap-core';
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

export const startAnimation = addEventListener('DOMContentLoaded', async ()=>{

    let timeLine = gsap.timeline();

    gsap.to(".text-reveal", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: Power2.easeOut
      });

    timeLine.to(".fade-in", {
        opacity: 1,
        marginTop:0,
        duration:1,
        ease: Power2.easeOut
    })
    timeLine.to(".fade-up",{
        opacity: 1,
        marginTop:0,
        duration:2,
        ease: Power2.easeOut
    })

    gsap.to(".parallax",{
        y:200,
        scrollTrigger:{
            trigger: '.media-image',
            start:"top top",
            end:"bottom bottom",
            scrub:true
        }
    })


})