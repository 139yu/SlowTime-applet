var shopType = $('.content .shop-type > div')
var listType = $('.content .header .list-type > .icon')
var isBig = false
var shopOptional = $('.content .shop-optional > span:first-child')
var optionalList = $('.content .shop-optional > .optional-list')
var optionalItems = $('.content .shop-optional > .optional-list > .optional')
var optionalIsShow = false
var navItems = $('.content .nav-wrap .nav-items')
var tabContent = $('.content .tab-content')

//列表样式切换
listType.on('click', function () {
    if (!isBig) {
        $(this).removeClass('icon-liebiao').addClass('icon-llist_one')
        tabContent.addClass('active')
    } else {
        $(this).removeClass('icon-llist_one').addClass('icon-liebiao')
        tabContent.removeClass('active')
    }
    isBig = !isBig
})


//店铺类型切换
shopType.on('click', function () {
    shopType.removeClass('active')
    $(this).addClass('active')
})

//店铺筛选
shopOptional.on('click', function () {
    if (!optionalIsShow){
        optionalList.addClass('active')
    }else {
        optionalList.removeClass('active')
    }
    optionalIsShow = !optionalIsShow
})
optionalItems.on('click', function () {
    if (optionalIsShow) {
        $('.content .nav-wrap > .shop-optional > span:first-child')[0].innerText = $(this)[0].innerText
        optionalList.removeClass('active')
        optionalIsShow = !optionalIsShow
    }
})

//店铺列表和技师列表切换
navItems.on('click',function () {
    var index = $(this).index();
    navItems.removeClass('active')
    $('.content > .tab-content > div').removeClass('show')
    $('.content > .tab-content > div:nth-child('+index+')').addClass('show')
    $(this).addClass('active')
})

//固定导航条



