@extends('layouts.app')


@section('content')

<img src="{{ asset('img/top_img1.png') }}" class="top_img1">
<img src="{{ asset('img/top_img2.png') }}" class="top_img2">

<div class="top_div">
    <div class="top_warning1">※注意※</div>
    <div class="top_warning2">
        ・無料配布の受け取りは一人一回のみとなります<br>
        ・総額5,000万円分の配布が終了次第、キャンペーンの受付を終了いたします<br>
        ・無料配布の受け取り、サポートのご利用、ともに完全無料でご利用いただけますのでご安心下さい<br><br>
        ※受け取れる金額は500円～最大10万円分となります<br>
        ※金額は抽選によって決まります
    </div>

    <div class="form_text">▼受け取りはコチラから▼</div>

    <input class="input_text" placeholder="" name="name" type="text" id="name">
    <a href="#!" onclick="clickMailButton()" class="send_btn_a"><img src="{{ asset('img/send_btn.png') }}" class="send_btn_img"></a>

    <img src="{{ asset('img/top_img2_1.png') }}" class="top_div_img">
    <img src="{{ asset('img/top_img2_2.png') }}" class="top_div_img">

    <img src="{{ asset('img/title_img1.png') }}" class="title_img">

    <img src="{{ asset('img/top_img3_1.png') }}" class="top_img3">
    <img src="{{ asset('img/top_img3_2.png') }}" class="top_img3">
    <img src="{{ asset('img/top_img3_3.png') }}" class="top_img3">

    <div class="top_text3">などなど盛り沢山！<br>普通に生活していたら知り得ない情報が続々配信されます！</div>
    <img src="{{ asset('img/top_img4_1.png') }}" class="top_div_img">
    <img src="{{ asset('img/top_img4_2.png') }}" class="top_div_img">

</div>







<img src="{{ asset('img/top_img_final.png') }}" class="top_img_final">

<div class="top_div" style="margin-top: 10vw;">
    <div class="top_warning1">※注意※</div>
    <div class="top_warning2">
        ・無料配布の受け取りは一人一回のみとなります<br>
        ・総額5,000万円分の配布が終了次第、キャンペーンの受付を終了いたします<br>
        ・無料配布の受け取り、サポートのご利用、ともに完全無料でご利用いただけますのでご安心下さい<br><br>
        ※受け取れる金額は500円～最大10万円分となります<br>
        ※金額は抽選によって決まります
    </div>

    <div class="form_text">▼受け取りはコチラから▼</div>

    <input class="input_text" placeholder="" name="name" type="text" id="name">
    <a href="#!" onclick="clickMailButton()" class="send_btn_a"><img src="{{ asset('img/send_btn.png') }}" class="send_btn_img"></a>
    <img src="{{ asset('img/copyright.png') }}" class="copyright">

</div>



<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="{{ asset('js/index.js') }}"></script>

@endsection


@section('content_sp')


<form name="mail_form" action="{{ route('mail_send') }}" method="post" enctype="multipart/form-data">
    @csrf

    <input type="hidden" name="recaptchaToken" id="recaptchaToken">
    <div class="g-recaptcha mt-3" data-sitekey="6Lc8TFonAAAAAKJqDjHHXEF-E9R-ODofyBtg6GMj" data-callback="callback_recaptcha"></div>
    <div class="error_message" id="error_message"></div>
    <a href="#!" onclick="clickMailButton()" class="send_btn">送信する</a>
</form>



<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="{{ asset('js/index.js') }}"></script>
@endsection