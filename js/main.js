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
var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})

  // console.log("tween max");

var timeline = new TimelineMax();

timeline.from('.firstHeading',2,{y:1000, opacity:.1, ease: Bounce.easeOut});
timeline.from('#headerImage',2.5,{scale:0, rotation:-500});
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
timeline.from('.fourthHeading',2,{y:-1000, opacity:0, ease: Bounce.easeOut});
timeline.from('#graphImg',1,{opacity:0, scale:.5});

//scrollmagic






})();
