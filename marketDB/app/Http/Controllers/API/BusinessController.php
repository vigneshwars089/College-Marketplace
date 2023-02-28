<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Register;
use App\Models\Business;

class BusinessController extends Controller
{
    public function fetch(){
        $business = Business::where('isapproved',1)->get();
        return response() -> json([
            'status'=>200,
            'business'=> $business,
        ]);
    }
    public function fetchall(){
        $business = Business::all();
        return response() -> json([
            'status'=>200,
            'business'=> $business,
        ]);
    }

    public function destroy(Request $request)
    {
        Business::where('businessId', $request->input('businessId'))->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'Business deleted successfully',
        ]);
    }
    
    public function store(Request $request)
    {
        //$business = Business::select('businessId')->where('businessname', $request->input('businessname'))->first();
        $user = Register::select('id')->where('emailId', $request->input('createdBy'))->first();
        $business = new Business;
        //$business->businessid = $business->businessid;
        $business->businessname = $request->input('businessname');
        $business->userId = $user->id;
        $business->isapproved = $request->input('isapproved');
        $business->isValid = $request->input('isValid');
        $business->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Business added successfully',
        ]);
    }
    public function update(Request $request)
    {
        //$business = Business::select('businessId')->where('businessname', $request->input('businessname'))->first();
        //$user = Register::select('id')->where('emailId', $request->input('createdBy'))->first();
        // $business =Business::find($request->input('businessId'));
        // $business->isapproved = 1;
        // $business->update();
        Business::where('businessId',$request->input('businessId'))->update(array(
            'isapproved'=>1,));
        return response() -> json([
            'status'=>200,
            'message'=> 'Business updated successfully',
        ]);
    }
}
