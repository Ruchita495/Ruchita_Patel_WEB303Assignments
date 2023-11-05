$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        
        $('#photo-viewer').on('click', '.photo-box', function () {
            var imgUrl = $(this).find('img').attr('src');
            $('#myModal').find('img').attr('src', imgUrl);
            $('#myModal').show();
          });
        
          // Close the modal when the close button or overlay is clicked
        $('.close').on('click', function () {
            $('#myModal').hide();
        });
    });
});
