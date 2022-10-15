const start = Date.now();

if (window.location.href.includes("amazon")) {
  var amazonClassesToBlur = [
    "nav-line-1-container",
    "a-column a-span12 a-text-left",
    "nav-line-1 nav-progressive-content",
    "nav-line-2 nav-progressive-content",
  ];
  amazonClassesToBlur.map((e) => {
    var childs = document.getElementsByClassName(e);
    childs = Array.from(childs);
    child = childs.map((ch) => {
      ch.style.webkitFilter = "blur(3px)";
      var divs = ch.getElementsByTagName("div");
      divs = Array.from(divs);
      divs.map((d) => {
        d.style.webkitFilter = "blur(3px)";
      });
    });
    const end = Date.now();
    // print  date.now() in miliseconds
    const millis = end - start;
    console.log(`Execution time: ${Math.floor(millis / 1)} milliseconds`);
  });
}
