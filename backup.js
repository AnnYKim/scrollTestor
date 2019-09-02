(function () {
  console.log(" Hello, there! ");

  // 컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  // 트윈 - 타이틀
  var tween_title = new TimelineMax()
    .add(TweenMax.fromTo('#headerImg', 0.3, {
      y: "80%",
      scale: "0.5",
      rotation: 90
    }, {
      y: "0%",
      scale: "0.7",
      rotation: 0

    }))
    .add(TweenMax.fromTo("#jarWrap", 0.3, {
      backgroundPosition: "-390px 0"
    }, {
      backgroundPosition: "856px 0"
    }), 0)
    .add(TweenMax.fromTo("#title", 0.3, {
      y: 0,
      sacle: 1,
      alpha: 1
    }, {
      y: "-50%",
      scale: 0.5,
      alpha: 0
    }), -0.05)



  // 헤더의 scene 생성
  var scene1 = new ScrollMagic.Scene({
      triggerHook: 0,
      duration: "120%"
    })
    .setPin("#header")
    .setTween(tween_title)
    .addIndicators();

  // var stopHere = document.querySelector("#stopHere");
  // var stopPos = stopHere.getBoundingClientRect().top + window;
  // pageYOffset;
  // console.log(stopPos);


  var rect = document.querySelector("#section2").getBoundingClientRect();

  var offset = {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };

  console.log(offset);

  var a = window.innerHeight;
  var b = document.querySelector("#spacer1").offsetHeight;
  var c = document.querySelector(".bgtxt").offsetHeight;
  var d = a + b + (b / 2) - c;
  var last = a + (b * 2) + (a / 2) - c;

  function switchBackText(idx, dir) {
    var text = document.querySelector("#backTxt").children;
    var prevText = text[idx];
    if (dir === "front") {
      var curText = text[idx + 1];
    } else {
      var curText = text[idx - 1];
    }
    var dur = 0.9;
    TweenMax.to(prevText, dur, {
      y: -50,
      opacity: 0,
      onCompleteParams: [prevText],
      onComplete: function (prevText) {
        console.log("!!!!")
      }
    });
    TweenMax.fromTo(
      curText,
      dur, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }
    );
  }

  var bgTextStage = 0;

  var scene2 = new ScrollMagic.Scene({
      triggerHook: 0.44,
      triggerElement: "#backTxt",
      // offset: 80,
      duration: d
      // duration: last
    })
    .setPin("#backTxt", {
      pushFollowers: false
    })
    // .setTween(tween_title)
    .addIndicators();

  // var scene3 = new ScrollMagic.Scene({
  //     triggerHook: 0.44,
  //     offset: 80,
  //     triggerElement: "#spacer2",
  //     duration: 1
  //   }).on('start', function () {
  //     switchBackText(0);
  //   })
  //   // .setTween(tween_title)
  //   .addIndicators();

  var scene4 = new ScrollMagic.Scene({
      triggerHook: 0.44,
      triggerElement: "#spacer2",
      offset: (b / 2),
      duration: (a / 2) + (b / 2)
    })
    // .on('start', function () {

    //   if (bgTextStage < 1) {
    //     switchBackText(0, "front");
    //     bgTextStage = 1;
    //   } else {
    //     switchBackText(1, "back");
    //     bgTextStage = 0;
    //   }
    // })
    .setPin("#backTxt", {
      pushFollowers: false
    })
    // .setTween(tween_title)
    .addIndicators();

  controller.addScene([
    scene1,
    scene2,
    // scene3, 
    scene4
  ]);

}())