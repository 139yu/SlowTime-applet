var genderOptional = $('.set-gender .modal-content > ul > li')
var gender = $('.gender > div:nth-child(2) > a > span')

genderOptional.on('click',function () {
    gender[0].innerText = $(this)[0].innerText
})
