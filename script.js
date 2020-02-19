$(document).ready(function () {

    //When user clicks submit or presses enter
    $('form').on('submit', function (e) {

        //Prevent default function of submit button
        e.preventDefault();

        //If the text input is not empty
        if (($('#item').val() !== '') && ($('#file').val() !== "")) {

            //Save the value in the text input
            let item = $('#item').val();
            let description = $('#description').val();
            let date = $('#date').val();
            let file = $('#file').val();

            //Add list item to HTML
            $('ul').append(`
                <li>
                    <span class='remove'><a href='#'><i class='fa fa-times-circle'></i></a></span>
                    <span class='check todo'></span>
                    <div class="task-info">
                    <div class="task-specifics">
                        <p class='task'>${item}</p>
                        <p class='date'>${date}</p>
                    </div>
                    <p class='description'>${description}</p>
                    <i class="fa fa-paperclip" aria-hidden="true"></i> ${file}
                    </div>
                </li>`);

            //Clear the form
            $('input[type=text]').val('');
            $('textarea').val('');
            $('input[type=date]').val('');
            $('input[type=file]').val('');

            //drag/drop sort items
            $("ul").sortable();
        };

        //If the text input is not empty
        if ($('#item').val() !== '') {

            //Save the value in the text input
            let item = $('#item').val();
            let description = $('#description').val();
            let date = $('#date').val();
            let file = $('#file').val();

            //Add list item to HTML
            $('ul').append(`
                <li>
                    <span class='remove'><a href='#'><i class='fa fa-times-circle'></i></a></span>
                    <span class='check todo'></span>
                    <div class="task-info">
                    <div class="task-specifics">
                        <p class='task'>${item}</p>
                        <p class='date'>${date}</p>
                    </div>
                    <p class='description'>${description}</p>
                    </div>
                </li>`);

            //Clear the form
            $('input[type=text]').val('');
            $('textarea').val('');
            $('input[type=date]').val('');
            $('input[type=file]').val('');

            //drag/drop sort items
            $("ul").sortable();
        };
    });

    //When user clicks on a list item
    $('ul').on('click', 'li', function () {

        //Find the class of 'check' within the list item
        let checkBox = $(this).find('.check');

        //Toggle between an empty checkbox and a checked one
        checkBox.toggleClass("todo done");
        $(this).toggleClass("completed")
    });

    //When the remove button is clicked, remove the item
    $('ul').on('click', 'span', 'a', function () {

        const toDoListItem = $(this).parent();
        toDoListItem.remove();
    });
});


