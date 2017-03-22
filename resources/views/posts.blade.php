@extends('template')

@section('page-title', 'Ideaoverflow')

@section('content-title', 'Ideaoverflow')

@section('stylesheet')
{{ Html::style('css/posts.css') }}
@endsection

@section('script')

@endsection

@section('content')

@if(isset($posts))
@foreach($posts as $post)

<div class="posts">
	<div>
		<div>
			<h3><a class="post-title" href="{{'/posts/'.$post->id}}">{{ $post->title }}</a> <small><a href="" class="{{'post-tag '.$post->tag.'-tag'}}">{{ ucfirst($post->tag) }}</a></small></h3>
			<h5><a class="user-name" href="{{ '/users/'.$post->user['id'] }}">{{$post->user['name']}}</a> {{ '@'.$post->user['username'] }}</h5>
		</div>
	</div>
	<div>
		<p>{{ $post->body }}</p>
	</div>
	<div>
		<ul class="list-inline">
			<li><button class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up"></span>{{' Like | 4'}}</button></li>
			<li><a href="{{'/posts/'.$post->id}}">{{ $post->comments_count . ' Comment' . ($post->comments_count > 1? 's' : '')}}</a></li>
		</ul>
		
	</div> 
</div> <!-- posts -->

@endforeach
@endif

@endsection