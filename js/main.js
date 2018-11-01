// https://github.com/dianadi09/pureJSLightbox

(() => {
  console.log("mainjs");

// init controller
// var controller = new ScrollMagic.Controller();

// // loop through all elements
// $('#graphImg').each(function() {
  
//   // build a tween
//   var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});

//   // build a scene
//   var scene = new ScrollMagic.Scene({
//     triggerElement: this
//   })
//   .setTween(tween) // trigger a TweenMax.to tween
//   .addTo(controller);
  
// });
document.querySelector(".keyFeatureHeading").style.visibility = "hidden"; 
document.querySelector(".keyFeatureImg1").style.visibility = "hidden"; 
document.querySelector(".keyFeatureImg2").style.visibility = "hidden"; 
document.querySelector("#keyFeatureSvg2").style.visibility = "hidden"; 
document.querySelector(".keyFeatureImg3").style.visibility = "hidden"; 
document.querySelector("#keyFeatureSvg3").style.visibility = "hidden"; 
document.querySelector(".whyResponsiveHeading").style.visibility = "hidden";
document.querySelector(".whyResponsiveImg1").style.visibility = "hidden"; 
document.querySelector("#whyResponsiveSvg1").style.visibility = "hidden"; 
document.querySelector(".whyResponsiveImg2").style.visibility = "hidden"; 
document.querySelector("#whyResponsiveSvg2").style.visibility = "hidden"; 

var waypoint = new Waypoint({
  element: document.querySelector('.keyFeatureHeading'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
    a();
document.querySelector(".keyFeatureHeading").style.visibility = "visible";
document.querySelector(".keyFeatureImg1").style.visibility = "visible"; 
document.querySelector(".keyFeatureImg2").style.visibility = "visible"; 
document.querySelector("#keyFeatureSvg2").style.visibility = "visible"; 
document.querySelector(".keyFeatureImg3").style.visibility = "visible"; 
document.querySelector("#keyFeatureSvg3").style.visibility = "visible"; 
document.querySelector(".whyResponsiveHeading").style.visibility = "visible";
document.querySelector(".whyResponsiveImg1").style.visibility = "visible"; 
document.querySelector("#whyResponsiveSvg1").style.visibility = "visible"; 
document.querySelector(".whyResponsiveImg2").style.visibility = "visible"; 
document.querySelector("#whyResponsiveSvg2").style.visibility = "visible"; 
    this.destroy();
  }, offset: 370
  
})

document.querySelector(".fourthHeading").style.visibility = "hidden";
document.querySelector("#graphImg").style.visibility = "hidden";  

var waypoint = new Waypoint({
  element: document.querySelector('.whyResponsiveHeading'),
  handler: function(direction) {
    console.log('Scrolled to waypoint2!')
    b();

document.querySelector(".fourthHeading").style.visibility = "visible";
document.querySelector("#graphImg").style.visibility = "visible"; 
    this.destroy();
  }, offset: -30
})

  // console.log("tween max");

var timeline = new TimelineMax();

timeline.from('.firstHeading',1,{y:1000, opacity:.1, ease: Bounce.easeOut});
timeline.from('#headerImage',2.5,{scale:0, rotation:-500});


function a(){
timeline.from('.keyFeatureHeading',2,{x:-1000, opacity:.1, ease: Bounce.easeOut});
timeline.from('.keyFeatureImg1',.5,{opacity: 0});
timeline.from('#keyFeatureSvg1',.2,{opacity: 0});
timeline.from('.keyFeatureImg2',.5,{opacity: 0});
timeline.from('#keyFeatureSvg2',.2,{opacity: 0});
timeline.from('.keyFeatureImg3',.5,{opacity: 0});
timeline.from('#keyFeatureSvg3',.2,{opacity: 0});
timeline.from('.whyResponsiveHeading',2,{x:1000, opacity:.1, ease: Bounce.easeOut});
timeline.from('.whyResponsiveImg1',.5,{opacity: 0});
timeline.from('#whyResponsiveSvg1',.2,{opacity: 0});
timeline.from('.whyResponsiveImg2',.5,{opacity: 0});
timeline.from('#whyResponsiveSvg2',.2,{opacity: 0});
}

function b(){
  timeline.from('.fourthHeading',2,{y:-1000, opacity:0, ease: Bounce.easeOut});
  timeline.from('#graphImg',1,{opacity:0, scale:.5});
}






//scrollmagic






})();
