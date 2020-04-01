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
    let title = e.target.nextElementSibling.innerText
    let image = e.target.src;
    $('#classPhotoModalTitle').text(title);
    $('#classPhotoModalImage').attr('src', image);
    $('#classPhotoModalAnchor').attr('href', image);
    $('#classPhotoModal').modal('show');
  });
  $('#classPhotoModal').on('hidden.bs.modal', function () {
    $(this).removeData('bs.modal');
  });


  //Plain JS for Kata Video Card Generation
  /*Global m*/
  const kataCardGenerator = function (titleArray, videoUrlArray, footerArray, row) {
    for (let i = 0; i < titleArray.length; i++) {
      let col = document.createElement("div");
      col.classList.add(...m.colClasses);
      col.innerHTML = `<div class="card kataCard border-primary rounded">
                          <div class="card-header">
                              <h5 class="card-title">${titleArray[i]}</h5>
                          </div>
                          <div class="card-body embed-responsive embed-responsive-16by9">
                              <video class="embed-responsive-item" controls
                                  src="assets/videos/${videoUrlArray[i]}.mp4"></video>
                          </div>
                          <div class="card-footer">
                              <p>${footerArray[i]}</p>
                          </div>
                         </div>`;
      row.appendChild(col);
    }
  }
  kataCardGenerator(m.octagonTitles, m.octagonVideoUrls, m.octagonFooters, m.octagonRow);
  kataCardGenerator(m.emptyHandedTitles, m.emptyHandedVideoUrls, m.emptyHandedFooters, m.emptyHandedRow);
  kataCardGenerator(m.pinanHeianTitles, m.pinanHeianVideoUrls, m.pinanHeianTitles, m.pinanHeianRow);
  kataCardGenerator(m.nekoButoTitles, m.nekoButoVideoUrls, m.nekoButoTitles, m.nekoButoRow);
  kataCardGenerator(m.toyamaTitles, m.toyamaVideoUrls, m.toyamaFooters, m.toyamaRow);
  kataCardGenerator(m.MaAeTitles, m.MaAeVideoUrls, m.MaAeTitles, m.MaAeRow);
  kataCardGenerator(m.germanTitles, m.germanVideoUrls, m.germanTitles, m.germanRow);
})