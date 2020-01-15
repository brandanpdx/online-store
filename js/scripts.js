$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstname").val();
    var lastName = $("input#lastname").val();
    var billAddress = $("input#billaddress").val();
    var billCity = $("input#billcity").val();
    var billState = $("#billstate").val();
    var billZip = parseInt($("input#billzip").val());
    var shipName = $("input#shipname").val();
    var shipAddress = $("input#shipaddress").val();
    var shipCity = $("input#shipcity").val();
    var shipState = $("#shipstate").val();
    var shipZip = parseInt($("input#shipzip").val());
    var speed = $("input:radio[name=speed]:checked").val();

    $(".name").text(firstName + " " + lastName);
    $(".speed").text(speed);
    $(".shipname").text(shipName);
    $(".shipaddress").text(shipAddress);
    $(".shipcity").text(shipCity);
    $(".shipstate").text(shipState);
    $(".shipzip").text(shipZip);

    $(".billaddress").text(billAddress);
    $(".billcity").text(billCity);
    $(".billstate").text(billState);
    $(".billzip").text(billZip);

    $("#order").hide();
    $("#receipt").show();
  });
});