document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11144444741"></script>');

window.onload = function() {
    $('#header_logo').css( 'left', '0px' );
    $('#header_menu').css( 'right', '0px' );
    setTimeout( ()=>{    $('#main_img').css( 'opacity', '1' );} ,1000);

 }

$(function(){
    jQuery('iframe').on('load', function(){
        jQuery('iframe').contents().find('.rc-anchor-normal').css('width','auto');
    });
});

function clickMailButton() {
    error_flg = 0;
    var error_message = document.getElementById('error_message');
    if (mail_form.name.value == ""){
        $('#name').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#name').css( 'background', '#fff' );
    }

    if (mail_form.kana.value == ""){
        $('#kana').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#kana').css( 'background', '#fff' );
    }

    if (mail_form.zip.value == ""){
        $('#zip').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#zip').css( 'background', '#fff' );
    }

    if (mail_form.address.value == ""){
        $('#address').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#address').css( 'background', '#fff' );
    }

    if (mail_form.tel.value == ""){
        $('#tel').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#tel').css( 'background', '#fff' );
    }

    if (mail_form.mail.value == "" || !(mail_form.mail.value.match(/.+@.+\..+/)) ){
        $('#mail').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#mail').css( 'background', '#fff' );
    }

    if (mail_form.content.value == ""){
        $('#content').css( 'background', '#FFE1E1' );
        error_flg = 1;
    } else {
        $('#content').css( 'background', '#fff' );
    }

    if (error_flg) {
        error_message.innerHTML = '※不足している項目があります。';
    } else {
        error_message.innerHTML = '';
        document.forms.mail_form.submit();
        gtag('event', 'conversion', {
        'send_to': 'AW-11144444741/UiH9CMjsrZcYEMX2isIp',
        'value': 10000.0,
        'currency': 'JPY'
        });
    }
}

$(window).scroll(function(){
    var top1 = $("#top_black2").offset().top; // ターゲットの位置取得
    var position1 = top1 - $(window).height();  // 発火させたい位置

    if ($(window).scrollTop() > position1){
        $('#bg_bw').css( 'right', '0px' );
        setTimeout( ()=>{    $('#top_white1').css( 'right', '0px' );} ,500);
        setTimeout( ()=>{    $('#top_white2').css( 'right', '0px' );} ,1000);
        setTimeout( ()=>{    $('#top_black1').css( 'right', '0px' );} ,1500);
        setTimeout( ()=>{    $('#top_black2').css( 'right', '0px' );} ,2000);
        setTimeout( ()=>{    $('#big_text1').css( 'transition', '1s' );} ,3000);
        setTimeout( ()=>{    $('#big_text1').css( 'opacity', '1' );} ,3001);
        setTimeout( ()=>{    $('#otaku_text1').css( 'transition', '1s' );} ,4000);
        setTimeout( ()=>{    $('#otaku_text1').css( 'opacity', '1' );} ,4001);
    } 
    var top2 = $("#member_border").offset().top; // ターゲットの位置取得
    var position2 = top2 - $(window).height() + 200;  // 発火させたい位置

    if ($(window).scrollTop() > position2) {
        $('#member_border').css( 'width', '91%' );
        setTimeout( ()=>{    $('#member1').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#member1').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#member2').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#member2').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#member3').css( 'opacity', '1' );} ,2100);
        setTimeout( ()=>{    $('#member3').css( 'margin-left', '0px' );} ,2000);
        setTimeout( ()=>{    $('#member4').css( 'opacity', '1' );} ,2400);
        setTimeout( ()=>{    $('#member4').css( 'margin-left', '0px' );} ,2300);
        setTimeout( ()=>{    $('#member5').css( 'opacity', '1' );} ,2700);
        setTimeout( ()=>{    $('#member5').css( 'left', '0px' );} ,2600);
    }
    var top3 = $("#profile_border").offset().top; // ターゲットの位置取得
    var position3 = top3 - $(window).height() + 200;  // 発火させたい位置

    if ($(window).scrollTop() > position3) {
        $('#profile_border').css( 'width', '91%' );
        setTimeout( ()=>{    $('#profile1').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#profile1').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#profile2').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#profile2').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#profile3').css( 'opacity', '1' );} ,2100);
        setTimeout( ()=>{    $('#profile3').css( 'top', '0px' );} ,2000);
        setTimeout( ()=>{    $('#row1').css( 'opacity', '1' );} ,3100);
        setTimeout( ()=>{    $('#row2').css( 'opacity', '1' );} ,3200);
        setTimeout( ()=>{    $('#row3').css( 'opacity', '1' );} ,3300);
        setTimeout( ()=>{    $('#row4').css( 'opacity', '1' );} ,3400);
        setTimeout( ()=>{    $('#row5').css( 'opacity', '1' );} ,3500);
        setTimeout( ()=>{    $('#row6').css( 'opacity', '1' );} ,3600);
        setTimeout( ()=>{    $('#row1').css( 'left', '0px' );} ,3000);;
        setTimeout( ()=>{    $('#row2').css( 'left', '0px' );} ,3100);;
        setTimeout( ()=>{    $('#row3').css( 'left', '0px' );} ,3200);;
        setTimeout( ()=>{    $('#row4').css( 'left', '0px' );} ,3300);;
        setTimeout( ()=>{    $('#row5').css( 'left', '0px' );} ,3400);;
        setTimeout( ()=>{    $('#row6').css( 'left', '0px' );} ,3500);;
    }

    var top4 = $("#st_text3").offset().top; // ターゲットの位置取得
    var position4 = top4 - $(window).height();  // 発火させたい位置

    if ($(window).scrollTop() > position4) {
        $('#st_img1').css( 'width', '31vw' );
        $('#st_img2').css( 'width', '31vw' );
        setTimeout( ()=>{    $('#st_text1').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#st_text2').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#st_text3').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#st_text4').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#st_text5').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#st_text6').css( 'opacity', '1' );} ,2000);
        setTimeout( ()=>{    $('#st_text6').css( 'top', '0px' );} ,2000);
        setTimeout( ()=>{    $('#st_text7').css( 'opacity', '1' );} ,3000);
    }

    var top5 = $("#sv_border3").offset().top; // ターゲットの位置取得
    var position5 = top5 - $(window).height() + 200;  // 発火させたい位置

    if ($(window).scrollTop() > position5) {
        $('#sv_title').css( 'opacity', '1' );
        $('#sv_border1').css( 'width', '100%' );
        $('#sv_border2').css( 'width', '100%' );
        $('#sv_border3').css( 'width', '100%' );
        $('#sv_border4').css( 'width', '100%' );
        setTimeout( ()=>{    $('#sv_num1').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#sv_num2').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#sv_num3').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#sv_num4').css( 'opacity', '1' );} ,1000);
        setTimeout( ()=>{    $('#sv_num1').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#sv_num2').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#sv_num3').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#sv_num4').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#sv_text1').css( 'opacity', '1' );} ,2000);
        setTimeout( ()=>{    $('#sv_text2').css( 'opacity', '1' );} ,2000);
        setTimeout( ()=>{    $('#sv_text3').css( 'opacity', '1' );} ,2000);
        setTimeout( ()=>{    $('#sv_text4').css( 'opacity', '1' );} ,2000);
    }


    var top6 = $("#work_border2").offset().top; // ターゲットの位置取得
    var position6 = top6 - $(window).height();  // 発火させたい位置

    if ($(window).scrollTop() > position6) {
        $('#work_border1').css( 'width', '91%' );
        $('#work_border2').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work_title1').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#work_title1').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#work_title2').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#work_title2').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#work_content').css( 'opacity', '1' );} ,2000);
    }

})


