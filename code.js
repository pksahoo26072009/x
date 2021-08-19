var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cardboard1=createSprite(70,60,100,5);
cardboard1.shapeColor="black";

var cardboard2=createSprite(80,17,5,90);
cardboard2.shapeColor="black";

var cardboard3=createSprite(20,40,5,40);
cardboard3.shapeColor="black";

var cardboard4=createSprite(33,20,30,5);
cardboard4.shapeColor="black";

var cardboard5=createSprite(160,8,5,50);
cardboard5.shapeColor="black";

var cardboard6=createSprite(180,30,40,5);
cardboard6.shapeColor="black";

var cardboard7=createSprite(200,53,5,50);
cardboard7.shapeColor="black";

var cardboard8=createSprite(225,60,50,5);
cardboard8.shapeColor="black";

var cardboard9=createSprite(300,10,5,200);
cardboard9.shapeColor="black";

var cardboard10=createSprite(268,110,70,5);
cardboard10.shapeColor="black";

var cardboard11=createSprite(318,80,40,5);
cardboard11.shapeColor="black";

var cardboard12=createSprite(340,63,5,40);
cardboard12.shapeColor="black";

var cardboard13=createSprite(0,100,150,5);
cardboard13.shapeColor="black";

var cardboard14=createSprite(30,130,5,60);
cardboard14.shapeColor="black";

var cardboard15=createSprite(40,200,80,5);
cardboard15.shapeColor="black";

var cardboard16=createSprite(80,200,5,80);
cardboard16.shapeColor="black";

var cardboard17=createSprite(103,160,50,5);
cardboard17.shapeColor="black";

var cardboard18=createSprite(130,138,5,50);
cardboard18.shapeColor="black";

var cardboard19=createSprite(103,240,50,5);
cardboard19.shapeColor="black";

var cardboard20=createSprite(155,200,50,5);
cardboard20.shapeColor="black";

var cardboard21=createSprite(180,238,5,80);
cardboard21.shapeColor="black";

var cardboard22=createSprite(108,280,150,5);
cardboard22.shapeColor="black";

var cardboard23=createSprite(35,260,5,40);
cardboard23.shapeColor="black";

var cardboard24=createSprite(80,312,5,70);
cardboard24.shapeColor="black";

var cardboard25=createSprite(63,350,40,5);
cardboard25.shapeColor="black";

var cardboard26=createSprite(0,315,60,5);
cardboard26.shapeColor="black";

var cardboard27=createSprite(206,230,50,5);
cardboard27.shapeColor="black";

var cardboard28=createSprite(230,279,5,100);
cardboard28.shapeColor="black";

var cardboard29=createSprite(225,330,100,5);
cardboard29.shapeColor="black";

var cardboard30=createSprite(273,352,5,50);
cardboard30.shapeColor="black";

var cardboard31=createSprite(220,389,5,20);
cardboard31.shapeColor="black";

var cardboard32=createSprite(175,140,5,50);
cardboard32.shapeColor="black";

var cardboard33=createSprite(255,162,155,5);
cardboard33.shapeColor="black";

var cardboard34=createSprite(330,190,5,60);
cardboard34.shapeColor="black";

var cardboard35=createSprite(321,220,20,5);
cardboard35.shapeColor="black";

var cardboard36=createSprite(313,310,5,180);
cardboard36.shapeColor="black";

var cardboard37=createSprite(385,265,60,5);
cardboard37.shapeColor="black";

var cardboard38=createSprite(345,185,30,5);
cardboard38.shapeColor="black";

var cardboard39=createSprite(360,197,5,30);
cardboard39.shapeColor="black";

var cardboard40=createSprite(2,180,5,450);
cardboard40.shapeColor="black";

var cardboard41=createSprite(398,220,5,450);
cardboard41.shapeColor="black";

var cardboard42=createSprite(130,1,450,5);
cardboard42.shapeColor="black";

var cardboard43=createSprite(20,398,400,5);
cardboard43.shapeColor="black";

var cardboard44=createSprite(340,398,150,5);
cardboard44.shapeColor="black";

var sophia=createSprite(380,15,18,18);
sophia.shapeColor="purple";

var cup=createSprite(240,400,18,18);
cup.shapeColor="blue";

function draw() {

background("pink");

sophia.velocityX=0;
sophia.velocityY=0;

if (keyDown("UP_ARROW")){
sophia.velocityX=0;
sophia.velocityY=-4;
}

if (keyDown("DOWN_ARROW")){
sophia.velocityX=0;
sophia.velocityY=4;
}

if (keyDown("LEFT_ARROW")){
sophia.velocityX=-4;
sophia.velocityY=0;
}

if (keyDown("RIGHT_ARROW")){
sophia.velocityX=4;
sophia.velocityY=0;
}

createEdgeSprites();

sophia.bounceOff(edges);
sophia.bounceOff(cardboard1);
sophia.bounceOff(cardboard2);
sophia.bounceOff(cardboard3);
sophia.bounceOff(cardboard4);
sophia.bounceOff(cardboard5);
sophia.bounceOff(cardboard6);
sophia.bounceOff(cardboard7);
sophia.bounceOff(cardboard8);
sophia.bounceOff(cardboard9);
sophia.bounceOff(cardboard10);
sophia.bounceOff(cardboard11);
sophia.bounceOff(cardboard12);
sophia.bounceOff(cardboard13);
sophia.bounceOff(cardboard14);
sophia.bounceOff(cardboard15);
sophia.bounceOff(cardboard16);
sophia.bounceOff(cardboard17);
sophia.bounceOff(cardboard18);
sophia.bounceOff(cardboard19);
sophia.bounceOff(cardboard20);
sophia.bounceOff(cardboard21);
sophia.bounceOff(cardboard22);
sophia.bounceOff(cardboard23);
sophia.bounceOff(cardboard24);
sophia.bounceOff(cardboard25);
sophia.bounceOff(cardboard26);
sophia.bounceOff(cardboard27);
sophia.bounceOff(cardboard28);
sophia.bounceOff(cardboard29);
sophia.bounceOff(cardboard30);
sophia.bounceOff(cardboard31);
sophia.bounceOff(cardboard32);
sophia.bounceOff(cardboard33);
sophia.bounceOff(cardboard34);
sophia.bounceOff(cardboard35);
sophia.bounceOff(cardboard36);
sophia.bounceOff(cardboard37);
sophia.bounceOff(cardboard38);
sophia.bounceOff(cardboard39);
sophia.bounceOff(cardboard40);
sophia.bounceOff(cardboard41);
sophia.bounceOff(cardboard42);
sophia.bounceOff(cardboard43);
sophia.bounceOff(cardboard44);

if (sophia.collide(cup))
{
 background("white"); 
}



drawSprites();


}



















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
