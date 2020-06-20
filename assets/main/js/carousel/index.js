function main(imgs,id) {
  var imagesCommon = imgs;

  var root = document.getElementById(id);

  function appendContainer(text) {
    var container = document.createElement("div");
    container.className = "container";

    root.appendChild(container);

    if (text) {
      var introduce = document.createElement("div");
      introduce.className = "introduce";
      var textNode = document.createTextNode(text);
      introduce.appendChild(textNode);
      container.appendChild(introduce);
    }
    return container;
  }

  var fns = [

    function() {
      var text = "";
      var container = appendContainer(text);
      var images = imagesCommon
      var awesomeSlider = new AwesomeSlider(imagesCommon, container, {
        imageDownloading: imageDownloading(),
        imagePlaceholder: imagePlaceholder()
      });
    }
  ];

  for (var i = 0; i < fns.length; i++) {
    fns[i]();
  }
}

function indicator() {
  var text = "";
  var wrap = null;
  return {
    style: function() {
      text = this.options.initIndex + 1 + " / " + this.realLen;
      wrap = document.createElement("div");
      wrap.className = "custom-indicator-wrap";
      var textNode = document.createTextNode(text);
      wrap.appendChild(textNode);
      this.eleCollections.listWrap.appendChild(wrap);
    },

    active: function() {
      text = this.current + " / " + this.realLen;
      wrap.innerText = text;
    }
  };
}

function manual() {
  var previous = document.createElement("div");
  previous.className = "manual-btn manual-previous";

  var next = document.createElement("div");
  next.className = "manual-btn manual-next";

  return {
    previous: previous,
    next: next
  };
}

function imageDownloading() {
  var ele = document.createElement("div");
  ele.className = "image-downloading";
  var text = document.createTextNode("loading...");
  ele.appendChild(text);
  return ele;
}

function imagePlaceholder() {
  var ele = document.createElement("div");
  ele.className = "image-placeholder";
  var text = document.createTextNode("error");
  ele.appendChild(text);
  return ele;
}

function readyGo(func) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", func);
  } else {
    func();
  }
}

var imgs01 = ["../assets/main/img/project/banner01.jpg", "../assets/main/img/project/banner02.jpg", "../assets/main/img/project/banner03.jpg", "../assets/main/img/project/banner04.jpg"];
var imgs02 = ["../assets/main/img/project/banner05.jpg","../assets/main/img/project/banner06.jpg"]
var imgs03 = ["../assets/main/img/project/banner06.jpg"]
var imgs04 = ["../assets/main/img/project/banner03.jpg","../assets/main/img/project/banner02.jpg","../assets/main/img/project/banner15.jpg","../assets/main/img/project/banner08.jpg"]
var imgs05 = ["../assets/main/img/project/banner03.jpg","../assets/main/img/project/banner17.jpg","../assets/main/img/project/banner22.jpg"]
var imgs06 = ["../assets/main/img/project/banner16.jpg","../assets/main/img/project/banner15.jpg","../assets/main/img/project/banner08.jpg"]
var imgs07 = ["../assets/main/img/project/banner20.jpg","../assets/main/img/project/banner17.jpg","../assets/main/img/project/banner22.jpg","../assets/main/img/project/banner21.jpg","../assets/main/img/project/banner06.jpg",]
var imgs08 = ["../assets/main/img/project/banner09.jpg","../assets/main/img/project/banner12.jpg","../assets/main/img/project/banner13.jpg","../assets/main/img/project/banner10.jpg"]
readyGo(main(imgs01,"root"));
readyGo(main(imgs02,"root1"));
readyGo(main(imgs03,"root2"));
readyGo(main(imgs04,"root3"));
readyGo(main(imgs05,"root4"));
readyGo(main(imgs06,"root5"));
readyGo(main(imgs07,"root6"));
readyGo(main(imgs08,"root7"));