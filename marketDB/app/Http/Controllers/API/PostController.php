<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Register;

class PostController extends Controller
{
    public function fetch(){
        $posts = DB::table('registeredusers')->join('post', 'registeredusers.id', '=', 'post.userId')->select('post.postid', 'post.content', 'firstName')->get();
        return response() -> json([
            'status'=>200,
            'posts'=> $posts,
        ]);
    }

    public function destroy(Request $request)
    {
        Post::where('postId', $request->input('id'))->delete();
        return response() -> json([
            'status'=>200,
            'message'=> 'Post deleted successfully',
        ]);
    }

    public function store(Request $request)
    {
        $user = Register::select('id')->where('emailId', $request->input('emailId'))->first();
        $post = new Post;
        $post->userId = $user->id;
        $post->content = $request->input('content');
        $post->createdBy = $request->input('createdBy');
        $post->isValid = $request->input('isValid');
        //$post->postedOn = $request->input('postedOn');
        $post->save();
        return response() -> json([
            'status'=>200,
            'message'=> 'Post created successfully',
        ]);
    }
}
