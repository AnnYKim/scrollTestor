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
  var c = document.querySelector(".background-text").offsetHeight;
  var d = a + b - c;
  var last = a + (b * 2) + (a / 2) - c;

  function switchBackText(idx) {
    var text = document.querySelector("#backTxt").children;
    var prevText = text[idx];
    var curText = text[idx + 1];
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

  // switchBackText(0);
  var body = document.document;
  var background = document.querySelector(".background");

  var colors = {
    top: "#9175e0",
    bottom: "#7861ba"
  }

  var colors = {
    section1: {
      top: "#c0edc4",
      bottom: "#f3c0c6"
    },
    section2: {
      top: "#b6be3d",
      bottom: "#24bba3"
    },
    section3: {
      top: "#9175e0",
      bottom: "#7861ba"
    }
  }

  function colorize(element) {
    //apply the colors to the element
    // used to be this
    TweenLite.set(element, {
      backgroundImage: "-webkit-linear-gradient(top," + colors.top + ", " + colors.bottom + ")"
    });
    //TweenLite.set(element, {background:"-webkit-linear-gradient(top," + colors.top + ", " + colors.bottom + ")"});

  }


  var scene2 = new ScrollMagic.Scene({
      triggerHook: 0.5,
      triggerElement: "#spacer1",
      // offset: 80,
      // duration: a + 280 - 77
      duration: a + b
    })
    .setTween(
      TweenMax.fromTo(background, 1, {
          backgroundImage: `linear-gradient(to right, ${colors.section1.top}, ${colors.section1.bottom})`
        }, {
          backgroundImage: `linear-gradient(to right, ${colors.section2.top}, ${colors.section2.bottom})`
        },

      )
    )
    .setPin("#backTxt", {
      pushFollowers: false
    })
    .addIndicators();

  var scene3 = new ScrollMagic.Scene({
      triggerHook: 0.5,
      // offset: (b / 2),
      duration: (a / 2) + b - (b / 3),
      triggerElement: "#spacer2",
    })
    .setTween(
      TweenMax.to(background, 1, {
          backgroundImage: `linear-gradient(to right, ${colors.section3.top}, ${colors.section3.bottom})`
        },

      )
    )
    .setPin("#backTxt", {
      pushFollowers: false
    })
    .addIndicators();

  controller.addScene([scene1,
    scene2, scene3
  ]);



  // window.onload = function () {
  //   var bgoverlay = document.querySelector(".background-overlay");
  //   var asdf = document.documentElement.scrollHeight;
  //   console.log(asdf);
  //   bgoverlay.style.height = asdf + "px";
  // }

}())