<?php

namespace App\Http\Controllers\API;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Club;

class ClubController extends Controller
{
    public function fetch()
    {
        $clubs = DB::table('userclub')->join('clubs', 'userclub.clubId', '=', 'clubs.clubId')
        ->addSelect(DB::raw('count(userclub.userclubId) as Total'))
        ->addSelect(DB::raw('clubs.clubName as clubName'))
        ->groupBy('clubs.clubName')->get();
        return response() -> json([
            'status'=>200,
            'clubs'=> $clubs,
        ]);
    }

    public function fetchAll(){
        $clubs = Club::all();
        return response() -> json([
            'status'=>200,
            'clubs'=> $clubs,
        ]);
    }

    public function fetchByUser(Request $request){
        $clubs = DB::table('clubs')->join('userclub', 'clubs.clubId', '=', 'userclub.clubId')
        ->join('registeredusers', 'userclub.userId', '=', 'registeredusers.id')
        ->where('emailId', $request->input('emailId'))
        ->select('clubname')->get();
        return response() -> json([
            'status'=>200,
            'clubs'=> $clubs,
        ]);
    }

    public function destroy(Request $request)
    {
        Club::where('clubName', $request->input('clubName'))->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'Club deleted successfully',
        ]);
    }

    public function store(Request $request)
    {
        $club = new Club;
        $club->clubName = $request->input('clubName');
        $club->clubActivity = $request->input('clubActivity');
        $club->isActive = $request->input('isActive');
        $club->createdBy = $request->input('createdBy');
        $club->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Club added successfully',
        ]);
    }
}
