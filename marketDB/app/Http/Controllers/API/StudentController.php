<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    Public function store(Request $request)
    {
    $student = new Student;
    $student->name = $request->input('name');
    $student->course = $request->input('course');
    $student->save();

    return response()->json([
        'status' => 200,
        'message'=>'created successfully'     
    ]);
    }
}
