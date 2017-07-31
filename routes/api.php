<?php

use Illuminate\Http\Request;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, PUT, PATCH, DELETE, GET, OPTIONS');

Route::get('/notes', function() {
  return App\Note::all();
});

Route::get('/notes/{id}', function($id) {
  return App\Note::findOrFail($id);
});
