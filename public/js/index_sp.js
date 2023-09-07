window.onload = function() {
    $('#header_logo').css( 'left', '0px' );
    $('#header_menu').css( 'right', '0px' );
    setTimeout( ()=>{    $('#main_img').css( 'opacity', '1' );} ,1000);

 }


 $(window).scroll(function(){
    var top1 = $("#top_black2").offset().top; // ターゲットの位置取得
    var position1 = top1 - $(window).height();  // 発火させたい位置

    if ($(window).scrollTop() > position1){
        $('#bg_black').css( 'opacity', '1' );
        setTimeout( ()=>{    $('#top_white1').css( 'right', '0px' );} ,500);
        setTimeout( ()=>{    $('#top_black1').css( 'right', '0px' );} ,1000);
        setTimeout( ()=>{    $('#top_black2').css( 'right', '0px' );} ,1250);
        setTimeout( ()=>{    $('#top_black3').css( 'right', '0px' );} ,1500);
        setTimeout( ()=>{    $('#big_text').css( 'transition', '1s' );} ,2000);
        setTimeout( ()=>{    $('#big_text').css( 'opacity', '1' );} ,2001);
        setTimeout( ()=>{    $('#otaku_text1').css( 'transition', '1s' );} ,2500);
        setTimeout( ()=>{    $('#otaku_text1').css( 'opacity', '1' );} ,2501);
        setTimeout( ()=>{    $('#otaku_text2').css( 'transition', '1s' );} ,2500);
        setTimeout( ()=>{    $('#otaku_text2').css( 'opacity', '1' );} ,2501);
    } 
    var top2 = $("#member_border").offset().top; // ターゲットの位置取得
    var position2 = top2 - $(window).height() + 200;  // 発火させたい位置

    if ($(window).scrollTop() > position2) {
        $('#member_border').css( 'width', '90%' );
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
        $('#profile_border').css( 'width', '90%' );
        setTimeout( ()=>{    $('#profile1').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#profile1').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#profile2').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#profile2').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#profile3').css( 'opacity', '1' );} ,1600);
        setTimeout( ()=>{    $('#profile3').css( 'top', '0px' );} ,1500);
        setTimeout( ()=>{    $('#st_img1').css( 'width', '31vw' );} ,2000);
        setTimeout( ()=>{    $('#st_img2').css( 'width', '31vw' );} ,2000);
        setTimeout( ()=>{    $('#st_text1').css( 'opacity', '1' );} ,2500);
        setTimeout( ()=>{    $('#st_text2').css( 'opacity', '1' );} ,2500);
        setTimeout( ()=>{    $('#st_text3').css( 'opacity', '1' );} ,2500);
        setTimeout( ()=>{    $('#st_text4').css( 'opacity', '1' );} ,2500);
        setTimeout( ()=>{    $('#st_text5').css( 'opacity', '1' );} ,2500);
        setTimeout( ()=>{    $('#st_text6').css( 'opacity', '1' );} ,3000);
    }

    var top4 = $("#row4").offset().top; // ターゲットの位置取得
    var position4 = top4 - $(window).height();  // 発火させたい位置

    if ($(window).scrollTop() > position4) {
        setTimeout( ()=>{    $('#row1').css( 'opacity', '1' );} ,100);
        setTimeout( ()=>{    $('#row2').css( 'opacity', '1' );} ,200);
        setTimeout( ()=>{    $('#row3').css( 'opacity', '1' );} ,300);
        setTimeout( ()=>{    $('#row4').css( 'opacity', '1' );} ,400);
        setTimeout( ()=>{    $('#row5').css( 'opacity', '1' );} ,500);
        setTimeout( ()=>{    $('#row6').css( 'opacity', '1' );} ,600);
        setTimeout( ()=>{    $('#row1').css( 'left', '0px' );} ,1);;
        setTimeout( ()=>{    $('#row2').css( 'left', '0px' );} ,100);;
        setTimeout( ()=>{    $('#row3').css( 'left', '0px' );} ,200);;
        setTimeout( ()=>{    $('#row4').css( 'left', '0px' );} ,300);;
        setTimeout( ()=>{    $('#row5').css( 'left', '0px' );} ,400);;
        setTimeout( ()=>{    $('#row6').css( 'left', '0px' );} ,500);;
    }

    var top5 = $("#sv_border3").offset().top; // ターゲットの位置取得
    var position5 = top5 - $(window).height();  // 発火させたい位置

    if ($(window).scrollTop() > position5) {
        $('#sv_title').css( 'opacity', '1' );
        $('#sv_title').css( 'top', '0' );
        setTimeout( ()=>{    $('#sv_border1').css( 'width', '100%' );} ,500);
        setTimeout( ()=>{    $('#sv_border2').css( 'width', '100%' );} ,500);
        setTimeout( ()=>{    $('#sv_border3').css( 'width', '100%' );} ,500);
        setTimeout( ()=>{    $('#sv_border4').css( 'width', '100%' );} ,500);
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
        $('#work_border1').css( 'width', '90%' );
        $('#work_border2').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work_title1').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#work_title1').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#work_title2').css( 'opacity', '1' );} ,1100);
        setTimeout( ()=>{    $('#work_title2').css( 'top', '0px' );} ,1000);
        setTimeout( ()=>{    $('#work_content').css( 'opacity', '1' );} ,2000);
    }



})



var menu = document.getElementsByClassName('menu_content_sp');

for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
        document.getElementById('menu-btn-check').checked = false;
  });
}