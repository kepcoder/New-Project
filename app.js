

function select(elem){
    return document.querySelector(elem)
}

function animateMainText(){
    gsap.from('.center h1',{
        y:'10rem',
        opacity:0,
        scale:.6,
        ease:Circ,
        duration:.8,
        stagger:0.1,
        delay:.7
    })
    gsap.from('.center img',{
        rotate:'180deg',
        duration:.7,
        ease:Power3,
        opacity:0,
    })
}

const navAnimation = ()=>{
    document.querySelectorAll('.text-div h1').forEach(function(elem){
        elem.addEventListener('mouseenter',function(){
      
           gsap.to(elem,{
             borderBottom:'2px solid #ccc',
             scale:1.1,
             duration:.3,
             ease:Power3
           })
         
         })
         elem.addEventListener('mouseleave',function(){
      
             gsap.to(elem,{
                 borderBottom:'2px solid transparent',
                 scale:1,
                 duration:.3,
                 ease:Power3
               })
         
         })
     })
}

function menuAOpenClose(){
    select('.fa-bars').addEventListener('click',function(){
    
        gsap.to('.blur',{
            display:'block',
        })
        gsap.to('.sideMenu',{
            x:0
        })
        
    })
    select('.fa-xmark').addEventListener('click',function(){
        
        gsap.to('.blur',{
            display:'none',
        })
        
        gsap.to('.sideMenu',{
            x:'100%'
        })
        
    })
}
function passScrollAnimation(){
    gsap.from('.passes-div h1',{
        y:120,
        scale:.8,
        opacity:0,
        duration:.6,
        scrollTrigger:{
             trigger:'.page2',
             scroller:'.main',
             marker:true,
             start:'top 80%',
             end:'top 15%',
             scrub:true
        }
    })
    gsap.from('.box',{
        y:100,
        scale:.8,
        opacity:0,
        duration:1,
        scrollTrigger:{
             trigger:'.page2',
             scroller:'.main',
             start:'top 40%',
             end:'top 15%',
             scrub:true
        }
    })
}
function videoPlayAfterEnter(){
    select('.page4 .content .right').addEventListener('mouseenter',function(){
        select('.page4 .content .right video').play()
        gsap.to('.page4 .content .right video',{
            opacity:1,
            ease:Circ,
        })
        gsap.to('.fa-circle-play',{
          scale:1.1,
          opacity:0
        })
    })
    select('.page4 .content .right').addEventListener('mouseleave',function(){
        gsap.to('.page4 .content .right video',{
            opacity:0,
            ease:Circ,
        })
        gsap.to('.fa-circle-play',{
            scale:1,
            opacity:1
        })
        select('.page4 .content .right video').pause()
        select('.page4 .content .right video').currentTime = 0
    })
}
function alertKaro(){

    document.querySelectorAll('.box').forEach(function(elem){
       elem.addEventListener('click',function(){
            alert('If you want to buy then contact either on social media or support');
            
        })
    })
}

function scrollAnimationPage4(){

    gsap.from('.page4 h1',{
        y:120,
        scale:.8,
        opacity:0,
        duration:.6,
        scrollTrigger:{
             trigger:'.page4',
             scroller:'.main',
             marker:true,
             start:'top 80%',
             end:'top 15%',
             scrub:true
        }
    })
    gsap.from('.page4 .right',{
        y:100,
        scale:.8,
        opacity:0,
        duration:1,
        scrollTrigger:{
             trigger:'.page4',
             scroller:'.main',
             start:'top 40%',
             end:'top 15%',
             scrub:true
        }
    })
}

function scrollAnimationPage6(){

    gsap.from('.page6 h1',{
        y:120,
        scale:.8,
        opacity:0,
        duration:.6,
        scrollTrigger:{
             trigger:'.page6',
             scroller:'.main',
             marker:true,
             start:'top 80%',
             end:'top 15%',
             scrub:true
        }
    })
}
function animateImage(){
  gsap.from('.profile-div img',{
    y:150,
    opacity:0,
    scrollTrigger:{
        trigger:'.page8',
        scroller:'.main',
        start:'top 90%',
        end:'top 10%',
        scrub:true
    }
  })
  gsap.from('.owner-div .text-div h1',{
    y:120,
    scale:.8,
    duration:.8,
    scrollTrigger:{
        trigger:'.page8',
        scroller:'.main',
        start:'top 90%',
        end:'top 10%',
        scrub:true
    }
  })
}
animateImage()
scrollAnimationPage4()
scrollAnimationPage6()
alertKaro()
videoPlayAfterEnter()
passScrollAnimation()
menuAOpenClose()
animateMainText()
navAnimation()

