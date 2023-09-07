<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NokotsudoController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function work()
    {
        return view('work');
    }

    public function contact()
    {
        return view('contact');
    }

    public function mail_send(Request $request)
    {
        $captcha = 0;
        if (isset($request['g-recaptcha-response'])) {
        $captcha = $request['g-recaptcha-response'];
        }
        if ($captcha) {
            $data = ['name' => $request->name,
            'kana' => $request->kana,
            'mail' => $request->mail,
            'zip' => $request->zip,
            'address' => $request->address,
            'building' => $request->building,
            'mail' => $request->mail,
            'tel' => $request->tel,
            'content' => $request->content,];

            $mail = $request->mail;

            Mail::send('mail', $data, function($message) use ($mail){
                $message->to($mail, 'info@henson583.com')->subject('【高野山遍照尊院】お問い合わせ完了のご案内');
            });

            Mail::send('mail_admin', $data, function($message) {
                $message->to('info@henson583.com', 'info@henson583.com')->subject('【高野山遍照尊院】お問い合わせ受け付けのお知らせ');
            });

            Mail::send('mail_admin', $data, function($message) {
                $message->to('william_billl2008@yahoo.co.jp', 'info@henson583.com')->subject('【高野山遍照尊院】お問い合わせ受け付けのお知らせ');
            });
        }

        return redirect()->to('mail_comp');
    }

    public function mail_comp()
    {
        return view('mail_comp');
    }


}
