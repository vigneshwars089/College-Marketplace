<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;
use App\Http\Controllers\API\MailController;


class RegisteredUserController extends Controller
{
    public function fetch(){
        $users = Register::all();
        return response() -> json([
            'status'=>200,
            'users'=> $users,
        ]);
    }

    public function fetchByRole(Request $request){
        $users = Register::where('role', $request->input('$role'))->get();
        return response() -> json([
            'status'=>200,
            'users'=> $users,
        ]);
    }

    public function fetchLogin(Request $request){
        $users = Register::where('emailId', $request->input('$emailId'))->get();
        return response() -> json([
            'status'=>200,
            'users'=> $users,
        ]);
    }

    public function destroy(Request $request)
    {
        Register::where('id', $request->input('id'))->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'user deleted successfully',
        ]);
    }

    public function store(Request $request)
    {
        $user = new Register;
        $user->firstName = $request->input('firstName');
        $user->lastName = $request->input('lastName');
        $user->emailId = $request->input('emailId');
        $user->password = $request->input('password');
        $user->university = $request->input('university');
        $user->role = $request->input('role');
        $user->save();
        $mailController = new MailController;
        $mailController->basic_email($request->input('firstName'));
        return response() -> json([
            'status'=>200,
            'message'=> 'User added successfully',
        ]);
    }
}
