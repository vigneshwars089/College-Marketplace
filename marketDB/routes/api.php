<?php

use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\RegisteredUserController;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\BusinessController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\UserClubController;
use App\Http\Controllers\API\ClubController;
use App\Http\Controllers\API\ChatController;
use App\Http\Controllers\API\MailController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\API\AdvertisementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/addStudent',[StudentController::class, 'store']);

//advertisement
Route::get('/getadvs', [AdvertisementController::class, 'fetch']);
Route::post('/removeadv', [AdvertisementController::class, 'destroy']);
Route::post('/addadv', [AdvertisementController::class, 'store']);

//business
Route::post('/addbusiness', [BusinessController::class, 'store']);
Route::get('/getbusiness', [BusinessController::class, 'fetch']);
Route::get('/getbusinessall', [BusinessController::class, 'fetchall']);
Route::post('/removebusiness', [BusinessController::class, 'destroy']);
Route::post('/updatebusiness', [BusinessController::class, 'update']);

//RegisteredUsers
Route::get('/getusers', [RegisteredUserController::class, 'fetch']);
Route::post('/getusersbyrole', [RegisteredUserController::class, 'fetchByRole']);
Route::get('/checklogin', [RegisteredUserController::class, 'fetchLogin']);
Route::post('/adduser', [RegisteredUserController::class, 'store']);
Route::post('/removeuser', [RegisteredUserController::class, 'destroy']);

//products
Route::get('/getproducts', [ProductsController::class, 'fetch']);
Route::post('/addproduct', [ProductsController::class, 'store']);
Route::post('/removeproduct', [ProductsController::class, 'destroy']);
Route::get('/view-prd-graph', [ProductsController::class, 'graph']);
Route::post('/getproductsByUser', [ProductsController::class, 'fetchByUser']); 


//posts
Route::get('/getposts', [PostController::class, 'fetch']);
Route::post('/addpost', [PostController::class, 'store']);
Route::post('/removepost', [PostController::class, 'destroy']);

//chat
Route::get('/getchat', [ChatController::class, 'fetch']);
Route::post('/chat', [ChatController::class, 'store']);

//orders
Route::post('/buyproduct', [OrderController::class, 'store']);

//club
Route::post('/addclub', [ClubController::class, 'store']);
Route::get('/getclubsusercount', [ClubController::class, 'fetch']);
Route::get('/getclubs', [ClubController::class, 'fetchAll']);
Route::post('/getclubsByUser', [ClubController::class, 'fetchByUser']);
Route::post('/removeclub', [ClubController::class, 'destroy']);

//userclubMapping
Route::post('/joinclub', [UserClubController::class, 'store']);
Route::post('/leaveclub', [UserClubController::class, 'destroy']);

//payment
Route::post('/orderpayment', [PaymentController::class, 'store']);

Route::get('/sendbasicemail', [MailController::class, 'basic_email']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
