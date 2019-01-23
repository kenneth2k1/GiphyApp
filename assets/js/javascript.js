
topics = ["gangster rap", "sailing", "cadillac", "tennis"];

var quer;
var year = "2019";
var month = "01";
var day = "19";
// https://api.giphy.com/v1/gifs/search?api_key=&q=&limit=25&offset=0&rating=G&lang=en
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tMaY7115vsVOvTCaJgwPY1VGcnx54oI1&limit=10" + "&q=" + quer;


$(document).ready(function(){

for (i=0; i<topics.length; i++){
  $("#btnDiv").append("<button type='submit' class='btn btn-primary'>" + topics[i] + "</button>&nbsp");
}

$('.btn').on('click', function(){
  var keywd = $(this).text();
  getGifs(keywd);
});

});

function getGifs(keywd){
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tMaY7115vsVOvTCaJgwPY1VGcnx54oI1&limit=10" + "&q=" + keywd;

  $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        // Storing an array of results in the results variable
        //$("#gifDiv").text(JSON.stringify(response));
        for(i=0; i<response.data.length; i++){
          var imgUrl = response.data[i].images.original.url; 
          var stillUrl = response.data[i].images.original_still.url; 
          var rating = response.data[i].rating; 
        $("#gifDiv").append("<img src='" + imgUrl + "' data-still='" + stillUrl + "' data-animate='" + imgUrl  + "' data-state='animate' class='gif'>"
                             + "<div>Rating:" + rating + "</div>");
        
        }

  console.log(response);

      });
  }


  $(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
