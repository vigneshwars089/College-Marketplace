<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\Register;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    public function fetch(Request $request){
        $user = Register::select('id')->where('emailId', $request->input('emailId'))->first();
        $chat =  DB::table('chat')->where('sentBy', $request->input('sentBy'))->where('sentTo', $request->input('sentTo'))->first();
        return response() -> json([
            'status'=>200,
            'chat'=> $chat,
        ]);
    }

    public function store(Request $request)
    {
        $chat = new Chat;
        $chat->sentBy = $request->input('sentBy');
        $chat->sentTo = $request->input('sentTo');
        $chat->message = $request->input('message');
        $chat->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Chat Conversation saved successfully',
        ]);
    }
}
