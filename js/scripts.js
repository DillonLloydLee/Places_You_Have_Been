$(document).ready(function() {
  $("#new-location").submit(function() {
    event.preventDefault();

    var newLocation = { name: $("input#place-name").val(),
      location: $("input#location").val(), notes: $("input#notes").val() };

    $("ul.locations").append("<li><span class='location'>" + newLocation.name + "</span></li>");
  });
});
