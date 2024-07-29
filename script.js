function LocomotiveAndScrollTriggerCodePanCode() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    function BackToTopAnimationUsingLocoMotiveJavaScript() {
        var BackToTop = document.querySelector(".footerItem")
        BackToTop.addEventListener("click", function () {
            console.log("hello")
            locoScroll.scrollTo(0)
        })
    }
    BackToTopAnimationUsingLocoMotiveJavaScript()

}
LocomotiveAndScrollTriggerCodePanCode()

function Loading() {
    window.addEventListener("DOMContentLoaded", function () {
        let tl = gsap.timeline()

        tl.to("#yellow1", {
            top: "-100%",
            delay: 0.3,
            duration: 0.7,
            ease: "export.out"
        })
        tl.from("#yellow2", {
            top: "120%",
            duration: 0.7,
            ease: "export.out",
            delay: 0.6,
        }, "anim")

        tl.to("#loader h1", {
            color: "black",
            delay: 0.5,
            duration: 0.7,
        }, "anim")

        tl.to("#loader", {
            opacity: 0
        })

        tl.to("#loader", {
            display: "none"
        })
        console.log("contant is fully load")
    })
}
Loading()

function HoverAnimation() {
    let elm2 = document.querySelectorAll(".elem")
    let screen = document.querySelector("#part2")
    let index = 0
    elm2.forEach(function (val) {
        val.addEventListener("mouseenter", function () {
            let img = val.getAttribute("data-image")
            screen.style.backgroundImage = `url(${img})`
        })
        val.addEventListener("mouseleave", function () {
            let img = val.getAttribute("data-image")
            screen.style.backgroundImage = `url()`
        })
    })


    // function triggerHover() {
    //     // Simulate mouseenter
    //     let val = elm2[index];
    //     let img = val.getAttribute("data-image");
    //     screen.style.backgroundImage = `url(${img})`;

    //     // Move to the next element
    //     index++;
    //     if (index >= elm2.length) {
    //         index = 0; // Reset to the beginning if end is reached
    //     }

    //     // Simulate mouseleave after a short delay
    //     setTimeout(() => {
    //         screen.style.backgroundImage = `url()`;
    //     }, 3000); // Adjust the delay as needed (1 second in this example)
    // }

    // // Initial trigger
    // triggerHover();

    // // Set interval to repeat the hover effect
    // let intervalId = setInterval(triggerHover, 2000);

}
HoverAnimation()

function NavbarColorChangeByEachSection() {

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#part2",
            scroller: "#main",
            start: "top top",
            end: "1%",
            scrub: true
        }
    })

    tl2.to("svg path,#nav h2,#nav i", {
        fill: "#fff",
        color: "white",
        duration: 0.2,
        ease: "sine.out"
    })

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#part3",
            scroller: "#main",
            start: "top top",
            end: "-30%",
            scrub: true
        }
    })

    tl3.to("svg path,#nav h2,#nav i", {
        fill: "#000",
        color: "black",
        duration: 0.2,
        ease: "sine.in"
    })
}
NavbarColorChangeByEachSection()

function NavbarHiddenAnimation() {

    var cliter = 0
    function animtaion() {
        let tl = gsap.timeline()
        let tl2 = gsap.timeline()

        tl2.to(".chgn", {
            transform: "rotate(-90deg)",
            duration: 1,
            ease: "circ.out",
        }, "hello")

        tl.to(".hidden h2", {
            x: 50,
            duration: 0.3,
            opacity: 0,
            ease: "Power.out",
            stagger:0.1
        }, "anim")

        tl.pause()
        tl2.to("#full", {
            transform: "scale(1)",
            duration: 0.5,
            opacity: 1,
            ease: "circ.out"
        }, "hello")
        tl.from(".fullcontainer h2",{
            x:100,
            duration:0.5,
            stagger:0.2,
            opacity:0
        })
        tl.from(".full-bottom h1",{
            opacity:0,
            duration:0.4,
            stagger:0.1
        })
        tl2.pause()

        // tl.to(".hidden,.vissible", {
        //     x: 40,
        //     duration: 0.4,
        //     opacity: 0,
        //     ease: "circ.out",
        //     stagger:0.4
        // }, "anim")
        

        // tl.to(".vissible", {
        //     x: 230,
        //     duration: 1,
        //     ease: "circ.out",
        // }, "anim")


        var btn = document.querySelector(".chgn")
        btn.addEventListener("click", function () {
            if (tl.paused() || cliter == 0) {
                tl2.play()
                tl.play()
                cliter = 1
            }
            else {
                tl2.reverse()
                tl.reverse()
                cliter = 0
            }
        })
    }

    function navbarHeightChangingAnimation() {

        let tl4 = gsap.timeline()
        tl4.to("#nav", {
            scrollTrigger: {
                trigger: "#nav",
                start: "10%",
                scroller: "#main",
                scrub: true,
                ease: "sine.out",
            },
            padding: "15px 50px"
        })
    }
    navbarHeightChangingAnimation()

    animtaion()

}
NavbarHiddenAnimation()

function footerFlootingAnimation() {

    var tl5 = gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: ".footerdiv",
            start: "bottom 95%",
            end: "bottom 90%",
            scrub: true
        }
    })
    tl5.from("#footerbottom", {
        y: 10,
        duration: 1,
        opacity: 0,
        ease: "power3.out"
    })

    tl5.from(".footerItem", {
        y: 20,
        duration: 1,
        opacity: 0,
        ease: "power3.out"
    })
}
footerFlootingAnimation()
