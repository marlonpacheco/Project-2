$(function() {

  var activityInput = $("#activity");

    $(".create-post").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        // Create a new post from the inputs on the page
        var newPost = {
          activity: activityInput.val(),
          emoji: "Placeholder",
          UserUsername: "andrew.m.freire@gmail.com"
        };
    
        // Send the POST request.

        $.post("/api/posts", newPost, function() {
          window.location.href = "/feed";
        });
  
      });

});