var cursor=document.querySelector(".cursor");function rotateCardOnMouseEnter(e){let r;function t(t){let o=t.clientX,n=t.clientY,a=o-r.x,c=n-r.y,d={x:a-r.width/5,y:c-r.height/5},s=Math.sqrt(d.x**2+d.y**2);e.style.transform=`
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${d.y/100},
        ${-d.x/100},
        0,
        ${2.5*Math.log(s)}deg
      )
    `}e.addEventListener("mouseenter",()=>{r=e.getBoundingClientRect(),document.addEventListener("mousemove",t)}),e.addEventListener("mouseleave",()=>{document.removeEventListener("mousemove",t),e.style.transform="",e.style.background=""})}document.querySelector(".clip__inner").addEventListener("mousemove",e=>{var r=e.clientX,t=e.clientY;gsap.to(".cursor",.5,{duration:0,x:r,y:t})}),document.querySelector(".clip__inner").addEventListener("mouseenter",()=>{gsap.to(".cursor",.5,{scale:1,ease:"expo.inOut"})}),document.querySelector(".clip__inner").addEventListener("mouseleave",()=>{gsap.to(".cursor",.5,{scale:0,ease:"expo.inOut"})});const $card1=document.querySelector(".img"),$card2=document.querySelector(".img2"),$card3=document.querySelector(".img3"),$card4=document.querySelector(".img4"),$card5=document.querySelector(".img5"),$card6=document.querySelector(".img6"),$card7=document.querySelector(".img7");$card8=document.querySelector(".img8"),rotateCardOnMouseEnter($card1),rotateCardOnMouseEnter($card2),rotateCardOnMouseEnter($card3),rotateCardOnMouseEnter($card4),rotateCardOnMouseEnter($card5),rotateCardOnMouseEnter($card6),rotateCardOnMouseEnter($card7),rotateCardOnMouseEnter($card8);