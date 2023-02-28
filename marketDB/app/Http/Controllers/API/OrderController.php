<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Products;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $product = Products::select('productId')->where('productName', $request->input('productName'))->first();
        $order = new Order;
        $order->productId = $product->productId;
        $order->createdBy = $request->input('createdBy');
        $order->isPlaced = $request->input('isPlaced');
        $order->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Order created successfully',
        ]);
    }
}
