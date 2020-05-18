var footerItem = $('.footer .footer-item')

footerItem.on('click',function () {
    footerItem.removeClass('active')
    $(this).addClass('active')
})