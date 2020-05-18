var text = $('.wrap form textarea')
var size = $('.wrap form .title span:nth-child(2)')
text.bind('input propertychange',function () {
    size[0].innerText = text[0].value.length + "/200"
})