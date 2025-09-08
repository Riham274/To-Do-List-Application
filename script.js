$(document).ready(function () {
  const initialItems = ['JavaScript', 'HTML', 'CSS', 'React', 'Angular', 'Zustand', 'NextJS', 'TypeScript'];

  function addItem(text) {
    const li = $('<li></li>').addClass('list-group-item d-flex justify-content-between align-items-center');
    const span = $('<span></span>').text(text);

    const btnGroup = $('<div></div>').addClass('d-flex gap-2');
    const editBtn = $('<button>Edit</button>').addClass('btn btn-primary edit');
    const deleteBtn = $('<button>Delete</button>').addClass('btn btn-danger delete');

    btnGroup.append(editBtn, deleteBtn);
    li.append(span, btnGroup);
    $('#todo-list').append(li);
  }

  for(let i =0 ; i< initialItems.length; i++){
     addItem(initialItems[i]) ;
  }

  $('#add-form').submit(function (e) {
    e.preventDefault();
    const newItem = $('#new-item').val().trim();
    if (newItem) {
      addItem(newItem);
    }
  });


  $('#todo-list').on('click', '.delete', function () {
    $(this).closest('li').remove();
  });


  $('#todo-list').on('click', '.edit', function () {
    const $btn = $(this);
    const $li = $btn.closest('li');

    if ($btn.text() === 'Edit') {
      const currentText = $li.find('span').text();
      $li.find('span').replaceWith(`<input type="text" class="form-control m-1" value="${currentText}">`);
      $btn.text('Save');
    } 
    else {
      const newText = $li.find('input').val();
      if (newText) {
        $li.find('input').replaceWith(`<span>${newText}</span>`);
        $btn.text('Edit');
      }
    }
  });
});
