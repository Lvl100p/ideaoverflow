<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Comment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;


class PostCommentController extends Controller
{

    /**
     * Show the form for creating a new comment.
     *
     * @param  Post     $post
     * @return \Illuminate\Http\Response
     */
    public function create(Post $post)
    {
        return "Show form for creating comment";
    }

    /**
     * Store a newly created comment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Post  $post
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Post $post)
    {
        $this->validate($request, [
            'content' => 'required',
            ]);

        $comment = Comment::create(['user_id' => Auth::user()->id, 'post_id' => $post->id, 'content' => $request->content]);

        Session::flash('message', "Comment added successfully.");
        

        return Redirect::to('posts/' . $post->id);
    }

    /**
     * Display the specified comment.
     *
     * @param  Post     $post
     * @param  Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post, Comment $comment)
    {
        // Make sure that the comment belongs to the post
        if ($comment->post_id != $post->id) {
            abort(404);
        }

        return "Comment $comment->id : $comment->content";
    }

    /**
     * Show the form for editing the specified comment.
     *
     * @param  Post     $post
     * @param  Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post, Comment $comment)
    {
        // Make sure that the comment belongs to the post
        if ($comment->post_id != $post->id) {
            abort(404);
        }

        return "Show form for editing comment";
    }

    /**
     * Update the specified comment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Post     $post
     * @param  Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post, Comment $comment)
    {
        // Make sure that the comment belongs to the post
        if ($comment->post_id != $post->id) {
            abort(404);
        }

        $this->validate($request, [
            'content' => 'required',
            ]);				

        $comment->content = $request->content;
        $comment->save();

        return "Comment $comment->id updated.";
    }

    /**
     * Remove the specified comment from storage.
     *
     * @param  Post     $post
     * @param  Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post, Comment $comment)
    {
        // Make sure that the comment belongs to the post
        if ($comment->post_id != $post->id) {
            abort(404);
        }

        $comment->delete();

        return "Comment $comment->id deleted.";
    }
}
