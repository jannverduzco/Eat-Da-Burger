// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var devourState = {
            devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function() {
                console.log("changed to devoured", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#brg").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});