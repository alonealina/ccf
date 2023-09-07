@extends('layouts.app')

@section('content')

<div class="mail_comp">
    お問い合わせありがとうございます。<br>
    返信が届くまでしばらくお待ちください。
</div>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="{{ asset('js/contact.js') }}"></script>


@endsection


@section('content_sp')

<div class="mail_comp">お問い合わせありがとうございます。<br>返信が届くまでしばらくお待ちください。</div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="{{ asset('js/contact.js') }}"></script>



@endsection