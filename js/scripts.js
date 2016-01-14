$(document).ready(function() {
  // In this example, .click() is a method that is performed on the object returned by the jQuery function $('li.alertList')
  $('li.alertList').click(function() {
    alert("You clicked on the list item. The .click method worked!");
  });
});
