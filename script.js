

$(document).ready(function(){
  // console.log("you ready!");

// console.log(placesRequest);
  var $foodChoice = $('.choice > img');
  var $submitLocation = $('input[type|="submit"]');
  console.log($submitLocation);
  var foodChosen;
  var $location = $('input[name|="location"]');


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

  $submitLocation.click(function(event){
    event.preventDefault();
    console.log(foodChosen, $location.val())
    var placesRequest = $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + foodChosen + '+' + $location.val() + '&key=AIzaSyAexDKp3HwGEnCbWAnUxQh0i2K6Fy3feFM',
            type: "GET",
            dataType: 'json',
            cache: false,
            success: function(response){
              console.log(response.results[0].name);
              $result.append('img').html("<img src='mcd.png' />");
              $result.append('p').html(response.results[0].name + "<br>" + response.results[0].formatted_address);
              $result.css('display', 'inline-flex').show();
            }
        });

  });


});
