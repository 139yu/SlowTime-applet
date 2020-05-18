var editGender = $('.wrap .form-group .radio label')

editGender.on('click',function () {
    editGender.removeClass('active')
    if ($(this).children('input')[0].checked) {
        $(this).addClass('active')
    }
})
