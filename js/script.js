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

  $('.enlargePhoto').click(function (e) {
    var title;
    if(e.target.src.substr(-13, 13) === "mitose_12.jpg"){
      title = "The above picture, from left to right, are: Honorable General Dwight D. Eisenhower, Honorable Alvin M. Mitose (son of Honorable Great Grand Master), and Honorable Great Grand Master James M. Mitose. Honorable General Eisenhower was the Honorary President of the American and Japanese Goodwill and Friendship Society. The author, Honorable Great Grand Master James M. Mitose, is Head of all Kosho-Shorei Ministers and is the Founder and President of the American and Japanese Goodwill and Friendship Society."
    }
    else{
      title = e.target.nextElementSibling.innerText;
    }
    var image = e.target.src;
    $('#photoModalTitle').text(title);
    $('#photoModalImage').attr('src', image);
    $('#photoModalAnchor').attr('href', image);
    $('#photoModal').modal('show');
  });
  $('#photoModal').on('hidden.bs.modal', function () {
    $(this).removeData('bs.modal');
  });
})