<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('page-title', 'Ideaoverflow')</title>

    <!-- child specific stylesheets -->
    @yield('stylesheet')
    {{ Html::style('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css') }}
    {{ Html::style('css/bootstrap.css') }}
    {{ Html::style('css/custom.css') }}

    <!-- TODO: @annahe change the appropriate things  -->
    <!-- Used for facebook like -->
    <meta property="og:url" content=""/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content=""/>
    <meta property="og:description" content="ideaoverflow, a premium platform for idea and group forming"/>
    <meta property="og:image"
          content="http://ghk.h-cdn.co/assets/16/09/980x490/landscape-1457107485-gettyimages-512366437.jpg"/>
</head>
<body class="container full-height">

<div id="fb-root"></div>
<div class="row">
    <div class="col-sm-12">
        @include('includes.nav')
    </div>
</div>

<div id="content" class="row">

    <main class="col-xs-12 col-md-offset-1 col-md-10">

        @yield('content')

    </main>
</div>

<div class="row">
    <div class="col-xs-12 col-md-offset-1 col-md-10">
        <hr/>
        @include('includes.footer')
    </div>
</div>

</body>


{{ Html::script('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js') }}
{{ Html::script('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js') }}

<!-- child specific scripts -->
@yield('script')
<script>
    window.fbAsyncInit = function () {
        FB.init({
            status: true, // check login status
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true  // parse XFBML
        });
    };
    // Load the SDK Asynchronously
    (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
</script>
