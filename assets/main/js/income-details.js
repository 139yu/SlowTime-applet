//选择视图
function changeView() {
    var index = $('.select-view select option:selected').val();
    $('.view > div').removeClass('active')
    $('.view > div:nth-child('+index+')').addClass('active')
    var view = $('.all-income > .view > div:nth-child('+index+') > .data');
    var viewItems = $('.all-income > .view > div:nth-child('+index+') > .data > li');
    view.innerWidth((viewItems.innerWidth() + 10) * viewItems.length)
}
//设置视图宽度
var viewWrap = $('.all-income > .view > div')
var dayView = $('.all-income > .view > div:nth-child(1) > .data')
var dayItems = $('.all-income > .view > div:nth-child(1) > .data > li')
viewWrap.innerWidth($(document).innerWidth())
dayView.innerWidth((dayItems.innerWidth() + 10) * dayItems.length)