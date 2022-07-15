$(document).ready(function () {

    var flag = false;
    
    $('.clicks').on('click', function () {
        if (!flag) {
            flag = true;
            $('#box').addClass('show');
        } else {
            $('#box').removeClass('show');
            flag = false
        }
    })

    $('.submission').on('click', function () {
        flag = false
        $('#box').removeClass('show');
    })

    $('.crossButton').on('click', function () {
        flag = false
        $('#box').removeClass('show');
    })
});

