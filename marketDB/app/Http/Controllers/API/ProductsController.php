<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    public function fetch(){
        $products = Products::all();
        return response() -> json([
            'status'=>200,
            'products'=> $products,
        ]);
    }

    public function store(Request $request)
    {
        $product = new Products;
        $product->productName = $request->input('productName');
        $product->productDesc = $request->input('productDesc');
        $product->category = $request->input('category');
        $product->price = $request->input('price');
        $product->createdBy = $request->input('createdBy');
        $product->role = $request->input('role');
        $product->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Product added successfully',
        ]);
    }

    public function graph(){
        $prds = DB::table('products')
        ->addSelect(DB::raw('category'))
        ->addSelect(DB::raw('count(productName) as count'))
        ->groupBy('category')->get();
        return response() -> json([
            'status'=>200,
            'prds'=> $prds,
        ]);
    }

    public function destroy(Request $request)
    {

        Products::where('productId', $request->input('productId'))->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'Product deleted successfully',
        ]);
    }
    public function fetchByUser(Request $request)
    {
        $products = Products::where('createdBy', $request->input('createdBy'))->get();
        return response() -> json([
            'status'=>200,
            'products'=> $products,
        ]);

    }
}
