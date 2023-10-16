var Page = {
  go: function (page) {
    url = window.location.href;
    url = url.split("w06/")[0];
    console.log(url);
    window.location.replace(url + "w06/" + page);
  },
  init() {
    $(".menu").mouseenter(function (e) {
      if (e.target.classList[1] == "sel")
        $(e.currentTarget).css("color", "black");
      else $(e.currentTarget).css("color", "blueviolet");
    });
    $(".menu ").mouseleave(function (e) {
      if (e.target.classList[1] == "sel") {
        $(e.currentTarget).css("color", "#fff");
      } else $(e.currentTarget).css("color", "black");
    });

    $(".img").mouseenter(function (e) {
      $(e.currentTarget).css("width", "600px");
    });
    $(".img").mouseleave(function (e) {
      $(e.currentTarget).css("width", "450px");
    });
  },
};

function mouseMoveFun() {
  $(".menu").mouseenter(function (e) {
    if (e.target.classList[1] == "sel")
      $(e.currentTarget).css("color", "black");
    else $(e.currentTarget).css("color", "blueviolet");
  });
  $(".menu ").mouseleave(function (e) {
    if (e.target.classList[1] == "sel") {
      $(e.currentTarget).css("color", "#fff");
    } else $(e.currentTarget).css("color", "black");
  });

  $(".img").mouseenter(function (e) {
    $(e.currentTarget).css("width", "600px");
  });
  $(".img").mouseleave(function (e) {
    $(e.currentTarget).css("width", "450px");
  });
}
