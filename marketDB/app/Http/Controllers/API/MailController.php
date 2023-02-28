<?php
namespace App\Http\Controllers\API;
use Mail;
// use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;



class MailController extends Controller

{

    public function basic_email($name) {

        $data = array('name'=>$name);

     

        Mail::send(['text'=>'mail'], $data, function($message) {

           $message->to('saalailavanya@gmail.com', 'Lavanya')->subject

              ('Escolar Application SignUp');

           $message->from('vigneshwars089@gmail.com','Vignesh');

        });

        echo "Email Sent. Check your inbox.";

     }

}
