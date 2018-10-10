$(function () {



    $(".devour").on("click", function (event) {

        event.preventDefault();
        var id = $(this).data("id");

        var isDevoured = {
            devoured: true
        };
        console.log(id);

        // // console.log("test");
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function (res) {

            // Reload the page to get the updated list
            location.reload();
        });

    });

});