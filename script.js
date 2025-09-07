$(document).ready(function () {
    const initialItems = ['JavaScript', 'HTML', 'CSS', 'React', 'Angular', 'Zustand', 'NextJS', 'TypeScript'];

    function addItem(text) {
        const li = $('<li></li>');
        const span = $('<span></span>').text(text);
        const editBtn = $('<button>Edit</button>').addClass('edit');
        const deleteBtn = $('<button>Delete</button>').addClass('delete');

        li.append(span, editBtn, deleteBtn);
        $('#todo-list').append(li);

    }

    for(let i =0 ; i< initialItems.length; i++){
        addItem(initialItems[i])
    }

    $('#add-form').submit(function (e){
        e.preventDefault();
        const newItem = $('#new-item').val();
        if (newItem) {
            addItem(newItem);
        }
    });

   $('#todo-list').on('click', '.delete', function () {
    $(this).closest('li').remove();
});

    
})