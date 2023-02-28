<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\Products;
use App\Models\Order;


class PaymentController extends Controller
{
    //
    public function store(Request $request)
    {
        $product = Products::select('productId')->where('productName', $request->input('productName'))->first();
        $order = new Order;
        $order->productId = $product->productId;
        $order->createdBy = $request->input('createdBy');
        $order->isPlaced = $request->input('isPlaced');
        $order->save();
        $order = Order::select('orderId')->where('productId', $product->productId)->first();
        $payment = new Payment;
        $payment->orderId = $order->orderId;
        $payment->fullName = $request->input('fullName');
        $payment->emailId = $request->input('emailId');
        $payment->address = $request->input('address');
        $payment->city = $request->input('city');
        $payment->state = $request->input('state');
        $payment->zip = $request->input('zip');
        $payment->nameOnCard = $request->input('nameOnCard');
        $payment->creditCard = $request->input('creditCard');
        $payment->expMonth = $request->input('expMonth');
        $payment->expYear = $request->input('expYear');
        $payment->cvv = $request->input('cvv');
        $payment->createdBy = $request->input('createdBy');
        $payment->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Payment added successfully',
        ]);
    }

}
