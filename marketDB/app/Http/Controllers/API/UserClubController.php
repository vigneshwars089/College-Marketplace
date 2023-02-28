<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserClub;
use App\Models\Register;
use App\Models\Club;

class UserClubController extends Controller
{
    public function store(Request $request)
    {
        $user = Register::select('id')->where('emailId', $request->input('emailId'))->first();
        $club = Club::select('clubId')->where('clubName', $request->input('clubName'))->first();
        $userclub = new UserClub;
        $userclub->userId = $user->id;
        $userclub->clubId = $club->clubId;
        $userclub->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'User Joined the Club successfully',
        ]);
    }

    public function destroy(Request $request)
    {
        $user = Register::select('id')->where('emailId', $request->input('emailId'))->first();
        $club = Club::select('clubId')->where('clubName', $request->input('clubName'))->first();
        echo $user->id;
        echo $club->clubId;
        //$product = Products::select('productId')->where('productName', $request->input('productName'))->first();
        UserClub::where('userId', $user->id)->where('clubId', $club->clubId)->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'User left the club successfully',
        ]);
    }
}
