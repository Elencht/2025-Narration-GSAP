

gsap.registerPlugin(ScrollTrigger, Observer,ScrollToPlugin, Draggable, MotionPathPlugin);


/* GSAP ANIMATION */ 

gsap.from("#anim_introG",{
    x: '-300px',
    rotation: -360,

    duration: 5,
})

gsap.from("#anim_introD",{
    x: '300px',
    rotation: 360,

    delay: 0.5,
    duration: 5,
})



/** GSAP ANIMATION*/
gsap.from('#block2',{

    scrollTrigger:{
         trigger:"#section3",
         markers: true,
         start:'top 60%',
         end: 'top 20%',
         toggleActions:'play none reverse reset', 
         scrub:1,
    },

    rotation:100,
    x:'-100vw',
    duration:2,
})

/**GSAP ANIMATION section 3


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"section3",
        markers: true,
        start:"top 60%",
        end:"top 20%",
        id:"zone-section3",
        toggleActions: "play none reverse reset"
        
    }






    //repeat: -1,
    //yoyo: true,

})

tl.to('animation', {x:100,stagger:0.1})
.to('animation',{y:100,stagger:0.1})
.to('animation',{x:-100,stagger:0.1})
.to('animation',{y:-100,stagger:0.1}) */



