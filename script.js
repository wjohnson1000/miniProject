

$(document).ready(function(){
  // console.log("you ready!");

// console.log(placesRequest);
  var $foodChoice = $('.choice > img');
  var $submitLocation = $('input[type|="submit"]');
  console.log($submitLocation);
  var foodChosen;
  var $location = $('input[name|="location"]');
  // var ipAddress = $.get("https://api.ipify.org", function(test){
  //   alert("got ip")
  //   console.log(ipAddress.responseText);
  // });

  var whereYouAre = $.get("https://freegeoip.net/json/", function(data){
    whereYouAreObj = JSON.parse(whereYouAre.responseText);
    var ip = whereYouAreObj.ip;
    // alert('load was performed');
    console.log(ip);
  });

  // console.log($foodChoice);
  $foodChoice.click(function(event){
    // alert("you did it");
    $('.main-thing').find('.user-info').slideDown('fast');
    $location.focus();
    foodChosen = $(this).data('id');
    // console.log(foodChosen);
  });

  var $results = $('.results');
  var $result = $('.result');

  function resultStyler(basedOnFoodChoice){
      $results.append('<div class="result"></div>');
      var $result = $('.result');
      if(foodChosen == 'sushi'){
        $result.append("<img src='sushi_result.jpeg' height='100px' />");
        $result.css('border', '5px solid pink');
    } else {
      $result.append("<img src='mcd.png' height='100px' />");
      $result.css('border', '5px solid gold');
    }
  }

  $submitLocation.click(function(event){
    event.preventDefault();
    console.log(foodChosen, $location.val())
    var placesRequest = $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + foodChosen + '+' + $location.val() + '&key=AIzaSyAexDKp3HwGEnCbWAnUxQh0i2K6Fy3feFM',
            type: "GET",
            dataType: 'json',
            cache: false,
            success: function(response){
              $results.slideDown();
              // for (var i = 0; i < 5; i++) {
              //
              //   resultStyler(foodChosen);
              //   $result.append(response.results[i].name + "<br>" + response.results[i].formatted_address);
              // }
            }
        });

  });


});
