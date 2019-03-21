$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");

        let devoured = true;
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("changed devoured to", devoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        let newBurger = {
            name: $("#addBurger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("burger is ready");
                location.reload();
            }
        );
    });
});