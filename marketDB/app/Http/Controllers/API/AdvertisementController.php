<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Advertisement;
use App\Models\Products;

class AdvertisementController extends Controller
{
    public function fetch(){
        $ads =  DB::table('products')->join('advertisement', 'products.productId', '=', 'advertisement.productId')->select('products.category', 'products.productName', 'advertisement.advId', 'advertisement.discount')->get();
        return response() -> json([
            'status'=>200,
            'ads'=> $ads,
        ]);
    }

    public function destroy(Request $request)
    {
        Advertisement::where('advId',$request->input('advId'))->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'Advertisement deleted successfully',
        ]);
    }
    
    public function store(Request $request)
    {   
        
        $ads = new Advertisement;
        $ads->productId = $request->input('productId');
        $ads->discount = $request->input('discount');
        $ads->createdBy = $request->input('createdBy');
        $ads->isValid = $request->input('isValid');
        $ads->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Advertisement added successfully',
        ]);
    }
}
