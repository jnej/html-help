$(document).ready(function() {

  var elements = ["h1","p","img"];
  var messages = ["header","paragraph","image"];

  elements.forEach(function(element) {
    $(element).click(function() {
      alert("This is a " + messages);
    });
  });
});


/*$("h1").click(function() {
  alert("This is a header.");
});

$("p").click(function() {
  alert("This is a paragraph.");
});

$("img").click(function() {
  alert("This is an image.");
});*/
