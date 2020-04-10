$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  //Dropdown submenu code
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass('show');
    });


    return false;
  });
  $('.carousel').carousel({ interval: 2000 });

  $('.classPhotoImg').click(function (e) {
    var title = e.target.nextElementSibling.innerText
    var image = e.target.src;
    $('#classPhotoModalTitle').text(title);
    $('#classPhotoModalImage').attr('src', image);
    $('#classPhotoModalAnchor').attr('href', image);
    $('#classPhotoModal').modal('show');
  });
  $('#classPhotoModal').on('hidden.bs.modal', function () {
    $(this).removeData('bs.modal');
  });
})