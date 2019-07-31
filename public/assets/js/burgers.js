$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenStatus = {
            eaten: newEaten
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function () {
                console.log("Burger has been updated to " + newEaten);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New burger was added");
                location.reload();
            }
        )
    })

})