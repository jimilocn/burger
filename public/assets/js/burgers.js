$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenStatus = {
            eaten: newEaten
        };

        $.ajax("/api/burgers/" + id, {
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
            name: $("#burger").val().trim(),
            eaten: 0
            // eaten: $("[name=eaten]:checked").val().trim()
        }

        if ($("#burger").val().trim() != 0) {

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("New burger was added");
                    location.reload();
                }
            )
        } 
    })

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted burger")
            location.reload();
        })
    })

})