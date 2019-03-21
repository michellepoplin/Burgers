$(function () {
    $('.change-devoured').on('click', function (event) {
        const id = $(this).data('id');
        const devoured = true;
        $.ajax(`/api/burgers/${id}`, {
            data: devoured,
            type: 'PUT',
        }).then(() => {
            console.log('changed devoured to', devoured);
            location.reload();
        });
    });

    $('.create-form').on('submit', function (event) {
        event.preventDefault();
        console.log('Firing POST event!');
        const newBurger = {
            name: $('#addBurger').val().trim(),
        };
        $.ajax('/api/burgers', {
            data: newBurger,
            type: 'POST',
        }).then(() => {
            console.log('burger is ready');
            location.reload();
        });
    });
});
