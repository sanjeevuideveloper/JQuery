/*
    1) SMS App
    2) Enable Submit Button if file selected
    3) Show Password with check Box
    4) Change Images with button
    5) Display Triangle Strings with Text Box

 */

// SMS App
let charCount = 100;
$('#textarea').keyup(function() {
    let textEnteredLength = $(this).val().length;
    $('#char-count').text(charCount - textEnteredLength);
});

// Enable a button
$('input[type="file"]').change(function() {
    $('#submit-button').removeAttr('disabled');
});

// Show password
let passwordBox = $('#password');
$('#check').change(function() {
    let inputType = passwordBox.attr('type');
    if(inputType === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});
$('#img1').click(function () {
    let path='..'+'/img/image1.jpeg'
    $('#my-img').attr('src',path);
    
})
$('#img2').click(function () {
    let path='..'+'/img/image2.jpeg'
    $('#my-img').attr('src',path);

})
$('#img3').click(function () {
    let path='..'+'/img/image3.jpeg'
    $('#my-img').attr('src',path);

})