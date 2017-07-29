<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel/Vue Starter Kit</title>
        <link rel="stylesheet" href="/css/app.css" />
    </head>
    <body>
        <div id="app">
            <reviews />
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.8/ace.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>
