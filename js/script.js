$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.carousel').carousel( {interval: 2000} );

    $('.classPhotoImg').click(function(e){
        let title = e.target.nextElementSibling.innerText
        let image = e.target.src;
        $('#classPhotoModalTitle').text(title);
        $('#classPhotoModalImage').attr('src', image);
        $('#classPhotoModalAnchor').attr('href', image);
        $('#classPhotoModal').modal('show');
    });
    $('#classPhotoModal').on('hidden.bs.modal', function() {
        $(this).removeData('bs.modal');
    });
})