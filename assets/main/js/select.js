var selectItems = $('select');
selectItems.on('change',function () {
    $('label[for=' + $(this).prop('id') + ']')[0].innerText = $(this).children('option:selected')[0].innerText
})
