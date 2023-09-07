window.onload = function() {
    $('#main_img').css( 'opacity', '1' );
    $('#main_img_sp').css( 'opacity', '1' );

}


$(window).scroll(function(){
    var top1 = $("#work2").offset().top; // ターゲットの位置取得
    var position1 = top1 - $(window).height() + 300;  // 発火させたい位置

    if ($(window).scrollTop() > position1){
        $('#work2_title').css( 'opacity', '1' );
        setTimeout( ()=>{    $('#work2_icon').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work2_text').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work2_img').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work2_img_sp').css( 'opacity', '1' );} ,700);
    } 

    var top2 = $("#work3").offset().top; // ターゲットの位置取得
    var position2 = top2 - $(window).height() + 300;  // 発火させたい位置

    if ($(window).scrollTop() > position2){
        $('#work3_bar').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work3_green1').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work3_green1').css( 'margin-top', '0px' );} ,700);
        setTimeout( ()=>{    $('#work3_green2').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work3_title').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work3_text').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work3_img').css( 'opacity', '1' );}  ,1500);
        setTimeout( ()=>{    $('#work3_img_sp').css( 'opacity', '1' );}  ,1500);
    } 

    var top3 = $("#work4").offset().top; // ターゲットの位置取得
    var position3 = top3 - $(window).height() + 300;  // 発火させたい位置

    if ($(window).scrollTop() > position3){
        $('#work4_bar').css( 'width', '80%' );
        $('#work4_bar_sp').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work4_green1').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work4_green1').css( 'margin-top', '0px' );} ,700);
        setTimeout( ()=>{    $('#work4_green2').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work4_title').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work4_text').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work4_img').css( 'opacity', '1' );}  ,1500);
        setTimeout( ()=>{    $('#work4_img_sp').css( 'opacity', '1' );}  ,1500);
    } 

    var top4 = $("#work5").offset().top; // ターゲットの位置取得
    var position4 = top4 - $(window).height() + 300;  // 発火させたい位置

    if ($(window).scrollTop() > position4){
        $('#work5_bar').css( 'width', '80%' );
        $('#work5_bar_sp').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work5_green1').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work5_green1').css( 'margin-top', '0px' );} ,700);
        setTimeout( ()=>{    $('#work5_green2').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work5_title').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work5_img').css( 'opacity', '1' );}  ,1500);
        setTimeout( ()=>{    $('#work5_img_sp').css( 'opacity', '1' );}  ,1500);
    } 

    var top5 = $("#work6").offset().top; // ターゲットの位置取得
    var position5 = top5 - $(window).height() + 300;  // 発火させたい位置

    if ($(window).scrollTop() > position5){
        $('#work6_bar').css( 'width', '80%' );
        $('#work6_bar_sp').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work6_green1').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work6_green1').css( 'margin-top', '0px' );} ,700);
        setTimeout( ()=>{    $('#work6_green2').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work6_title').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work6_text').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work6_img').css( 'opacity', '1' );}  ,1500);
        setTimeout( ()=>{    $('#work6_img_sp').css( 'opacity', '1' );}  ,1500);
    } 

    var top6 = $("#work7").offset().top; // ターゲットの位置取得
    var position6 = top6 - $(window).height() + 300;  // 発火させたい位置

    if ($(window).scrollTop() > position6){
        $('#work7_bar').css( 'width', '100%' );
        setTimeout( ()=>{    $('#work7_title').css( 'opacity', '1' );} ,700);
        setTimeout( ()=>{    $('#work7_icon').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work7_insta').css( 'opacity', '1' );}  ,1500);
        setTimeout( ()=>{    $('#work7_detail1').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work7_detail2').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work7_detail3').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work7_detail4').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work7_map').css( 'opacity', '1' );} ,1500);
        setTimeout( ()=>{    $('#work7_map_sp').css( 'opacity', '1' );} ,1500);
    } 


})


var menu = document.getElementsByClassName('menu_content_sp');

for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
        document.getElementById('menu-btn-check').checked = false;
  });
}

var menu = document.getElementsByClassName('menu_content');

for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
        document.getElementById('menu-btn-check').checked = false;
  });
}