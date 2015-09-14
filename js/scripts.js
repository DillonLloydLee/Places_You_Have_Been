$(document).ready(function() {
  $("#new-location").submit(function() {
    event.preventDefault();

    var newLocation = { name: $("input#place-name").val(),
      location: $("input#location").val(), notes: $("input#notes").val() };

    $("ul.locations").append("<li><span class='location'>" + newLocation.name + "</span></li>" +
                              "<div class='details'>" +
                                "location: " + newLocation.location + "<br>" +
                                "notes: " + newLocation.notes + "<br>" +
                              "</div>" );
    $(".location").last().click(function() {
      console.log('clicked');
      $(".details").toggle();

    });
  });
});
